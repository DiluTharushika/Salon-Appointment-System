"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FilesetResolver, FaceLandmarker } from "@mediapipe/tasks-vision";

type FaceShape = "oval" | "round" | "square" | "heart" | "oblong" | "unknown";
type HairLength = "short" | "medium" | "long";
type HairType = "straight" | "wavy" | "curly" | "coily";
type Goal = "volume" | "slim_face" | "low_maintenance" | "formal" | "trend";

type StyleCard = {
  id: string;
  name: string;
  image: string; // ✅ NEW
  price: number;
  forShapes: FaceShape[];
  forLengths: HairLength[];
  forTypes: HairType[];
  goals: Goal[];
  notes: string;
};

const STYLES: StyleCard[] = [
  {
    id: "side-part-cut",
    name: "Side Part + Face-Framing Layers",
    image: "/hairstyles/sample/Side-Part-Layers.jpg",
    price: 3500,
    forShapes: ["round", "square", "heart", "oval"],
    forLengths: ["medium", "long"],
    forTypes: ["straight", "wavy", "curly"],
    goals: ["slim_face", "low_maintenance", "trend"],
    notes: "Adds angles and elongates the face. Easy to maintain with a blow-dry.",
  },
  {
    id: "angled-bob",
    name: "Angled Bob",
    image: "/hairstyles/sample/Angled-Bob.jpg",
    price: 4500,
    forShapes: ["round", "oval", "heart"],
    forLengths: ["short", "medium"],
    forTypes: ["straight", "wavy"],
    goals: ["slim_face", "trend"],
    notes: "Sharp structure near jawline. Great for round faces.",
  },
  {
    id: "textured-lob",
    name: "Textured Lob (Long Bob)",
    image: "/hairstyles/sample/Textured-Lob.jpg",
    price: 4200,
    forShapes: ["oval", "round", "square", "heart"],
    forLengths: ["medium"],
    forTypes: ["straight", "wavy", "curly"],
    goals: ["low_maintenance", "trend"],
    notes: "Balanced length, modern look, easy styling.",
  },
  {
    id: "curtain-bangs",
    name: "Curtain Bangs + Layers",
    image: "/hairstyles/sample/Curtain-Bangs.jpg",
    price: 3000,
    forShapes: ["oval", "heart", "oblong"],
    forLengths: ["medium", "long"],
    forTypes: ["straight", "wavy", "curly"],
    goals: ["formal", "trend"],
    notes: "Softens forehead area and frames cheekbones.",
  },
  {
    id: "long-layers",
    name: "Long Layers",
    image: "/hairstyles/sample/Long-Layers.jpg",
    price: 3800,
    forShapes: ["oval", "round", "square", "heart", "oblong"],
    forLengths: ["long"],
    forTypes: ["straight", "wavy", "curly", "coily"],
    goals: ["low_maintenance", "trend", "volume"],
    notes: "Classic layering for movement and softness.",
  },
  {
    id: "soft-waves",
    name: "Soft Waves + Long Layers",
    image: "/hairstyles/sample/Soft-Waves.jpg",
    price: 5000,
    forShapes: ["square", "heart", "oval", "round"],
    forLengths: ["medium", "long"],
    forTypes: ["wavy", "curly", "straight"],
    goals: ["volume", "formal"],
    notes: "Adds softness and movement; great for events.",
  },
];

function estimateFaceShapeFromLandmarks(
  landmarks: { x: number; y: number }[]
): FaceShape {
  if (!landmarks?.length) return "unknown";

  let minX = 1,
    minY = 1,
    maxX = 0,
    maxY = 0;

  for (const p of landmarks) {
    if (p.x < minX) minX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.x > maxX) maxX = p.x;
    if (p.y > maxY) maxY = p.y;
  }

  const width = Math.max(1e-6, maxX - minX);
  const height = Math.max(1e-6, maxY - minY);
  const ratio = height / width;

  const leftCheek = landmarks[234];
  const rightCheek = landmarks[454];
  const leftJaw = landmarks[172];
  const rightJaw = landmarks[397];

  if (!leftCheek || !rightCheek || !leftJaw || !rightJaw) {
    if (ratio > 1.55) return "oblong";
    if (ratio < 1.25) return "round";
    return "oval";
  }

  const cheekWidth = Math.abs(rightCheek.x - leftCheek.x);
  const jawWidth = Math.abs(rightJaw.x - leftJaw.x);
  const jawToCheek = jawWidth / Math.max(1e-6, cheekWidth);

  if (ratio > 1.6) return "oblong";
  if (ratio > 1.4 && jawToCheek < 0.85) return "heart";
  if (jawToCheek > 0.95) return "square";
  if (ratio < 1.28) return "round";
  return "oval";
}

