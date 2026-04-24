import { ServiceCard } from "@/components/services/ServiceCard";
import Link from "next/link";
import Container from "@/components/Container";

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

  const badges = ["Instant Confirmation", "Free Rescheduling", "5★ Rated", "Botanical"];

  return (
    <div
      className="min-h-screen pb-24"
      style={{
        background:
          "linear-gradient(160deg, var(--cream) 0%, var(--warm-off) 60%, var(--parchment) 100%)",
      }}
    >
      {/* =========================
          HEADER / HERO (full width)
      ========================== */}
      <section
        className="relative overflow-hidden py-14 sm:py-20"
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

        <Container className="relative">
          <div className="animate-fade-up max-w-4xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] font-semibold mb-7 transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
            >
              ← Home
            </Link>

            <div
              className="inline-flex items-center gap-3 rounded-full px-4 py-2 mb-6"
              style={{
                background: "rgba(201,169,110,0.12)",
                border: "1px solid rgba(201,169,110,0.28)",
              }}
            >
              <span className="dot-gold" />
              <span
                className="text-[10px] uppercase tracking-[0.45em] font-semibold"
                style={{ color: "var(--gold-light)" }}
              >
                Component Gallery
              </span>
            </div>

            <h1
              className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.05]"
              style={{ textShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
            >
              UI Component <span className="text-shimmer italic">Preview</span>
            </h1>

            <p
              className="mt-5 text-base sm:text-lg max-w-2xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              A curated showcase of the interface components used throughout The
              Atelier experience.
            </p>
          </div>
        </Container>

        {/* bottom fade into cream */}
        <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none">
          <div
            className="h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(247,241,238,0.35) 60%, rgba(247,241,238,1) 100%)",
            }}
          />
        </div>
      </section>

      {/* =========================
          CONTENT
      ========================== */}
      <Container className="py-14 space-y-16">
        {/* Service Cards */}
        <section className="space-y-7">
          <div>
            <div className="eyebrow">Components</div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl" style={{ color: "var(--ink)" }}>
              Service Cards
            </h2>
            <div className="divider-gold mt-5" style={{ maxWidth: "90px" }} />
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {mockServices.map((s, i) => (
              <div key={s.id} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
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

        {/* Buttons & Badges */}
        <section className="space-y-7">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl" style={{ color: "var(--ink)" }}>
              Buttons &amp; Badges
            </h2>
            <div className="divider-gold mt-5" style={{ maxWidth: "90px" }} />
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-10 space-y-7">
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-gold">Gold Button</button>

              <div
                className="flex items-center rounded-3xl px-6 py-5"
                style={{ background: "var(--ink)" }}
              >
                <button className="btn-ghost">Ghost Button</button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.35em] font-semibold"
                  style={{
                    border: "1px solid rgba(201,169,110,0.28)",
                    background: "rgba(201,169,110,0.10)",
                    color: "var(--ink)",
                  }}
                >
                  <span className="dot-gold" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-7">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl" style={{ color: "var(--ink)" }}>
              Typography &amp; Decorators
            </h2>
            <div className="divider-gold mt-5" style={{ maxWidth: "90px" }} />
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-10 space-y-8">
            <div className="eyebrow">Eyebrow Label</div>

            <p className="font-serif text-5xl leading-tight" style={{ color: "var(--ink)" }}>
              Headline Serif Display
            </p>

            <p className="font-serif text-4xl italic" style={{ color: "var(--rose)" }}>
              Italic Accent
            </p>

            <p className="font-serif text-4xl text-shimmer italic">
              Gold Shimmer Text
            </p>

            <div className="divider-gold" />

            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Body copy — elegant, precise, and designed for readability. Each word is intentional.
            </p>
          </div>
        </section>

        {/* CTA preview */}
        <section>
          <div className="mb-7">
            <h2 className="font-serif text-3xl sm:text-4xl" style={{ color: "var(--ink)" }}>
              CTA Banner
            </h2>
            <div className="divider-gold mt-5" style={{ maxWidth: "90px" }} />
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

            <div className="relative space-y-5">
              <div className="divider-gold mx-auto mb-4" style={{ maxWidth: "70px" }} />

              <p
                className="text-[10px] uppercase tracking-[0.55em] font-semibold"
                style={{ color: "var(--gold)" }}
              >
                Call to Action
              </p>

              <h3 className="font-serif text-4xl sm:text-5xl text-white leading-tight">
                Reserve Your <span className="text-shimmer italic">Moment</span>
              </h3>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link href="/booking" className="btn-gold">
                  Book Now
                </Link>
                <Link href="/services" className="btn-ghost">
                  Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}