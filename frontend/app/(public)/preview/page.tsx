// frontend/app/(public)/preview/page.tsx
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const galleryItems = [
  { alt: "Hair Colour & Balayage",   category: "Hair",    span: "col-span-2 row-span-2" },
  { alt: "Glass Manicure",           category: "Nails",   span: "" },
  { alt: "Bridal Updo",              category: "Hair",    span: "" },
  { alt: "Botanical Glow Facial",    category: "Skin",    span: "col-span-2" },
  { alt: "Scalp Ritual",             category: "Wellness",span: "" },
  { alt: "Lash & Brow Design",       category: "Beauty",  span: "" },
  { alt: "Nail Art Studio",          category: "Nails",   span: "" },
  { alt: "Body Glow Treatment",      category: "Spa",     span: "" },
];

const categories = ["All", "Hair", "Skin", "Nails", "Wellness"];

export default function GalleryPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, var(--cream) 0%, var(--warm-off) 60%, var(--parchment) 100%)",
      }}
    >
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden py-20 sm:py-28"
        style={{ background: "linear-gradient(135deg, var(--ink) 0%, var(--ink-soft) 65%, #3a1c26 100%)" }}
      >
        <div
          className="absolute top-0 right-0 pointer-events-none rounded-full"
          style={{ width: "28rem", height: "28rem", transform: "translate(50%,-50%)", background: "rgba(201,169,110,0.12)", filter: "blur(72px)" }}
        />
        <div
          className="absolute bottom-0 left-0 pointer-events-none rounded-full"
          style={{ width: "24rem", height: "24rem", transform: "translate(-50%,50%)", background: "rgba(156,74,94,0.15)", filter: "blur(72px)" }}
        />

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center animate-fade-up">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-px w-16" style={{ background: "rgba(201,169,110,0.45)" }} />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.55em] font-semibold" style={{ color: "var(--gold)" }}>
                Lookbook
              </span>
              <div className="h-px w-16" style={{ background: "rgba(201,169,110,0.45)" }} />
            </div>

            <h1
              className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.04]"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.35)" }}
            >
              The Gallery of{" "}
              <span className="italic text-shimmer">Light</span>
            </h1>

            <p
              className="mt-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              A curation of our finest work — soft glamour, luminous skin, and precision
              details captured at The Atelier.
            </p>

            {/* Filter chips */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="rounded-full px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.35em] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  style={{
                    border: "1px solid rgba(201,169,110,0.28)",
                    background: cat === "All" ? "rgba(201,169,110,0.18)" : "rgba(201,169,110,0.07)",
                    color: cat === "All" ? "rgba(232,213,168,1)" : "rgba(232,213,168,0.75)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none">
          <div className="h-full" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(247,241,238,0.4) 60%, rgba(245,239,233,1) 100%)" }} />
        </div>
      </section>

      {/* ── MASONRY GALLERY ── */}
      <Container className="py-16 sm:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative gallery-item shadow-md overflow-hidden ${item.span}`}
              style={{ borderRadius: "1.5rem" }}
            >
              <Image
                src="/gallery/hero.jpg"
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                style={{ filter: "brightness(0.88) saturate(1.10)" }}
              />
              <div className="gallery-overlay">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.45em] font-semibold" style={{ color: "var(--gold)" }}>
                    {item.category}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-white/90 font-medium mt-0.5">
                    {item.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* ── STATS STRIP ── */}
      <section style={{ background: "var(--warm-off)", padding: "60px 0", borderTop: "1px solid rgba(201,169,110,0.12)", borderBottom: "1px solid rgba(201,169,110,0.12)" }}>
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { n: "2,000+", l: "Transformations" },
              { n: "4.9★",   l: "Average Rating"  },
              { n: "100%",   l: "Botanical"        },
              { n: "12",     l: "Expert Artists"   },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl sm:text-4xl" style={{ color: "var(--ink)" }}>{s.n}</div>
                <div className="text-[10px] uppercase tracking-[0.40em] mt-2" style={{ color: "var(--muted)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── INSTAGRAM STRIP ── */}
      <section style={{ padding: "64px 0 0" }}>
        <Container>
          <div className="text-center mb-10">
            <div className="eyebrow justify-center">Follow Along</div>
            <h2 className="mt-5 font-serif text-2xl sm:text-3xl" style={{ color: "var(--ink)" }}>
              @auraglass.studio
            </h2>
            <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
              Daily inspiration, behind-the-scenes rituals, and client reveals.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden"
                style={{ height: "130px" }}
              >
                <Image
                  src="/gallery/hero.jpg"
                  alt={`Instagram post ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 33vw, 16vw"
                  className="object-cover"
                  style={{ filter: "brightness(0.88) saturate(1.08)" }}
                />
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                  style={{ background: "rgba(28,20,16,0.55)" }}
                >
                  <span className="text-lg" style={{ color: "var(--gold)" }}>✦</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 pb-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-ink inline-flex"
              style={{ textDecoration: "none" }}
            >
              Follow on Instagram →
            </a>
          </div>
        </Container>
      </section>

      {/* ── BOTTOM CTA ── */}
      <Container className="py-16 sm:py-24">
        <div
          className="relative overflow-hidden rounded-3xl px-8 sm:px-16 py-16 text-center"
          style={{
            background: "linear-gradient(135deg, var(--ink) 0%, var(--ink-soft) 60%, #3D1E28 100%)",
            boxShadow: "0 32px 80px -24px rgba(28,20,16,0.55)",
          }}
        >
          <div className="absolute top-0 left-0 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{ background: "rgba(201,169,110,0.12)", filter: "blur(60px)" }} />
          <div className="absolute bottom-0 right-0 w-80 h-80 translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none"
            style={{ background: "rgba(156,74,94,0.18)", filter: "blur(60px)" }} />

          <div className="relative space-y-5">
            <div className="divider-gold mx-auto mb-6" style={{ maxWidth: "80px" }} />
            <p className="text-[9px] uppercase tracking-[0.55em] font-semibold" style={{ color: "var(--gold)" }}>
              Ready to Begin?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Reserve Your{" "}
              <span className="text-shimmer italic">Moment</span>
            </h2>
            <p className="text-sm max-w-sm mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
              Let our artisans craft a ritual designed entirely around you.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking" className="btn-gold" style={{ textDecoration: "none" }}>
                ✦ Book an Appointment
              </Link>
              <Link href="/services" className="btn-ghost" style={{ textDecoration: "none" }}>
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}