function currencyLKR(x: number) {
  return `LKR ${x.toLocaleString()}`;
}

export default function HairMatchClient() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imgReady, setImgReady] = useState(false);

  // Questions
  const [hairLength, setHairLength] = useState<HairLength>("medium");
  const [hairType, setHairType] = useState<HairType>("wavy");
  const [goal, setGoal] = useState<Goal>("slim_face");
  const [maxBudget, setMaxBudget] = useState<number>(6000);

  // Model
  const [loadingModel, setLoadingModel] = useState(false);
  const [modelError, setModelError] = useState<string | null>(null);
  const [landmarker, setLandmarker] = useState<FaceLandmarker | null>(null);

  // Result
  const [detecting, setDetecting] = useState(false);
  const [faceShape, setFaceShape] = useState<FaceShape>("unknown");
  const [message, setMessage] = useState<string>("Upload a selfie to start.");
  const [analyzed, setAnalyzed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoadingModel(true);
        setModelError(null);
        setMessage("Loading face model…");

        const fileset = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2/wasm"
        );

        const fm = await FaceLandmarker.createFromOptions(fileset, {
          baseOptions: { modelAssetPath: "/models/face_landmarker.task" },
          runningMode: "IMAGE",
          numFaces: 1,
        });

          if (!cancelled) {
            setLandmarker(fm);
            setMessage("AI ready. Please upload your selfie.");
          }
        } catch (e) {
          console.error("[HairMatch] Model load error:", e);
          if (!cancelled) {
            setModelError(
              "Face analysis system unavailable. Please check your connection."
            );
            setMessage("System load failed.");
          }
        } finally {
          if (!cancelled) setLoadingModel(false);
        }
      }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  function onPickFileClick() {
    fileInputRef.current?.click();
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;

    const url = URL.createObjectURL(f);
    setImageUrl(url);
    setImgReady(false);
    setFaceShape("unknown");
    setMessage("Loading image preview…");
    setAnalyzed(false);
  }

  async function runDetection() {
    if (modelError) {
      setMessage("Model error. Please fix model/WASM loading.");
      return;
    }
    if (!landmarker) {
      setMessage("Model not loaded yet. Please wait.");
      return;
    }
    if (!imageUrl || !imgReady || !imgRef.current) {
      setMessage("Please upload a selfie first.");
      return;
    }

    try {
      setDetecting(true);
      setMessage("Analyzing face…");

      const img = imgRef.current;
      const canvas = canvasRef.current;
      if (!canvas) throw new Error("Canvas not available");

      const w = img.naturalWidth || img.width;
      const h = img.naturalHeight || img.height;
      if (!w || !h) throw new Error("Image has invalid dimensions");

      canvas.width = w;
      canvas.height = h;

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) throw new Error("Canvas context not available");

      ctx.drawImage(img, 0, 0, w, h);

      const res = landmarker.detect(canvas);
      const faces = res.faceLandmarks;

      if (!faces || faces.length === 0) {
        setFaceShape("unknown");
        setMessage("No face detected. Use a clear front-facing selfie.");
        setAnalyzed(false);
        return;
      }

      const landmarks = faces[0] as { x: number; y: number }[];
      const shape = estimateFaceShapeFromLandmarks(landmarks);

      setFaceShape(shape);
      setMessage("Done.");
      setAnalyzed(true);
    } catch (e) {
      console.error("[HairMatch] Detection error:", e);
      setFaceShape("unknown");
      setMessage("Could not analyze. Try another selfie with better lighting.");
      setAnalyzed(false);
    } finally {
      setDetecting(false);
    }
  }

  const analyzeDisabled =
    loadingModel ||
    !!modelError ||
    detecting ||
    !landmarker ||
    !imageUrl ||
    !imgReady;

  const filteredStyles = useMemo(() => {
    if (!analyzed || faceShape === "unknown") return [];

    return STYLES.filter((s) => {
      const okShape = s.forShapes.includes(faceShape);
      const okLen = s.forLengths.includes(hairLength);
      const okType = s.forTypes.includes(hairType);
      const okGoal = s.goals.includes(goal);
      const okBudget = s.price <= maxBudget;
      return okShape && okLen && okType && okGoal && okBudget;
    }).slice(0, 6);
  }, [analyzed, faceShape, hairLength, hairType, goal, maxBudget]);

  return (
    <div className="grid gap-8 md:grid-cols-2 relative">
      {/* LEFT */}
      <section className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-[rgba(201,169,110,0.15)] shadow-sm relative overflow-hidden">
        <h2 className="font-serif text-3xl" style={{ color: "var(--ink)" }}>1) Quick questions</h2>
        <p className="mt-2 text-sm opacity-80 mb-6">
          Answer these first so recommendations match your needs.
        </p>

        <div className="grid gap-5">
          <label className="text-sm block">
            <div className="mb-2 font-medium opacity-80 uppercase tracking-widest text-[10px]">Current length</div>
            <select
              className="w-full rounded-xl border border-[rgba(32,26,23,0.15)] px-4 py-3 bg-transparent focus:outline-none focus:ring-1 focus:ring-[var(--gold)] transition-all"
              value={hairLength}
              onChange={(e) => setHairLength(e.target.value as HairLength)}
            >
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>
          </label>

          <label className="text-sm block">
            <div className="mb-2 font-medium opacity-80 uppercase tracking-widest text-[10px]">Hair type</div>
            <select
              className="w-full rounded-xl border border-[rgba(32,26,23,0.15)] px-4 py-3 bg-transparent focus:outline-none focus:ring-1 focus:ring-[var(--gold)] transition-all"
              value={hairType}
              onChange={(e) => setHairType(e.target.value as HairType)}
            >
              <option value="straight">Straight</option>
              <option value="wavy">Wavy</option>
              <option value="curly">Curly</option>
              <option value="coily">Coily</option>
            </select>
          </label>

          <label className="text-sm block">
            <div className="mb-2 font-medium opacity-80 uppercase tracking-widest text-[10px]">Goal</div>
            <select
              className="w-full rounded-xl border border-[rgba(32,26,23,0.15)] px-4 py-3 bg-transparent focus:outline-none focus:ring-1 focus:ring-[var(--gold)] transition-all"
              value={goal}
              onChange={(e) => setGoal(e.target.value as Goal)}
            >
              <option value="slim_face">Make face look slimmer</option>
              <option value="volume">Add volume</option>
              <option value="low_maintenance">Low maintenance</option>
              <option value="formal">Formal / event look</option>
              <option value="trend">Trendy style</option>
            </select>
          </label>

          <label className="text-sm block">
            <div className="mb-2 font-medium opacity-80 uppercase tracking-widest text-[10px]">Max budget (LKR)</div>
            <input
              className="w-full accent-[var(--gold)] cursor-pointer"
              type="range"
              min={2000}
              max={12000}
              step={500}
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
            />
            <div className="mt-2 font-semibold" style={{ color: "var(--ink)" }}>{currencyLKR(maxBudget)}</div>
          </label>
        </div>

        <div className="divider-gold my-8" style={{ maxWidth: "100%" }} />

        <h2 className="font-serif text-3xl" style={{ color: "var(--ink)" }}>2) Upload selfie</h2>
        <p className="mt-2 text-sm opacity-80 mb-6">
          Best: front-facing, good lighting, no heavy filters.
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={onFileChange}
          style={{ display: "none" }}
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap">
          <button
            type="button"
            onClick={onPickFileClick}
            className="btn-ghost-ink"
            style={{ padding: "10px 24px" }}
          >
            Upload Photo
          </button>

          <button
            onClick={runDetection}
            disabled={analyzeDisabled}
            className="btn-gold"
            style={{
              padding: "10px 24px",
              opacity: analyzeDisabled ? 0.6 : 1,
              cursor: analyzeDisabled ? "not-allowed" : "pointer",
            }}
          >
            {detecting ? "Analyzing..." : "Analyze"}
          </button>
        </div>
        
        <div className="mt-4 text-[13px] italic" style={{ color: "var(--muted)" }}>
          {loadingModel ? "Loading AI model…" : modelError ? modelError : message}
        </div>

        {imageUrl && (
          <div className="mt-6 rounded-2xl overflow-hidden border border-[rgba(32,26,23,0.1)] p-2" style={{ background: "rgba(255,255,255,0.4)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src={imageUrl}
              alt="Uploaded selfie preview"
              className="max-h-[380px] w-full rounded-xl object-contain bg-[rgba(32,26,23,0.03)]"
              onLoad={() => {
                setImgReady(true);
                setMessage("Ready. Click Analyze.");
              }}
              onError={() => {
                setImgReady(false);
                setMessage("Could not load image preview. Try another file.");
              }}
            />
          </div>
        )}

        {detecting && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-50 flex flex-col items-center justify-center rounded-3xl animate-fade-in">
            <div className="w-12 h-12 border-4 border-[var(--gold)] border-t-transparent rounded-full animate-spin mb-4" />
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-[var(--ink)]">Analyzing Features</div>
          </div>
        )}

        <canvas ref={canvasRef} style={{ display: "none" }} />
      </section>

      {/* RIGHT */}
      <section className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-[rgba(201,169,110,0.15)] shadow-sm flex flex-col">
        <h2 className="font-serif text-3xl" style={{ color: "var(--ink)" }}>3) Recommendations</h2>

        <div className="mt-6 p-5 rounded-2xl border border-[rgba(201,169,110,0.2)] bg-[rgba(201,169,110,0.05)]">
          <div className="text-[10px] uppercase tracking-widest font-semibold opacity-70">Detected face shape</div>
          <div className="mt-1 text-2xl font-serif" style={{ color: "var(--ink)" }}>
            {faceShape === "unknown" ? "—" : faceShape.toUpperCase()}
          </div>
        </div>

        {!analyzed ? (
          <div className="mt-10 text-center flex-1 flex flex-col items-center justify-center opacity-60">
            <div className="text-4xl mb-4">✨</div>
            <p className="max-w-[250px] mx-auto text-sm leading-relaxed">
              Upload a photo and click Analyze to discover tailored styles and pricing.
            </p>
          </div>
        ) : filteredStyles.length === 0 ? (
          <div className="mt-10 text-center flex-1 flex flex-col items-center justify-center opacity-60">
            <p className="max-w-[300px] mx-auto text-sm leading-relaxed">
              No matching styles under your budget. Try increasing your budget or changing preferences.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6">
            {filteredStyles.map((s) => {
              const bookHref =
                `/booking?style=${encodeURIComponent(s.name)}` +
                `&price=${encodeURIComponent(String(s.price))}` +
                `&faceShape=${encodeURIComponent(faceShape)}` +
                `&length=${encodeURIComponent(hairLength)}` +
                `&type=${encodeURIComponent(hairType)}` +
                `&goal=${encodeURIComponent(goal)}`;

              return (
                <div key={s.id} className="group rounded-2xl border border-[rgba(32,26,23,0.1)] p-4 bg-white hover:shadow-md transition-all duration-300">
                  {/* ✅ Image Fix - full visibility */}
                  <div className="mb-4 overflow-hidden rounded-xl bg-[rgba(32,26,23,0.03)] flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      style={{ maxHeight: "320px", display: "block" }}
                    />
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-serif" style={{ color: "var(--ink)" }}>{s.name}</div>
                      <div className="mt-1.5 text-[13px] leading-relaxed opacity-70">{s.notes}</div>
                    </div>
                    <div className="text-sm font-semibold whitespace-nowrap px-3 py-1 rounded-full bg-[rgba(201,169,110,0.1)] text-[var(--ink)]">
                      {currencyLKR(s.price)}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-[rgba(32,26,23,0.05)]">
                    <Link
                      href={bookHref}
                      className="text-[11px] uppercase tracking-widest font-semibold text-[var(--gold)] hover:text-[var(--rose)] transition-colors inline-flex items-center gap-2"
                    >
                      Book this style <span aria-hidden="true">&rarr;</span>
                    </Link>

                    <Link
                      href="/services"
                      className="text-[11px] uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
                    >
                      View services
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {analyzed && filteredStyles.length > 0 && (
          <div className="mt-8 text-center text-[11px] uppercase tracking-widest opacity-40">
            Select a style to continue booking
          </div>
        )}
      </section>
    </div>
  );
}