import { BookingForm } from "@/components/booking/BookingForm";
import Link from "next/link";

export default function BookingPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(160deg, var(--cream) 0%, var(--warm-off) 50%, var(--parchment) 100%)",
      }}
    >
      {/* ── Hero strip ── */}
     
      <div
        className="relative overflow-hidden px-4 sm:px-6 py-16 sm:py-20 text-center"
        style={{
          background:
            "linear-gradient(135deg, var(--ink) 0%, var(--ink-soft) 60%, #3a1c26 100%)",
        }}
      >
        {/* blobs */}
        <div
          className="absolute top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            background: "rgba(201,169,110,0.12)",
            filter: "blur(72px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-72 h-72 translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none"
          style={{
            background: "rgba(156,74,94,0.15)",
            filter: "blur(56px)",
          }}
        />

        <div className="relative animate-fade-up">
          <div className="eyebrow justify-center" style={{ color: "var(--gold)" }}>
            <span style={{ background: "linear-gradient(90deg, transparent, var(--gold))", height: "1px", width: "2rem", display: "block" }} />
            Reservations
            <span style={{ background: "linear-gradient(90deg, var(--gold), transparent)", height: "1px", width: "2rem", display: "block" }} />
          </div>

          <h1
            className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
          >
            Book Your{" "}
            <span className="text-shimmer italic">Experience</span>
          </h1>

          <p
            className="mt-4 text-sm sm:text-base max-w-md mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Choose a service, date and time. We&apos;ll confirm your appointment and prepare everything beautifully.
          </p>

          {/* trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {["Instant Confirmation", "Free Rescheduling", "5★ Rated"].map((b) => (
              <span key={b} className="badge" style={{ borderColor: "rgba(201,169,110,0.28)" }}>
                <span className="dot-gold" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Form section ── */}
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-14 sm:py-20">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] font-semibold mb-10 transition-colors duration-200"
          style={{ color: "var(--muted)" }}
        >
          ← Back to Home
        </Link>

        <BookingForm />

        {/* bottom note */}
        <p
          className="mt-8 text-center text-xs leading-relaxed"
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
    </div>
  );
}