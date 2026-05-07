import HairMatchClient from "@/components/hair-match/HairMatchClient";
import Container from "@/components/Container";

export default function HairMatchPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, var(--cream) 0%, var(--warm-off) 100%)",
      }}
    >
      {/* =========================
          HERO (full width)
      ========================== */}
      <section
        className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
        style={{
          background:
            "linear-gradient(135deg, var(--ink) 0%, var(--ink-soft) 65%, #3a1c26 100%)",
        }}
      >
        {/* Blobs */}
        <div
          className="absolute top-0 left-0 w-[30rem] h-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{ background: "rgba(156,74,94,0.20)", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[28rem] h-[28rem] translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none"
          style={{
            background: "rgba(201,169,110,0.12)",
            filter: "blur(80px)",
          }}
        />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            {/* Overline */}
            <div className="inline-flex items-center gap-4 mb-8">
              <div
                className="h-px w-14 sm:w-20"
                style={{ background: "rgba(201,169,110,0.5)" }}
              />
              <span
                className="text-[10px] sm:text-xs uppercase tracking-[0.55em] font-semibold"
                style={{ color: "var(--gold)" }}
              >
                AI Stylist
              </span>
              <div
                className="h-px w-14 sm:w-20"
                style={{ background: "rgba(201,169,110,0.5)" }}
              />
            </div>

            {/* Title */}
            <h1
              className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.03]"
              style={{ textShadow: "0 4px 32px rgba(0,0,0,0.35)" }}
            >
              Hair <span className="text-shimmer italic">Consultation</span>
            </h1>

            {/* Description */}
            <p
              className="mt-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              Upload a selfie to receive personalized, AI-driven hairstyle recommendations tailored perfectly to your unique face shape and preferences.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <HairMatchClient />
      </Container>
    </div>
  );
}