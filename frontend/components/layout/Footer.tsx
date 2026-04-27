import Link from "next/link";

const NAV = [
  { label: "Services",  href: "/services" },
  { label: "About",     href: "/about"    },
  { label: "Gallery",   href: "/preview"  },
  { label: "Booking",   href: "/booking"  },
];

const SERVICES = [
  "Hair Artistry",
  "Skin Rituals",
  "Glass Manicure",
  "Botanical Spa",
  "Brow & Lash",
];

const SOCIAL = [
  { name: "Instagram", icon: "◈", href: "https://instagram.com" },
  { name: "Pinterest", icon: "◆", href: "https://pinterest.com" },
  { name: "TikTok",    icon: "◉", href: "https://tiktok.com"    },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        width: "100%",
        background: "var(--ink)",
        borderTop: "1px solid rgba(201,169,110,0.15)",
      }}
    >
      {/* Marquee strip */}
      <div style={{ borderBottom: "1px solid rgba(201,169,110,0.12)", overflow: "hidden", padding: "14px 0" }}>
        <div
          style={{
            display: "flex",
            gap: "48px",
            whiteSpace: "nowrap",
            width: "max-content",
            animation: "marquee 30s linear infinite",
          }}
        >
          {[...Array(2)].map((_, gi) =>
            ["✦ Hair Artistry", "◈ Skin Rituals", "◉ Glass Manicure", "◆ Botanical Spa", "✦ Brow Design", "◈ Lash Studio"].map(
              (item, i) => (
                <span
                  key={`${gi}-${i}`}
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.45em",
                    color: "rgba(201,169,110,0.55)",
                    padding: "0 16px",
                  }}
                >
                  {item}
                </span>
              )
            )
          )}
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "72px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: 700, color: "#fff" }}>
                The <span style={{ fontStyle: "italic", color: "var(--rose)" }}>Atelier</span>
              </span>
              <div style={{ fontSize: "8px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.50em", color: "var(--gold)", marginTop: "8px" }}>
                Aura Glass Studio
              </div>
            </Link>
            <p style={{ marginTop: "24px", fontSize: "13px", lineHeight: "1.85", color: "rgba(255,255,255,0.48)", maxWidth: "240px" }}>
              A sanctuary of bespoke beauty. Where light meets pure serenity and craftsmanship meets soul.
            </p>
            <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  style={{
                    width: "34px", height: "34px", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "13px", color: "var(--gold)",
                    border: "1px solid rgba(201,169,110,0.22)",
                    background: "rgba(201,169,110,0.06)",
                    textDecoration: "none",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.45em", color: "var(--gold)", marginBottom: "24px", marginTop: 0 }}>
              Explore
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(255,255,255,0.50)", textDecoration: "none" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.45em", color: "var(--gold)", marginBottom: "24px", marginTop: 0 }}>
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link href="/services" style={{ fontSize: "11px", color: "rgba(255,255,255,0.48)", textDecoration: "none" }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + Contact */}
          <div>
            <h4 style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.45em", color: "var(--gold)", marginBottom: "24px", marginTop: 0 }}>
              Studio Hours
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { day: "Mon — Fri", hours: "9am — 7pm"  },
                { day: "Saturday",  hours: "10am — 6pm" },
                { day: "Sunday",    hours: "Closed", closed: true },
              ].map(({ day, hours, closed }) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "9px", gap: "20px" }}>
                  <span style={{ color: "rgba(255,255,255,0.42)" }}>{day}</span>
                  <span style={{ fontWeight: 700, color: closed ? "var(--rose)" : "rgba(255,255,255,0.78)" }}>{hours}</span>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.45em", color: "var(--gold)", margin: "24px 0 14px" }}>
              Contact
            </h4>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.48)", lineHeight: 2 }}>
              <p style={{ margin: 0 }}>hello@theatelier.com</p>
              <p style={{ margin: 0 }}>+1 (800) 555-0192</p>
              <p style={{ marginTop: "8px", opacity: 0.85 }}>Studio 12, Glass Square<br />London, UK W1B 2EL</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
          <p style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.30em", color: "rgba(255,255,255,0.28)", margin: 0 }}>
            © {year} The Atelier Studio. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "28px" }}>
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link key={item} href="#" style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.28em", color: "rgba(255,255,255,0.28)", textDecoration: "none" }}>
                {item}
              </Link>
            ))}
          </div>
          <p style={{ fontSize: "9px", fontStyle: "italic", letterSpacing: "0.48em", color: "rgba(201,169,110,0.50)", margin: 0 }}>
            Modern Rituals · Pure Serenity
          </p>
        </div>
      </div>
    </footer>
  );
}