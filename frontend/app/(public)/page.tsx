// frontend/app/(public)/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ background: "var(--cream)", color: "var(--ink)" }}>

      {/* ═════════ HERO ═════════ */}
      <section className="relative overflow-hidden h-screen flex items-center">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/gallery/hero.jpg"
            alt="Aura Glass Studio Interior"
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 20% 30%, rgba(201,169,110,0.12) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 40% 50% at 80% 70%, rgba(156,74,94,0.12) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Hero Content */}
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

            {/* Heading */}
            <h1
              className="animate-fade-up delay-100 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.04]"
              style={{
                color: "#ffffff",
                textShadow: "0 4px 30px rgba(255,255,255,0.25)",
              }}
            >
              Where light meets
              <br className="hidden sm:block" />
              <span
                className="italic"
                style={{
                  color: "var(--gold)",
                  textShadow: "0 2px 20px rgba(212,175,55,0.35)",
                }}
              >
                {" "}pure serenity.
              </span>
            </h1>

            {/* Divider */}
            <div
              className="animate-fade-up delay-150 divider-gold mx-auto my-8"
              style={{ maxWidth: "100px", opacity: 0.9 }}
            />

            {/* Subheading */}
            <p
              className="animate-fade-up delay-200 mx-auto max-w-xl text-sm sm:text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Experience a sanctuary of bespoke beauty. Our atelier combines
              ethereal aesthetics with master craftsmanship to unveil your most
              radiant self.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up delay-300 mt-10 flex items-center justify-center flex-wrap gap-3">
              <Link href="/booking" className="btn-primary no-underline">
                ✦ Book Your Experience
              </Link>
              <Link href="/services" className="btn-ghost no-underline">
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { k: "10+ Years", v: "Artisan craft" },
                { k: "4.9★",     v: "Client rating" },
                { k: "2k+",      v: "Appointments"  },
                { k: "Botanical",v: "Clean rituals"  },
              ].map((s, i) => (
                <div
                  key={s.k}
                  className="rounded-2xl px-4 py-4"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    backdropFilter: "blur(14px)",
                    animation: "statFadeIn .7s ease both",
                    animationDelay: `${i * 90}ms`,
                  }}
                >
                  <div className="font-serif text-lg sm:text-xl text-white">
                    {s.k}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.35em] text-white/60 mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span
            className="text-[9px] uppercase tracking-[0.4em]"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Scroll
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-40">
            <path
              d="M8 3v10M3 9l5 5 5-5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ═════════ MARQUEE STRIP — FIXED ═════════ */}
      <div
        className="py-4 overflow-hidden"
        style={{
          background: "var(--ink)",
          borderTop: "1px solid rgba(201,169,110,0.2)",
          borderBottom: "1px solid rgba(201,169,110,0.2)",
        }}
      >
        {/*
          FIX: Use two identical sets side by side.
          The animation moves left by exactly 50% (one full set width),
          then snaps back — creating a perfect seamless loop.
        */}
        <div
          className="flex gap-10 whitespace-nowrap w-max"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {[...Array(2)].map((_, gi) =>
            [
              "✦ Hair Artistry",
              "◈ Skin Rituals",
              "◉ Glass Manicure",
              "◆ Botanical Spa",
              "✦ Brow Design",
              "◈ Lash Studio",
              "◉ Scalp Therapy",
              "◆ Body Glow",
            ].map((item, i) => (
              <span
                key={`${gi}-${i}`}
                className="text-[10px] uppercase tracking-[0.45em] font-semibold px-4"
                style={{ color: "rgba(201,169,110,0.75)" }}
              >
                {item}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ═════════ SERVICES HIGHLIGHT ═════════ */}
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
          <div className="divider-gold mx-auto mt-6" style={{ maxWidth: "120px" }} />
          <p className="mt-5 text-sm max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Select a signature service or explore the full menu—each appointment
            begins with a consultation and ends with a luminous finish.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* ── Hair ── */}
          <div className="service-card p-7 group animate-fade-up">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-xl
                         transition-transform duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, rgba(156,74,94,0.12), rgba(156,74,94,0.05))",
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
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Bespoke cuts, colour, and restorative treatments crafted for your unique aura.
            </p>
            <ul className="mt-4 space-y-1.5">
              {["Signature Cut & Style", "Colour & Balayage", "Keratin Treatment"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs" style={{ color: "var(--muted)" }}>
                  <span style={{ color: "var(--gold)" }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs" style={{ color: "var(--muted)" }}>
                From <strong style={{ color: "var(--rose)" }}>$70</strong>
              </span>
              <Link
                href="/services"
                className="text-[10px] font-semibold uppercase tracking-[0.3em]
                           transition-colors duration-200 hover:underline underline-offset-4"
                style={{ color: "var(--rose)" }}
              >
                View →
              </Link>
            </div>
          </div>

          {/* ── Spa Featured — FIX: badge moved inside relative wrapper, overflow-hidden removed from badge parent ── */}
          <div
            className="relative rounded-3xl p-7 group animate-fade-up"
            style={{
              background: "linear-gradient(145deg, var(--ink) 0%, var(--ink-soft) 100%)",
              boxShadow: "var(--shadow-rose)",
              border: "1px solid rgba(201,169,110,0.20)",
            }}
          >
            {/* Popular badge — sits on top, no overflow-hidden clipping */}
            <div
              className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.4em]
                         font-bold px-3 py-1 rounded-full z-10"
              style={{ background: "var(--gold)", color: "var(--ink)" }}
            >
              Popular
            </div>

            {/* Glow blobs — clipped inside their own wrapper */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <div
                className="absolute top-0 left-0 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ background: "rgba(156,74,94,0.25)", filter: "blur(48px)" }}
              />
              <div
                className="absolute bottom-0 right-0 w-48 h-48 translate-x-1/2 translate-y-1/2 rounded-full"
                style={{ background: "rgba(201,169,110,0.15)", filter: "blur(48px)" }}
              />
            </div>

            <div className="relative">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-xl
                           transition-transform duration-300 group-hover:scale-110"
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
              <h3 className="font-serif text-xl text-white">Ritual Facials</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                Ethereal rituals using botanical infusions to restore and illuminate.
              </p>
              <ul className="mt-4 space-y-1.5">
                {["Botanical Glow Facial", "Crystal Lymphatic Ritual", "Gold Mask Treatment"].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    <span style={{ color: "var(--gold)" }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-white/60">
                  From <strong style={{ color: "var(--gold)" }}>$50</strong>
                </span>
                <Link
                  href="/services"
                  className="text-[10px] font-semibold uppercase tracking-[0.3em]
                             hover:underline underline-offset-4"
                  style={{ color: "var(--gold-light)" }}
                >
                  View →
                </Link>
              </div>
            </div>
          </div>

          {/* ── Nails ── */}
          <div className="service-card p-7 group animate-fade-up">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-xl
                         transition-transform duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, rgba(201,169,110,0.14), rgba(201,169,110,0.06))",
              }}
            >
              ✦
            </div>
            <p
              className="text-[9px] uppercase tracking-[0.45em] font-semibold mb-3"
              style={{ color: "var(--gold)" }}
            >
              Nail Studio
            </p>
            <h3 className="font-serif text-xl" style={{ color: "var(--ink)" }}>
              Glass Manicure
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Clean shaping, cuticle care, and glossy finishes—soft, modern, and impeccably refined.
            </p>
            <ul className="mt-4 space-y-1.5">
              {["Glass Gel Manicure", "Pedicure Ritual", "Nail Art Design"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs" style={{ color: "var(--muted)" }}>
                  <span style={{ color: "var(--gold)" }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs" style={{ color: "var(--muted)" }}>
                From <strong style={{ color: "var(--rose)" }}>$35</strong>
              </span>
              <Link
                href="/services"
                className="text-[10px] font-semibold uppercase tracking-[0.3em]
                           transition-colors duration-200 hover:underline underline-offset-4"
                style={{ color: "var(--rose)" }}
              >
                View →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-ghost inline-flex">
            View Full Service Menu →
          </Link>
        </div>
      </section>

      {/* ═════════ PILLARS ═════════ */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(180deg, var(--warm-off) 0%, var(--parchment) 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="eyebrow justify-center">The Atelier Philosophy</div>
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl" style={{ color: "var(--ink)" }}>
              Beauty as a{" "}
              <span className="italic" style={{ color: "var(--rose)" }}>
                sacred art
              </span>
            </h2>
            <p className="mt-5 text-sm max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
              We blend precision technique with a calm, sensory ritual—so you leave feeling
              polished, restored, and unmistakably yourself.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "✦", title: "Bespoke",  desc: "Every treatment is tailored uniquely to you."     },
              { icon: "◈", title: "Botanical",desc: "Pure, natural ingredients for lasting results."    },
              { icon: "◉", title: "Serene",   desc: "An atmosphere of calm and mindful luxury."        },
              { icon: "◆", title: "Mastery",  desc: "Over a decade of artisanal craftsmanship."        },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className="glass-card rounded-3xl p-7 text-center group
                           transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-soft)", animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="mx-auto mb-4 w-12 h-12 rounded-2xl flex items-center justify-center
                             text-xl font-bold transition-transform duration-300
                             group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background: "linear-gradient(135deg, rgba(156,74,94,0.1), rgba(201,169,110,0.08))",
                    color: "var(--rose)",
                  }}
                >
                  {icon}
                </div>
                <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>
                  {title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════ SPLIT FEATURE — FIXED mobile overflow ═════════ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image side */}
          {/*
            FIX: Added px-6 on mobile so floating cards don't bleed off screen.
            Floating cards use responsive positioning.
          */}
          <div className="relative px-6 pb-8 lg:px-0 lg:pb-0">
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src="/gallery/hero.jpg"
                alt="Atelier Interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ filter: "brightness(0.9) saturate(1.1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating rating card */}
            <div
              className="absolute bottom-0 right-0 lg:-bottom-6 lg:-right-6 rounded-2xl px-6 py-5"
              style={{
                background: "var(--cream)",
                boxShadow: "var(--shadow-rose)",
                border: "1px solid rgba(201,169,110,0.2)",
              }}
            >
              <div className="font-serif text-3xl" style={{ color: "var(--ink)" }}>4.9★</div>
              <div className="text-[9px] uppercase tracking-[0.4em] mt-1" style={{ color: "var(--muted)" }}>
                Average Rating
              </div>
              <div className="flex gap-0.5 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: "var(--gold)" }}>★</span>
                ))}
              </div>
            </div>

            {/* Floating years badge */}
            <div
              className="absolute top-0 left-0 lg:-top-4 lg:-left-4 rounded-2xl px-5 py-4 text-center"
              style={{
                background: "var(--ink)",
                border: "1px solid rgba(201,169,110,0.25)",
              }}
            >
              <div className="font-serif text-2xl text-white">10+</div>
              <div
                className="text-[9px] uppercase tracking-[0.35em] mt-1"
                style={{ color: "rgba(201,169,110,0.8)" }}
              >
                Years
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="eyebrow">Our Atelier</div>
            <h2
              className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight"
              style={{ color: "var(--ink)" }}
            >
              A studio built for{" "}
              <span className="italic" style={{ color: "var(--rose)" }}>
                your luminance
              </span>
            </h2>
            <div className="divider-gold mt-6 mb-6" style={{ maxWidth: "80px" }} />
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Aura Glass Studio was born from a belief that beauty services should feel
              like a ritual—not a transaction. We designed every corner of our atelier to
              invite calm, and every service to honour your individuality.
            </p>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              From the moment you step through our doors, you are enveloped in scent,
              softness, and intention. Our artisans are trained not just in technique,
              but in the art of listening.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { n: "2,000+", l: "Happy Clients"      },
                { n: "12",     l: "Expert Artisans"     },
                { n: "100%",   l: "Botanical Products"  },
                { n: "5★",     l: "Studio Rating"       },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl p-4"
                  style={{
                    background: "var(--warm-off)",
                    border: "1px solid rgba(201,169,110,0.12)",
                  }}
                >
                  <div className="font-serif text-2xl" style={{ color: "var(--ink)" }}>{s.n}</div>
                  <div className="text-[10px] uppercase tracking-[0.35em] mt-1" style={{ color: "var(--muted)" }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/about" className="btn-primary no-underline">
                Meet the Atelier →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════ GALLERY ═════════ */}
      <section className="py-20 sm:py-28" style={{ background: "var(--warm-off)" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
              <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                A curation of our latest work—soft glamour, luminous skin, and precision details.
              </p>
            </div>
            <Link
              href="/preview"
              className="hidden sm:inline-flex text-[10px] uppercase tracking-[0.45em]
                         font-semibold transition-colors duration-200 hover:opacity-70"
              style={{ color: "var(--muted)" }}
            >
              Full Lookbook →
            </Link>
          </div>

          {/*
            FIX: All gallery-item wrappers need `relative` so next/image `fill` works.
            Added `relative` explicitly to each wrapper div.
          */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 auto-rows-[220px]">

            <div
              className="relative col-span-2 row-span-2 gallery-item shadow-lg overflow-hidden"
              style={{ borderRadius: "1.5rem" }}
            >
              <Image
                src="/gallery/hero.jpg"
                alt="Hair Artistry"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="gallery-overlay">
                <span className="text-[9px] uppercase tracking-[0.35em] text-white/80">
                  Hair Artistry
                </span>
              </div>
            </div>

            <div
              className="relative gallery-item shadow-sm overflow-hidden"
              style={{ borderRadius: "1.25rem" }}
            >
              <Image
                src="/gallery/hero.jpg"
                alt="Skin Ritual"
                fill
                sizes="25vw"
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div className="gallery-overlay">
                <span className="text-[9px] uppercase tracking-[0.35em] text-white/80">
                  Skin Ritual
                </span>
              </div>
            </div>

            <div
              className="relative gallery-item shadow-sm overflow-hidden"
              style={{ borderRadius: "1.25rem" }}
            >
              <Image
                src="/gallery/hero.jpg"
                alt="Nail Studio"
                fill
                sizes="25vw"
                className="object-cover object-bottom transition-transform duration-700 hover:scale-105"
              />
              <div className="gallery-overlay">
                <span className="text-[9px] uppercase tracking-[0.35em] text-white/80">
                  Nail Studio
                </span>
              </div>
            </div>

            <div
              className="relative col-span-2 gallery-item shadow-sm overflow-hidden"
              style={{ borderRadius: "1.25rem" }}
            >
              <Image
                src="/gallery/hero.jpg"
                alt="Wellness"
                fill
                sizes="50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="gallery-overlay">
                <span className="text-[9px] uppercase tracking-[0.35em] text-white/80">
                  Wellness
                </span>
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
        </div>
      </section>

      {/* ═════════ TESTIMONIALS ═════════ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center mb-12">
          <div className="eyebrow justify-center">Client Notes</div>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl" style={{ color: "var(--ink)" }}>
            Words that{" "}
            <span className="italic" style={{ color: "var(--rose)" }}>glow</span>
          </h2>
          <div className="divider-gold mx-auto mt-6" style={{ maxWidth: "110px" }} />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              q: "The calmest salon experience I've ever had—my hair looks expensive and effortless.",
              a: "Maya R.",
              role: "Hair Client",
              stars: 5,
            },
            {
              q: "The facial was unreal. My skin looked brighter immediately and stayed that way for days.",
              a: "Sienna K.",
              role: "Spa Client",
              stars: 5,
            },
            {
              q: "Perfect shaping and a glossy finish. Everything felt thoughtful and clean.",
              a: "Elena D.",
              role: "Nail Client",
              stars: 5,
            },
          ].map((t) => (
            <div
              key={t.a}
              className="glass-card rounded-3xl p-7 flex flex-col justify-between
                         group transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} style={{ color: "var(--gold)" }}>★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--ink)" }}>
                &ldquo;{t.q}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center
                             text-xs font-bold flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, var(--rose), var(--gold))",
                    color: "white",
                  }}
                >
                  {t.a[0]}
                </div>
                <div>
                  <div
                    className="text-[10px] uppercase tracking-[0.35em] font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    {t.a}
                  </div>
                  <div
                    className="text-[9px] uppercase tracking-[0.3em] mt-0.5"
                    style={{ color: "var(--muted)" }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═════════ INSTAGRAM STRIP — FIXED aspectRatio ═════════ */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(180deg, var(--parchment) 0%, var(--warm-off) 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="eyebrow justify-center">Follow Along</div>
            <h2 className="mt-5 font-serif text-2xl sm:text-3xl" style={{ color: "var(--ink)" }}>
              @auraglass.studio
            </h2>
            <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
              Daily inspiration, behind-the-scenes rituals, and client reveals.
            </p>
          </div>

          {/*
            FIX: Use a fixed height row instead of aspectRatio on the wrapper,
            because next/image `fill` needs the parent to be `position:relative`
            with a defined height — not just an aspect-ratio CSS property.
          */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden shadow-sm"
                style={{ height: "120px" }}
              >
                <Image
                  src="/gallery/hero.jpg"
                  alt={`Instagram post ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 33vw, 16vw"
                  className="object-cover"
                  style={{ filter: "brightness(0.92) saturate(1.08)" }}
                />
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity
                             duration-300 flex items-center justify-center cursor-pointer"
                  style={{ background: "rgba(28,20,16,0.55)" }}
                >
                  <span className="text-lg" style={{ color: "var(--gold)" }}>✦</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex no-underline"
            >
              Follow on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* ═════════ BOTTOM CTA ═════════ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
        <div
          className="relative overflow-hidden rounded-3xl px-8 sm:px-16 py-16 sm:py-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, var(--ink) 0%, var(--ink-soft) 60%, #3D1E28 100%)",
            boxShadow: "0 32px 80px -24px rgba(28,20,16,0.6)",
          }}
        >
          <div
            className="absolute top-0 left-0 w-80 h-80 -translate-x-1/2 -translate-y-1/2
                       rounded-full pointer-events-none"
            style={{ background: "rgba(201,169,110,0.12)", filter: "blur(60px)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-80 h-80 translate-x-1/2 translate-y-1/2
                       rounded-full pointer-events-none"
            style={{ background: "rgba(156,74,94,0.18)", filter: "blur(60px)" }}
          />
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image
              src="/gallery/hero.jpg"
              alt=""
              fill
              className="object-cover object-center"
              aria-hidden="true"
            />
          </div>

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