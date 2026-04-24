import { BookingForm } from "@/components/booking/BookingForm";
import Link from "next/link";
import Container from "@/components/Container";

export default function BookingPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(160deg, var(--cream) 0%, var(--warm-off) 50%, var(--parchment) 100%)",
      }}
    >
      {/* =========================
          HERO (full width)
      ========================== */}
      <section
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(135deg, var(--ink) 0%, var(--ink-soft) 60%, #3a1c26 100%)",
        }}
      >
        {/* Blobs */}
        <div
          className="absolute top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{ background: "rgba(201,169,110,0.12)", filter: "blur(72px)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none"
          style={{ background: "rgba(156,74,94,0.15)", filter: "blur(56px)" }}
        />

        <Container className="relative text-center">
          <div className="animate-fade-up mx-auto max-w-3xl">
            <div
              className="inline-flex items-center gap-4 mb-8"
              style={{ color: "var(--gold)" }}
            >
              <span
                className="h-px w-12 sm:w-16"
                style={{ background: "rgba(201,169,110,0.45)" }}
              />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.55em] font-semibold">
                Reservations
              </span>
              <span
                className="h-px w-12 sm:w-16"
                style={{ background: "rgba(201,169,110,0.45)" }}
              />
            </div>

            <h1
              className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.05]"
              style={{ textShadow: "0 4px 24px rgba(0,0,0,0.30)" }}
            >
              Book Your <span className="text-shimmer italic">Experience</span>
            </h1>

            <p
              className="mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              Choose a service, date and time. We&apos;ll confirm your appointment
              and prepare everything beautifully.
            </p>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {["Instant Confirmation", "Free Rescheduling", "5★ Rated"].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.35em] font-semibold"
                  style={{
                    border: "1px solid rgba(201,169,110,0.28)",
                    background: "rgba(201,169,110,0.08)",
                    color: "rgba(232,213,168,0.92)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span className="dot-gold" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </Container>

        {/* Bottom fade divider */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none">
          <div
            className="h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(247,241,238,0.30) 55%, rgba(247,241,238,1) 100%)",
            }}
          />
        </div>
      </section>

      {/* =========================
          FORM SECTION (padded)
      ========================== */}
      <Container className="py-14 sm:py-20">
        <div className="mx-auto max-w-2xl">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] font-semibold mb-10 transition-opacity hover:opacity-75"
            style={{ color: "var(--muted)" }}
          >
            ← Back to Home
          </Link>

          <BookingForm />

          {/* bottom note */}
          <p
            className="mt-8 text-center text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            By booking you agree to our{" "}
            <span
              className="underline underline-offset-4 cursor-pointer"
              style={{ color: "var(--rose)" }}
            >
              cancellation policy
            </span>
            . We&apos;ll send a confirmation to your phone number.
          </p>
        </div>
      </Container>
    </div>
  );
}