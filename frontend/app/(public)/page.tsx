import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ background: "var(--cream)", color: "var(--ink)" }}>

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        {/* Background photo */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/gallery/hero.jpg"
            alt="Salon interior"
            fill
            priority
            className="object-cover object-center"
            style={{ transform: "scale(1.04)", filter: "brightness(0.62) contrast(1.08) saturate(1.1)" }}
          />
          {/* layered overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
          {/* gold accent glows */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 60% at 20% 30%, rgba(201,169,110,0.10) 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 40% 50% at 80% 70%, rgba(156,74,94,0.10) 0%, transparent 70%)" }}
          />
        </div>

        {/* Content */}
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">

            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-3 rounded-full px-5 py-2.5 mb-6"
              style={{
                background: "rgba(201,169,110,0.14)",
                border: "1px solid rgba(201,169,110,0.35)",
                backdropFilter: "blur(16px)",
              }}
            >
              <span className="dot-gold animate-gold-pulse" />
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.45em]"
                style={{ color: "rgba(232,213,168,0.92)" }}
              >
                Aura Glass Studio
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up delay-100 font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.04] text-white"
              style={{ textShadow: "0 4px 32px rgba(0,0,0,0.35)" }}
            >
              Where light meets{" "}
              <br className="hidden sm:block" />
              <span className="text-shimmer italic">pure serenity.</span>
            </h1>

            <p
              className="animate-fade-up delay-200 mx-auto mt-6 max-w-xl text-sm sm:text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              Experience a sanctuary of bespoke beauty. Our atelier combines
              ethereal aesthetics with master craftsmanship to unveil your most
              radiant self.
            </p>

            {/* CTA row */}
            <div className="animate-fade-up delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking" className="btn-primary">
                Book Your Experience
              </Link>
              <Link href="/services" className="btn-ghost">
                Our Services
              </Link>
            </div>

            {/* Stats strip */}
            <div
              className="animate-fade-up delay-500 mt-16 grid grid-cols-3 gap-px max-w-md mx-auto rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(201,169,110,0.20)" }}
            >
              {[
                { n: "12+", label: "Years" },
                { n: "4.9★", label: "Rating" },
                { n: "2k+", label: "Clients" },
              ].map(({ n, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center py-5 px-4"
                  style={{ background: "rgba(28,20,16,0.55)", backdropFilter: "blur(16px)" }}
                >
                  <span className="font-serif text-xl" style={{ color: "var(--gold)" }}>{n}</span>
                  <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.35em]" style={{ color: "rgba(255,255,255,0.55)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float opacity-60">
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
              style={{ border: "1.5px solid rgba(255,255,255,0.4)" }}
            >
              <div
                className="w-[3px] h-2 rounded-full"
                style={{ background: "rgba(255,255,255,0.7)", animation: "fadeUp 1.2s ease-in-out infinite alternate" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES HIGHLIGHT
      ═══════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">

        <div className="text-center mb-12">
          <div className="eyebrow justify-center">Reserve Your Moment</div>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl" style={{ color: "var(--ink)" }}>
            Tailored Rituals,{" "}
            <span className="italic" style={{ color: "var(--rose)" }}>For You</span>
          </h2>
          <div className="divider-gold mx-auto mt-6" style={{ maxWidth: "120px" }} />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Card 1 — Hair */}
          <div className="service-card p-7 group animate-fade-up delay-100">
            {/* Icon area */}
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-xl transition-transform duration-300 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg, rgba(156,74,94,0.12), rgba(156,74,94,0.05))" }}
            >
              ✂️
            </div>
            <p className="text-[9px] uppercase tracking-[0.45em] font-semibold mb-3" style={{ color: "var(--gold)" }}>
              Hair Artistry
            </p>
            <h3 className="font-serif text-xl" style={{ color: "var(--ink)" }}>Sculpt &amp; Shine</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Bespoke cuts, colour, and restorative treatments crafted for your unique aura.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs" style={{ color: "var(--muted)" }}>From <strong style={{ color: "var(--rose)" }}>$70</strong></span>
              <Link
                href="/services"
                className="text-[10px] font-semibold uppercase tracking-[0.3em] transition-colors duration-200 hover:underline underline-offset-4"
                style={{ color: "var(--rose)" }}
              >
                View →
              </Link>
            </div>
          </div>

          {/* Card 2 — Spa (featured) */}
          <div
            className="relative rounded-3xl p-7 overflow-hidden group animate-fade-up delay-200"
            style={{
              background: "linear-gradient(145deg, var(--ink) 0%, var(--ink-soft) 100%)",
              boxShadow: "var(--shadow-rose)",
              border: "1px solid rgba(201,169,110,0.20)",
            }}
          >
            {/* glow blobs */}
            <div
              className="absolute top-0 left-0 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{ background: "rgba(156,74,94,0.25)", filter: "blur(48px)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-48 h-48 translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none"
              style={{ background: "rgba(201,169,110,0.15)", filter: "blur(48px)" }}
            />
            <div className="relative">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: "rgba(201,169,110,0.15)" }}
              >
                🌿
              </div>
              <p className="text-[9px] uppercase tracking-[0.45em] font-semibold mb-3" style={{ color: "var(--gold)" }}>
                Glass Spa
              </p>
              <h3 className="font-serif text-xl text-white">Ritual Facials</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                Ethereal rituals using botanical infusions to restore and illuminate.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-white/60">From <strong style={{ color: "var(--gold)" }}>$50</strong></span>
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

          {/* Card 3 — Schedule */}
          <div className="service-card p-7 group animate-fade-up delay-300">
            <p className="text-[9px] uppercase tracking-[0.45em] font-semibold mb-3" style={{ color: "var(--muted)" }}>
              Schedule
            </p>
            <h3 className="font-serif text-xl" style={{ color: "var(--ink)" }}>Select a Date</h3>

            <div className="mt-5 grid grid-cols-4 gap-2 text-center text-xs">
              {["14", "15", "16", "17"].map((d, i) => (
                <div
                  key={d}
                  className="rounded-xl py-3 font-medium transition-all duration-200 cursor-pointer"
                  style={{
                    background: d === "15" ? "linear-gradient(135deg, var(--rose), var(--rose-deep))" : "rgba(28,20,16,0.05)",
                    color: d === "15" ? "#fff" : "var(--ink)",
                    boxShadow: d === "15" ? "0 4px 16px rgba(156,74,94,0.3)" : "none",
                  }}
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
              {["09:00", "11:30", "04:30", "07:00"].map((t) => (
                <div
                  key={t}
                  className="rounded-xl py-3 text-center font-medium transition-all duration-200 cursor-pointer"
                  style={{
                    background: t === "11:30" ? "var(--ink)" : "rgba(28,20,16,0.05)",
                    color: t === "11:30" ? "var(--cream)" : "var(--ink)",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>

            <Link
              href="/booking"
              className="btn-primary mt-5 w-full justify-center"
            >
              Confirm Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY US / PILLARS
      ═══════════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, var(--warm-off) 0%, var(--parchment) 100%)" }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="eyebrow justify-center">The Atelier Philosophy</div>
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl" style={{ color: "var(--ink)" }}>
              Beauty as a{" "}
              <span className="italic" style={{ color: "var(--rose)" }}>sacred art</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "✦", title: "Bespoke",     desc: "Every treatment is tailored uniquely to you." },
              { icon: "◈", title: "Botanical",   desc: "Pure, natural ingredients for lasting results."  },
              { icon: "◉", title: "Serene",      desc: "An atmosphere of calm and mindful luxury."       },
              { icon: "◆", title: "Mastery",     desc: "Over a decade of artisanal craftsmanship."      },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className="glass-card rounded-3xl p-7 text-center group transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 100}ms`, boxShadow: "var(--shadow-soft)" }}
              >
                <div
                  className="mx-auto mb-4 w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background: "linear-gradient(135deg, rgba(156,74,94,0.1), rgba(201,169,110,0.08))",
                    color: "var(--rose)",
                  }}
                >
                  {icon}
                </div>
                <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GALLERY
      ═══════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow">Gallery</div>
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl" style={{ color: "var(--ink)" }}>
              The Gallery{" "}
              <span className="italic" style={{ color: "var(--rose)" }}>of Light</span>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              A curation of our latest masterpieces. Each look is a dialogue between form and light.
            </p>
          </div>
          <Link
            href="/preview"
            className="hidden sm:inline-flex text-[10px] uppercase tracking-[0.45em] font-semibold transition-colors duration-200"
            style={{ color: "var(--muted)" }}
          >
            Full Lookbook →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="col-span-2 row-span-2 gallery-item shadow-lg" style={{ borderRadius: "1.5rem" }}>
            <Image
              src="/gallery/1.jpg"
              alt="Gallery 1"
              width={900}
              height={900}
              className="h-full w-full object-cover"
            />
            <div className="gallery-overlay">
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/80">Hair Artistry</span>
            </div>
          </div>

          <div className="gallery-item shadow-sm" style={{ borderRadius: "1.25rem" }}>
            <Image
              src="/gallery/2.jpg"
              alt="Gallery 2"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
            <div className="gallery-overlay">
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/80">Skin Ritual</span>
            </div>
          </div>

          <div className="gallery-item shadow-sm" style={{ borderRadius: "1.25rem" }}>
            <Image
              src="/gallery/3.jpg"
              alt="Gallery 3"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
            <div className="gallery-overlay">
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/80">Nail Studio</span>
            </div>
          </div>

          <div className="col-span-2 gallery-item shadow-sm" style={{ borderRadius: "1.25rem" }}>
            <Image
              src="/gallery/4.jpg"
              alt="Gallery 4"
              width={900}
              height={600}
              className="h-full w-full object-cover"
            />
            <div className="gallery-overlay">
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/80">Wellness</span>
            </div>
          </div>
        </div>

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
            background: "linear-gradient(135deg, var(--ink) 0%, var(--ink-soft) 60%, #3D1E28 100%)",
            boxShadow: "0 32px 80px -24px rgba(28,20,16,0.6)",
          }}
        >
          {/* blobs */}
          <div className="absolute top-0 left-0 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{ background: "rgba(201,169,110,0.12)", filter: "blur(60px)" }} />
          <div className="absolute bottom-0 right-0 w-80 h-80 translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none"
            style={{ background: "rgba(156,74,94,0.18)", filter: "blur(60px)" }} />

          {/* Gold divider line */}
          <div className="divider-gold mx-auto mb-8" style={{ maxWidth: "80px" }} />

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
            <p className="text-sm sm:text-base max-w-sm mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
              Let our artisans craft a ritual designed entirely around you.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking" className="btn-gold">
                Book an Appointment
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