// frontend/app/(public)/about/page.tsx
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--cream)" }}>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--ink) 0%, var(--ink-soft) 65%, #3a1c26 100%)",
          padding: "96px 0",
        }}
      >
        {/* Blobs */}
        <div
          className="absolute top-0 left-0 pointer-events-none"
          style={{
            width: "32rem", height: "32rem",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: "rgba(156,74,94,0.20)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 pointer-events-none"
          style={{
            width: "28rem", height: "28rem",
            transform: "translate(50%, 50%)",
            borderRadius: "50%",
            background: "rgba(201,169,110,0.12)",
            filter: "blur(80px)",
          }}
        />
        {/* Subtle image overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.07 }}>
          <Image src="/gallery/hero.jpg" alt="" fill className="object-cover" priority aria-hidden />
        </div>

        <Container className="relative text-center animate-fade-up">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-px w-16" style={{ background: "rgba(201,169,110,0.45)" }} />
            <span
              className="text-[10px] sm:text-xs uppercase tracking-[0.55em] font-semibold"
              style={{ color: "var(--gold)" }}
            >
              Our Story
            </span>
            <div className="h-px w-16" style={{ background: "rgba(201,169,110,0.45)" }} />
          </div>

          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.04]"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.35)" }}
          >
            The Art of{" "}
            <span className="italic text-shimmer">Excellence</span>
          </h1>

          <p
            className="mt-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Founded on the principles of precision, passion, and personalised care,{" "}
            The Atelier has been redefining the salon experience for over a decade.
          </p>
        </Container>
      </section>

      {/* ── MISSION / SPLIT ── */}
      <section style={{ padding: "96px 0", background: "var(--cream)" }}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image side */}
            <div
              className="relative animate-fade-up"
              style={{ borderRadius: "24px", overflow: "hidden", aspectRatio: "4/5", boxShadow: "var(--shadow-rose)" }}
            >
              <Image
                src="/gallery/hero.jpg"
                alt="Salon Interior"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.9) saturate(1.1)" }}
              />
              {/* Floating stat */}
              <div
                className="absolute bottom-6 right-6 rounded-2xl px-6 py-5"
                style={{
                  background: "var(--cream)",
                  border: "1px solid rgba(201,169,110,0.22)",
                  boxShadow: "var(--shadow-rose)",
                }}
              >
                <div className="font-serif text-3xl" style={{ color: "var(--ink)" }}>10+</div>
                <div className="text-[9px] uppercase tracking-[0.40em] mt-1" style={{ color: "var(--muted)" }}>
                  Years of craft
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className="animate-fade-up delay-200">
              <div className="eyebrow">Our Mission</div>
              <h2
                className="mt-6 font-serif text-4xl sm:text-5xl leading-tight"
                style={{ color: "var(--ink)" }}
              >
                Dedicated to your{" "}
                <span className="italic" style={{ color: "var(--rose)" }}>unique beauty</span>
              </h2>
              <div className="divider-gold mt-8 mb-8" style={{ maxWidth: "120px" }} />
              <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                At The Atelier, we believe that beauty is an individual journey. Our mission is
                to provide a sanctuary where artistry meets wellness, ensuring every client leaves
                feeling confident, refreshed, and authentically themselves.
              </p>
              <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                We combine the latest techniques with time-honoured rituals, using only the finest
                botanical products to ensure the health and longevity of your hair and skin.
              </p>

              {/* Stats row */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { n: "10+",  l: "Years of Craft"    },
                  { n: "15+",  l: "Expert Stylists"   },
                  { n: "5k+",  l: "Happy Clients"     },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl p-4 text-center"
                    style={{ background: "var(--warm-off)", border: "1px solid rgba(201,169,110,0.14)" }}
                  >
                    <div className="font-serif text-2xl" style={{ color: "var(--ink)" }}>{s.n}</div>
                    <div className="text-[10px] uppercase tracking-[0.35em] mt-1" style={{ color: "var(--muted)" }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/booking" className="btn-primary" style={{ textDecoration: "none" }}>
                  ✦ Book an Experience
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: "80px 0", background: "var(--warm-off)" }}>
        <Container>
          <div className="text-center mb-14">
            <div className="eyebrow justify-center">Our Pillars</div>
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl" style={{ color: "var(--ink)" }}>
              What makes us{" "}
              <span className="italic" style={{ color: "var(--rose)" }}>different</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "✦", title: "Bespoke",   desc: "Every treatment is tailored uniquely to you — no templates, ever." },
              { icon: "◈", title: "Botanical", desc: "Pure, natural ingredients sourced for lasting, visible results."     },
              { icon: "◉", title: "Serene",    desc: "An atmosphere of calm and intentional, mindful luxury."              },
              { icon: "◆", title: "Mastery",   desc: "Over a decade of artisanal craftsmanship and continued education."   },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className="glass-card rounded-3xl p-7 text-center group transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-soft)", animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="mx-auto mb-4 w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, rgba(156,74,94,0.10), rgba(201,169,110,0.08))", color: "var(--rose)" }}
                >
                  {icon}
                </div>
                <h3 className="font-serif text-lg mb-2" style={{ color: "var(--ink)" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: "96px 0", background: "var(--parchment)" }}>
        <Container>
          <div className="text-center mb-14">
            <div className="eyebrow justify-center">The Artisans</div>
            <h2 className="mt-5 font-serif text-3xl sm:text-5xl" style={{ color: "var(--ink)" }}>
              Meet our{" "}
              <span className="italic" style={{ color: "var(--rose)" }}>Master Stylists</span>
            </h2>
            <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
              Our team of industry experts is dedicated to the highest standards of hair and skin artistry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Julian Vance", role: "Creative Director",   icon: "✂️", speciality: "Precision Cuts & Balayage" },
              { name: "Elena Rossi",  role: "Lead Colourist",      icon: "🎨", speciality: "Colour Correction & Toning" },
              { name: "Sarah Chen",   role: "Skincare Specialist", icon: "🌿", speciality: "Botanical Facial Rituals"    },
            ].map((member, i) => (
              <div
                key={member.name}
                className="glass-card rounded-3xl p-8 text-center animate-fade-up group transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-soft)", animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "rgba(201,169,110,0.12)" }}
                >
                  {member.icon}
                </div>
                <p className="text-[9px] uppercase tracking-[0.45em] font-semibold mb-2" style={{ color: "var(--gold)" }}>
                  {member.role}
                </p>
                <h3 className="font-serif text-2xl" style={{ color: "var(--ink)" }}>{member.name}</h3>
                <div className="divider-gold mx-auto mt-4 mb-4" style={{ maxWidth: "60px" }} />
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                  {member.speciality} — dedicated to creating looks that honour each client's inner essence.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <div
            className="relative overflow-hidden rounded-3xl px-8 sm:px-16 py-16 sm:py-20 text-center"
            style={{
              background: "linear-gradient(135deg, var(--ink) 0%, var(--ink-soft) 60%, #3D1E28 100%)",
              boxShadow: "0 32px 80px -24px rgba(28,20,16,0.6)",
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
      </section>

    </div>
  );
}
