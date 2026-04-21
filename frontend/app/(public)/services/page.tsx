import { getServices } from "@/lib/api";
import { ServiceCard } from "@/components/services/ServiceCard";
import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/types";

export default async function ServicesPage() {
  let services: Service[] = [];

  try {
    services = await getServices();
  } catch {
    // Backend unavailable — show empty state gracefully
    services = [];
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, var(--cream) 0%, var(--warm-off) 100%)",
      }}
    >
      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden px-4 sm:px-6 py-20 sm:py-28 lg:py-32"
        style={{
          background:
            "linear-gradient(135deg, var(--ink) 0%, var(--ink-soft) 65%, #3a1c26 100%)",
        }}
      >
        {/* blobs */}
        <div
          className="absolute top-0 left-0 w-[30rem] h-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{ background: "rgba(156,74,94,0.20)", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[28rem] h-[28rem] translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none"
          style={{ background: "rgba(201,169,110,0.12)", filter: "blur(80px)" }}
        />

        <div className="relative mx-auto max-w-4xl text-center animate-fade-up">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-px w-12 sm:w-20" style={{ background: "rgba(201,169,110,0.5)" }} />
            <span
              className="text-[10px] sm:text-xs uppercase tracking-[0.5em] font-semibold"
              style={{ color: "var(--gold)" }}
            >
              Curated Services
            </span>
            <div className="h-px w-12 sm:w-20" style={{ background: "rgba(201,169,110,0.5)" }} />
          </div>

          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.04]"
            style={{ textShadow: "0 4px 32px rgba(0,0,0,0.35)" }}
          >
            Discover Our
          </h1>
          <div
            className="font-serif text-5xl sm:text-6xl md:text-7xl italic leading-[1.04]"
            style={{ color: "transparent" }}
          >
            <span className="text-shimmer">Service Menu</span>
          </div>

          <p
            className="mt-8 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Explore our curated treatments and rituals, each crafted to restore your natural beauty and inner harmony.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {["Hair", "Skin", "Nails", "Wellness"].map((cat) => (
              <button
                key={cat}
                className="rounded-full px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] transition-all duration-200"
                style={{
                  border: "1px solid rgba(201,169,110,0.28)",
                  background: "rgba(201,169,110,0.08)",
                  color: "rgba(232,213,168,0.85)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow">All Treatments</div>
            <h2
              className="mt-4 font-serif text-3xl sm:text-4xl"
              style={{ color: "var(--ink)" }}
            >
              {services.length > 0 ? (
                <>
                  <span style={{ color: "var(--rose)" }}>{services.length}</span> Services Available
                </>
              ) : (
                "Our Collection"
              )}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-px w-12 sm:w-16" style={{ background: "rgba(201,169,110,0.30)" }} />
            <span
              className="text-[9px] uppercase tracking-[0.3em] font-medium"
              style={{ color: "var(--muted)" }}
            >
              The Atelier Collection
            </span>
          </div>
        </div>

        {services.length === 0 ? (
          /* ── Empty State ── */
          <div
            className="glass-card rounded-3xl px-10 py-20 text-center space-y-5 animate-scale-in"
          >
            <div
              className="mx-auto w-20 h-20 rounded-full flex items-center justify-center text-4xl animate-float"
              style={{ background: "rgba(201,169,110,0.10)" }}
            >
              ✨
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl" style={{ color: "var(--ink)" }}>
              Coming Soon
            </h3>
            <p className="text-sm max-w-xs mx-auto" style={{ color: "var(--muted)" }}>
              Our service menu is being beautifully curated. Please check back very soon.
            </p>
            <div className="divider-gold mx-auto mt-6" style={{ maxWidth: "80px" }} />
            <Link href="/" className="btn-primary inline-flex mt-2">
              Return Home
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 animate-fade-up">
            {services.map((s) => (
              <ServiceCard
                key={s.id}
                name={s.name}
                description={s.description ?? ""}
                price={s.price}
                duration={s.duration}
              />
            ))}
          </div>
        )}

        {/* ── Category Image Strip ── */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { src: "/services/hair.jpg",     label: "Hair Artistry" },
            { src: "/services/skin.jpg",     label: "Skin Rituals"  },
            { src: "/services/nails.jpg",    label: "Nail Studio"   },
            { src: "/services/wellness.jpg", label: "Wellness"      },
          ].map(({ src, label }) => (
            <div
              key={label}
              className="gallery-item group"
              style={{ borderRadius: "1.25rem", aspectRatio: "3/4", overflow: "hidden" }}
            >
              <Image
                src={src}
                alt={label}
                width={400}
                height={533}
                className="h-full w-full object-cover"
              />
              <div className="gallery-overlay">
                <span
                  className="text-[9px] uppercase tracking-[0.35em] font-semibold w-full text-center"
                  style={{ color: "rgba(255,255,255,0.90)" }}
                >
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
        <div
          className="relative overflow-hidden rounded-3xl px-8 sm:px-16 py-14 sm:py-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, var(--ink) 0%, var(--ink-soft) 60%, #3a1c26 100%)",
            boxShadow: "0 40px 80px -24px rgba(28,20,16,0.55)",
          }}
        >
          <div
            className="absolute top-0 left-0 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{ background: "rgba(201,169,110,0.12)", filter: "blur(64px)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-80 h-80 translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none"
            style={{ background: "rgba(156,74,94,0.18)", filter: "blur(64px)" }}
          />

          <div className="relative space-y-5">
            <div className="divider-gold mx-auto mb-6" style={{ maxWidth: "80px" }} />
            <p
              className="text-[9px] uppercase tracking-[0.55em] font-semibold"
              style={{ color: "var(--gold)" }}
            >
              Ready to Begin?
            </p>
            <h3
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-white"
            >
              Book Your{" "}
              <span className="text-shimmer italic">Experience</span>
            </h3>
            <p className="text-sm max-w-sm mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
              Reserve your appointment and let us take care of the rest.
            </p>
            <div className="pt-5 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking" className="btn-gold">
                Book Now
              </Link>
              <Link href="/" className="btn-ghost">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}