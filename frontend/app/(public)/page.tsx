import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ background: "var(--cream)", color: "var(--ink)" }}>

      
      <section className="relative overflow-hidden h-screen flex items-center">

        {/* ── Background hero.jpg image ── */}
       <div className="absolute inset-0 z-0 w-full h-full">
         <Image
  src="/gallery/hero.jpg"
  alt="The Atelier Salon Interior"
  fill
  priority
  unoptimized
  sizes="100vw"
  className="object-cover"
  style={{
        transform: "scale(1.04)",
        filter: "brightness(0.58) contrast(1.1) saturate(1.15)",
      }}
 />

          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

          {/* Gold glow top-left */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 20% 30%, rgba(201,169,110,0.12) 0%, transparent 70%)",
            }}
          />
          {/* Rose glow bottom-right */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 40% 50% at 80% 70%, rgba(156,74,94,0.12) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* ── Hero Content ── */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <div className="mx-auto max-w-3xl text-center">

            {/* Badge */}
            <div
              className="animate-fade-up inline-flex items-center gap-3 rounded-full px-5 py-2.5 mb-8"
              style={{
                background: "rgba(201,169,110,0.14)",
                border: "1px solid rgba(201,169,110,0.40)",
                backdropFilter: "blur(16px)",
              }}
            >
              <span className="dot-gold animate-gold-pulse" />
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.45em]"
                style={{ color: "rgba(232,213,168,0.95)" }}
              >
                Aura Glass Studio
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="animate-fade-up delay-100 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.04] text-white"
              style={{ textShadow: "0 4px 40px rgba(0,0,0,0.4)" }}
            >
              Where light meets{" "}
              <br className="hidden sm:block" />
              <span className="text-shimmer italic">pure serenity.</span>
            </h1>

            {/* Divider */}
            <div
              className="animate-fade-up delay-150 divider-gold mx-auto my-8"
              style={{ maxWidth: "100px" }}
            />

            {/* Subheading */}
            <p
              className="animate-fade-up delay-200 mx-auto max-w-xl text-sm sm:text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Experience a sanctuary of bespoke beauty. Our atelier combines
              ethereal aesthetics with master craftsmanship to unveil your
              most radiant self.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking" className="btn-primary">
                ✦ Book Your Experience
              </Link>
              <Link href="/services" className="btn-ghost">
                Our Services
              </Link>
            </div>

            {/* Stats Strip */}
            <div
              className="animate-fade-up delay-500 mt-16 grid grid-cols-3 gap-px max-w-md mx-auto rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(201,169,110,0.25)" }}
            >
              {[
                { n: "12+",  label: "Years"   },
                { n: "4.9★", label: "Rating"  },
                { n: "2k+",  label: "Clients" },
              ].map(({ n, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center py-5 px-4"
                  style={{
                    background: "rgba(20,14,11,0.60)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <span
                    className="font-serif text-2xl font-bold"
                    style={{ color: "var(--gold)" }}
                  >
                    {n}
                  </span>
                  <span
                    className="mt-1 text-[9px] font-semibold uppercase tracking-[0.35em]"
                    style={{ color: "rgba(255,255,255,0.50)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float opacity-70">
          <div className="flex flex-col items-center gap-2">
            <span
              className="text-[9px] uppercase tracking-[0.4em]"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Scroll
            </span>
            <div
              className="w-5 h-9 rounded-full flex items-start justify-center pt-1.5"
              style={{ border: "1.5px solid rgba(255,255,255,0.35)" }}
            >
              <div
                className="w-[3px] h-2.5 rounded-full"
                style={{
                  background: "var(--gold)",
                  animation: "fadeUp 1.4s ease-in-out infinite alternate",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES HIGHLIGHT
      ═══════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">

        <div className="text-center mb-14">
          <div className="eyebrow justify-center">Reserve Your Moment</div>
          <h2
            className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl"
            style={{ color: "var(--ink)" }}
          >
            Tailored Rituals,{" "}
            <span className="italic" style={{ color: "var(--rose)" }}>
              For You
            </span>
          </h2>
          <div
            className="divider-gold mx-auto mt-6"
            style={{ maxWidth: "120px" }}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Card 1 — Hair */}
          <div className="service-card p-7 group animate-fade-up delay-100">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-xl transition-transform duration-300 group-hover:scale-110"
              style={{
                background:
                  "linear-gradient(135deg, rgba(156,74,94,0.12), rgba(156,74,94,0.05))",
              }}
            >
              ✂️
            </div>
            <p
              className="text-[9px] uppercase tracking-[0.45em] font-semibold mb-3"
              style={{ color: "var(--gold)" }}
            >
              Hair Artistry
            </p>
            <h3 className="font-serif text-xl" style={{ color: "var(--ink)" }}>
              Sculpt &amp; Shine
            </h3>
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Bespoke cuts, colour, and restorative treatments crafted for
              your unique aura.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs" style={{ color: "var(--muted)" }}>
                From{" "}
                <strong style={{ color: "var(--rose)" }}>$70</strong>
              </span>
              <Link
                href="/services"
                className="text-[10px] font-semibold uppercase tracking-[0.3em] transition-colors duration-200 hover:underline underline-offset-4"
                style={{ color: "var(--rose)" }}
              >
                View →
              </Link>
            </div>
          </div>

          {/* Card 2 — Spa (featured dark card) */}
          <div
            className="relative rounded-3xl p-7 overflow-hidden group animate-fade-up delay-200"
            style={{
              background:
                "linear-gradient(145deg, var(--ink) 0%, var(--ink-soft) 100%)",
              boxShadow: "var(--shadow-rose)",
              border: "1px solid rgba(201,169,110,0.20)",
            }}
          >
            <div
              className="absolute top-0 left-0 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                background: "rgba(156,74,94,0.25)",
                filter: "blur(48px)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-48 h-48 translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none"
              style={{
                background: "rgba(201,169,110,0.15)",
                filter: "blur(48px)",
              }}
            />
            <div className="relative">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: "rgba(201,169,110,0.15)" }}
              >
                🌿
              </div>
              <p
                className="text-[9px] uppercase tracking-[0.45em] font-semibold mb-3"
                style={{ color: "var(--gold)" }}
              >
                Glass Spa
              </p>
              <h3 className="font-serif text-xl text-white">
                Ritual Facials
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Ethereal rituals using botanical infusions to restore and
                illuminate.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-white/60">
                  From{" "}
                  <strong style={{ color: "var(--gold)" }}>$50</strong>
                </span>
                <Link
                  href="/services"
                  className="text-[10px] font-semibold uppercase tracking-[0.3em] hover:underline underline-offset-4"
                  style={{ color: "var(--gold-light)" }}
                >
                  View →
                </Link>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY US / PILLARS
      ═══════════════════════════════════════════ */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, var(--warm-off) 0%, var(--parchment) 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="eyebrow justify-center">
              The Atelier Philosophy
            </div>
            <h2
              className="mt-5 font-serif text-3xl sm:text-4xl"
              style={{ color: "var(--ink)" }}
            >
              Beauty as a{" "}
              <span className="italic" style={{ color: "var(--rose)" }}>
                sacred art
              </span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "✦", title: "Bespoke",   desc: "Every treatment is tailored uniquely to you."      },
              { icon: "◈", title: "Botanical", desc: "Pure, natural ingredients for lasting results."    },
              { icon: "◉", title: "Serene",    desc: "An atmosphere of calm and mindful luxury."         },
              { icon: "◆", title: "Mastery",   desc: "Over a decade of artisanal craftsmanship."         },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className="glass-card rounded-3xl p-7 text-center group transition-all duration-300 hover:-translate-y-1"
                style={{
                  animationDelay: `${i * 100}ms`,
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <div
                  className="mx-auto mb-4 w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(156,74,94,0.1), rgba(201,169,110,0.08))",
                    color: "var(--rose)",
                  }}
                >
                  {icon}
                </div>
                <h3
                  className="font-serif text-lg mb-2"
                  style={{ color: "var(--ink)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GALLERY  (uses hero.jpg until you add 1-4.jpg)
      ═══════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow">Gallery</div>
            <h2
              className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl"
              style={{ color: "var(--ink)" }}
            >
              The Gallery{" "}
              <span className="italic" style={{ color: "var(--rose)" }}>
                of Light
              </span>
            </h2>
            <p
              className="mt-3 max-w-md text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              A curation of our latest masterpieces. Each look is a dialogue
              between form and light.
            </p>
          </div>
          <Link
            href="/preview"
            className="hidden sm:inline-flex text-[10px] uppercase tracking-[0.45em] font-semibold transition-colors duration-200 hover:opacity-70"
            style={{ color: "var(--muted)" }}
          >
            Full Lookbook →
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 auto-rows-[220px]">

          {/* Large featured - col 1-2, row 1-2 */}
          <div
            className="col-span-2 row-span-2 gallery-item shadow-lg"
            style={{ borderRadius: "1.5rem" }}
          >
            <Image
              src="/gallery/hero.jpg"
              alt="Hair Artistry"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="gallery-overlay">
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/80">
                Hair Artistry
              </span>
            </div>
          </div>

          {/* Small - top right */}
          <div
            className="gallery-item shadow-sm"
            style={{ borderRadius: "1.25rem" }}
          >
            <Image
              src="/gallery/hero.jpg"
              alt="Skin Ritual"
              fill
              sizes="25vw"
              className="object-cover object-top"
            />
            <div className="gallery-overlay">
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/80">
                Skin Ritual
              </span>
            </div>
          </div>

          {/* Small */}
          <div
            className="gallery-item shadow-sm"
            style={{ borderRadius: "1.25rem" }}
          >
            <Image
              src="/gallery/hero.jpg"
              alt="Nail Studio"
              fill
              sizes="25vw"
              className="object-cover object-bottom"
            />
            <div className="gallery-overlay">
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/80">
                Nail Studio
              </span>
            </div>
          </div>

          {/* Wide - bottom row col 3-4 */}
          <div
            className="col-span-2 gallery-item shadow-sm"
            style={{ borderRadius: "1.25rem" }}
          >
            <Image
              src="/gallery/hero.jpg"
              alt="Wellness"
              fill
              sizes="50vw"
              className="object-cover object-center"
            />
            <div className="gallery-overlay">
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/80">
                Wellness
              </span>
            </div>
          </div>
        </div>

        {/* Mobile lookbook link */}
        <Link
          href="/preview"
          className="mt-8 inline-flex sm:hidden text-[10px] uppercase tracking-[0.45em] font-semibold"
          style={{ color: "var(--muted)" }}
        >
          Full Lookbook →
        </Link>
      </section>

      {/* ═══════════════════════════════════════════
          BOTTOM CTA BANNER
      ═══════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
        <div
          className="relative overflow-hidden rounded-3xl px-8 sm:px-16 py-16 sm:py-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, var(--ink) 0%, var(--ink-soft) 60%, #3D1E28 100%)",
            boxShadow: "0 32px 80px -24px rgba(28,20,16,0.6)",
          }}
        >
          {/* Blobs */}
          <div
            className="absolute top-0 left-0 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              background: "rgba(201,169,110,0.12)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-80 h-80 translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none"
            style={{
              background: "rgba(156,74,94,0.18)",
              filter: "blur(60px)",
            }}
          />

          {/* Hero image subtle overlay inside CTA */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image
              src="/gallery/hero.jpg"
              alt=""
              fill
              className="object-cover object-center"
              aria-hidden="true"
            />
          </div>

          <div
            className="divider-gold mx-auto mb-8"
            style={{ maxWidth: "80px" }}
          />

          <div className="relative space-y-5">
            <p
              className="text-[9px] uppercase tracking-[0.55em] font-semibold"
              style={{ color: "var(--gold)" }}
            >
              Ready to Begin?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Reserve Your{" "}
              <span className="text-shimmer italic">Moment</span>
            </h2>
            <p
              className="text-sm sm:text-base max-w-sm mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.62)" }}
            >
              Let our artisans craft a ritual designed entirely around you.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking" className="btn-gold">
                ✦ Book an Appointment
              </Link>
              <Link href="/services" className="btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}