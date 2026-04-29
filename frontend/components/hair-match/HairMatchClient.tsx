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
    price: 3000,
    forShapes: ["oval", "heart", "oblong"],
    forLengths: ["medium", "long"],
    forTypes: ["straight", "wavy", "curly"],
    goals: ["formal", "trend"],
    notes: "Softens forehead area and frames cheekbones.",
  },
  {
    id: "soft-waves",
    name: "Soft Waves + Long Layers",
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
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // ✅ NEW
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
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );

        const fm = await FaceLandmarker.createFromOptions(fileset, {
          baseOptions: { modelAssetPath: "/models/face_landmarker.task" },
          runningMode: "IMAGE",
          numFaces: 1,
        });

        if (!cancelled) {
          setLandmarker(fm);
          setMessage("Model ready. Upload a selfie.");
        }
      } catch (e) {
        console.error("[HairMatch] Model load error:", e);
        if (!cancelled) {
          setModelError(
            "Failed to load model/WASM. If CDN blocked, we must host WASM locally."
          );
          setMessage("Model load failed.");
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

      // ✅ Draw the image to canvas (more stable than passing <img>)
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

      // ✅ Detect on canvas
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
    <div className="grid gap-8 md:grid-cols-2">
      {/* LEFT */}
      <section className="rounded-2xl border p-5">
        <h2 className="text-xl font-semibold">1) Quick questions</h2>
        <p className="mt-1 text-sm opacity-80">
          Answer these first so recommendations match your needs.
        </p>

        <div className="mt-4 grid gap-4">
          <label className="text-sm">
            <div className="mb-1 opacity-80">Current length</div>
            <select
              className="w-full rounded-lg border px-3 py-2 bg-transparent"
              value={hairLength}
              onChange={(e) => setHairLength(e.target.value as HairLength)}
            >
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>
          </label>

          <label className="text-sm">
            <div className="mb-1 opacity-80">Hair type</div>
            <select
              className="w-full rounded-lg border px-3 py-2 bg-transparent"
              value={hairType}
              onChange={(e) => setHairType(e.target.value as HairType)}
            >
              <option value="straight">Straight</option>
              <option value="wavy">Wavy</option>
              <option value="curly">Curly</option>
              <option value="coily">Coily</option>
            </select>
          </label>

          <label className="text-sm">
            <div className="mb-1 opacity-80">Goal</div>
            <select
              className="w-full rounded-lg border px-3 py-2 bg-transparent"
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

          <label className="text-sm">
            <div className="mb-1 opacity-80">Max budget (LKR)</div>
            <input
              className="w-full"
              type="range"
              min={2000}
              max={12000}
              step={500}
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
            />
            <div className="mt-1 opacity-80">{currencyLKR(maxBudget)}</div>
          </label>
        </div>

        <hr className="my-6 opacity-30" />

        <h2 className="text-xl font-semibold">2) Upload selfie</h2>
        <p className="mt-1 text-sm opacity-80">
          Best: front-facing, good lighting, no heavy filters.
        </p>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={onFileChange}
          style={{ display: "none" }}
        />

        <div className="mt-4 flex items-center gap-12 flex-wrap">
          <button
            type="button"
            onClick={onPickFileClick}
            className="btn-primary"
            style={{ padding: "10px 16px", textDecoration: "none" }}
          >
            Upload Photo
          </button>

          <button
            onClick={runDetection}
            disabled={analyzeDisabled}
            className="btn-primary"
            style={{
              padding: "10px 18px",
              opacity: analyzeDisabled ? 0.6 : 1,
              cursor: analyzeDisabled ? "not-allowed" : "pointer",
            }}
          >
            {detecting ? "Analyzing..." : "Analyze"}
          </button>

          <div className="text-sm opacity-80">
            {loadingModel ? "Loading model…" : modelError ? modelError : message}
          </div>
        </div>

        {imageUrl && (
          <div className="mt-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src={imageUrl}
              alt="Uploaded selfie preview"
              className="max-h-[420px] w-full rounded-xl object-contain bg-black/5"
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

        {/* ✅ Hidden canvas used for detection */}
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </section>

      {/* RIGHT */}
      <section className="rounded-2xl border p-5">
        <h2 className="text-xl font-semibold">3) Recommendations</h2>

        <div className="mt-4">
          <div className="text-sm opacity-80">Detected face shape</div>
          <div className="mt-1 text-2xl font-semibold">
            {faceShape === "unknown" ? "—" : faceShape.toUpperCase()}
          </div>
        </div>

        {!analyzed ? (
          <p className="mt-6 opacity-70">
            Upload a photo and click Analyze to see styles and prices.
          </p>
        ) : filteredStyles.length === 0 ? (
          <p className="mt-6 opacity-70">
            No matching styles under your budget. Try increasing budget or change
            goal/type.
          </p>
        ) : (
          <div className="mt-6 grid gap-4">
            {filteredStyles.map((s) => {
              const bookHref =
                `/booking?style=${encodeURIComponent(s.name)}` +
                `&price=${encodeURIComponent(String(s.price))}` +
                `&faceShape=${encodeURIComponent(faceShape)}` +
                `&length=${encodeURIComponent(hairLength)}` +
                `&type=${encodeURIComponent(hairType)}` +
                `&goal=${encodeURIComponent(goal)}`;

              return (
                <div key={s.id} className="rounded-xl border p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-semibold">{s.name}</div>
                      <div className="mt-1 text-sm opacity-80">{s.notes}</div>
                    </div>
                    <div className="text-sm font-semibold whitespace-nowrap">
                      {currencyLKR(s.price)}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-10 flex-wrap">
                    <Link
                      href={bookHref}
                      className="btn-primary"
                      style={{
                        padding: "9px 14px",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                      }}
                    >
                      Book this style
                    </Link>

                    <Link
                      href="/services"
                      style={{ textDecoration: "none" }}
                      className="text-sm underline opacity-80"
                    >
                      See related services
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-6 text-sm opacity-70">
          Tip: booking link can auto-fill style name + price (query params).
        </div>
      </section>
    </div>
  );
}