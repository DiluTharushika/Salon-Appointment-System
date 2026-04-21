import { ServiceCard } from "@/components/services/ServiceCard";
import Link from "next/link";

export default function PreviewPage() {
  const mockServices = [
    {
      id: "1",
      name: "Classic Cut",
      description:
        "A timeless haircut tailored to your personal style. Includes a wash, precision cut, and finish.",
      price: 45,
      duration: 45,
    },
    {
      id: "2",
      name: "Deluxe Grooming",
      description:
        "Haircut, beard trim, and a relaxing hot towel treatment — the complete artisanal experience.",
      price: 75,
      duration: 90,
    },
    {
      id: "3",
      name: "Radiance Facial",
      description:
        "A botanical infusion ritual that brightens, hydrates and restores your natural luminosity.",
      price: 95,
      duration: 60,
    },
    {
      id: "4",
      name: "Nail Atelier",
      description:
        "Precision nail sculpting with a curated palette of finishes, sealed with a gel topcoat.",
      price: 55,
      duration: 50,
    },
  ];

  return (
    <div
      className="min-h-screen pb-24"
      style={{
        background:
          "linear-gradient(160deg, var(--cream) 0%, var(--warm-off) 60%, var(--parchment) 100%)",
      }}
    >
      {/* ── Header bar ── */}
      <div
        className="relative overflow-hidden px-4 sm:px-6 py-14 sm:py-18"
        style={{
          background:
            "linear-gradient(135deg, var(--ink) 0%, var(--ink-soft) 65%, #3a1c26 100%)",
        }}
      >
        {/* blob */}
        <div
          className="absolute top-0 right-0 w-72 h-72 translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{ background: "rgba(201,169,110,0.12)", filter: "blur(64px)" }}
        />

        <div className="relative mx-auto max-w-6xl animate-fade-up">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] font-semibold mb-6 transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
          >
            ← Home
          </Link>

          <div className="inline-flex items-center gap-3 rounded-full px-4 py-2 mb-5"
            style={{
              background: "rgba(201,169,110,0.12)",
              border: "1px solid rgba(201,169,110,0.28)",
            }}
          >
            <span className="dot-gold" />
            <span
              className="text-[9px] uppercase tracking-[0.45em] font-semibold"
              style={{ color: "var(--gold-light)" }}
            >
              Component Gallery
            </span>
          </div>

          <h1
            className="font-serif text-4xl sm:text-5xl text-white leading-tight"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
          >
            UI Component{" "}
            <span className="text-shimmer italic">Preview</span>
          </h1>
          <p
            className="mt-3 text-sm max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.58)" }}
          >
            A curated showcase of the interface components used throughout The Atelier experience.
          </p>
        </div>
      </div>

      {/* ── Component sections ── */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* Service Cards */}
        <section className="space-y-6">
          <div>
            <div className="eyebrow">Components</div>
            <h2
              className="mt-4 font-serif text-2xl sm:text-3xl"
              style={{ color: "var(--ink)" }}
            >
              Service Cards
            </h2>
            <div className="divider-gold mt-4" style={{ maxWidth: "80px" }} />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {mockServices.map((s, i) => (
              <div
                key={s.id}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <ServiceCard
                  name={s.name}
                  description={s.description}
                  price={s.price}
                  duration={s.duration}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <div>
            <h2
              className="font-serif text-2xl sm:text-3xl"
              style={{ color: "var(--ink)" }}
            >
              Buttons &amp; Badges
            </h2>
            <div className="divider-gold mt-4" style={{ maxWidth: "80px" }} />
          </div>

          <div className="glass-card rounded-3xl p-8 space-y-6">
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-gold">Gold Button</button>
              <div
                className="flex items-center"
                style={{
                  background: "var(--ink)",
                  borderRadius: "1.25rem",
                  padding: "1.25rem 2rem",
                }}
              >
                <button className="btn-ghost">Ghost Button</button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Instant Confirmation", "Free Rescheduling", "5★ Rated", "Botanical"].map(
                (b) => (
                  <span key={b} className="badge">
                    <span className="dot-gold" />
                    {b}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Eyebrow / Typography */}
        <section className="space-y-6">
          <div>
            <h2
              className="font-serif text-2xl sm:text-3xl"
              style={{ color: "var(--ink)" }}
            >
              Typography &amp; Decorators
            </h2>
            <div className="divider-gold mt-4" style={{ maxWidth: "80px" }} />
          </div>
          <div className="glass-card rounded-3xl p-8 space-y-8">
            <div className="eyebrow">Eyebrow Label</div>
            <p className="font-serif text-4xl" style={{ color: "var(--ink)" }}>
              Headline Serif Display
            </p>
            <p
              className="font-serif text-3xl italic"
              style={{ color: "var(--rose)" }}
            >
              Italic Accent
            </p>
            <p
              className="font-serif text-3xl text-shimmer italic"
            >
              Gold Shimmer Text
            </p>
            <div className="divider-gold" />
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Body copy — elegant, precise, and designed for readability. Each word is intentional.
            </p>
          </div>
        </section>

        {/* CTA preview */}
        <section>
          <div className="mb-6">
            <h2
              className="font-serif text-2xl sm:text-3xl"
              style={{ color: "var(--ink)" }}
            >
              CTA Banner
            </h2>
            <div className="divider-gold mt-4" style={{ maxWidth: "80px" }} />
          </div>
          <div
            className="relative overflow-hidden rounded-3xl px-8 sm:px-14 py-14 text-center"
            style={{
              background:
                "linear-gradient(135deg, var(--ink) 0%, var(--ink-soft) 60%, #3a1c26 100%)",
              boxShadow: "0 32px 80px -24px rgba(28,20,16,0.55)",
            }}
          >
            <div
              className="absolute top-0 left-0 w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{ background: "rgba(201,169,110,0.12)", filter: "blur(60px)" }}
            />
            <div className="relative space-y-4">
              <div className="divider-gold mx-auto mb-4" style={{ maxWidth: "60px" }} />
              <p
                className="text-[9px] uppercase tracking-[0.55em] font-semibold"
                style={{ color: "var(--gold)" }}
              >
                Call to Action
              </p>
              <h3 className="font-serif text-3xl text-white">
                Reserve Your <span className="text-shimmer italic">Moment</span>
              </h3>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link href="/booking" className="btn-gold">Book Now</Link>
                <Link href="/services" className="btn-ghost">Services</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
