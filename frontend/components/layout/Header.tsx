"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/",          label: "Home"      },
  { href: "/services",  label: "Services"  },
  { href: "/about",     label: "About"     },
  { href: "/hair-match", label: "Hair Match" }, // ✅ NEW
  { href: "/booking",   label: "Book"      },
  { href: "/preview",   label: "Gallery"   },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const headerBg = scrolled
    ? "rgba(251, 247, 243, 0.97)"
    : "rgba(251, 247, 243, 0.82)";

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          background: headerBg,
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: scrolled
            ? "1px solid rgba(201,169,110,0.22)"
            : "1px solid rgba(201,169,110,0.10)",
          height: "72px",
          display: "flex",
          alignItems: "center",
          transition:
            "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
          boxShadow: scrolled
            ? "0 4px 32px -8px rgba(32,26,23,0.12)"
            : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            width: "100%",
            padding: "0 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* ── LOGO ── */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <div
              style={{ display: "flex", flexDirection: "column", lineHeight: "1.05" }}
            >
              <span
                className="font-serif"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  color: "var(--ink)",
                }}
              >
                The{" "}
                <span style={{ fontStyle: "italic", color: "var(--rose)" }}>
                  Atelier
                </span>
              </span>
              <span
                style={{
                  fontSize: "7.5px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.50em",
                  color: "var(--gold)",
                  marginTop: "4px",
                }}
              >
                Aura Glass Studio
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "36px",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.28em",
                    textDecoration: "none",
                    color: active ? "var(--rose)" : "var(--muted)",
                    position: "relative",
                    padding: "6px 0",
                    transition: "color 0.25s ease",
                  }}
                >
                  {link.label}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-1px",
                      left: 0,
                      height: "1px",
                      width: active ? "100%" : "0%",
                      backgroundColor: "var(--gold)",
                      transition: "width 0.35s ease",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── RIGHT: CTA + Hamburger ── */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}
          >
            <Link
              href="/booking"
              className="btn-primary hidden-mobile"
              style={{
                padding: "9px 22px",
                fontSize: "10px",
                letterSpacing: "0.22em",
                height: "36px",
                textDecoration: "none",
              }}
            >
              Book Now
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="show-mobile"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: "var(--ink)",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: "var(--ink)",
                  opacity: open ? 0 : 1,
                  transition: "opacity 0.2s ease",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: "var(--ink)",
                  transition: "transform 0.3s ease",
                  transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(32,26,23,0.45)",
            backdropFilter: "blur(4px)",
            opacity: open ? 1 : 0,
            transition: "opacity 0.35s ease",
          }}
        />

        {/* Drawer panel */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "min(320px, 85vw)",
            background: "var(--parchment)",
            borderLeft: "1px solid rgba(201,169,110,0.18)",
            padding: "100px 40px 48px",
            transform: open ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            boxShadow: "-20px 0 60px rgba(32,26,23,0.15)",
          }}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "14px 0",
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.30em",
                  textDecoration: "none",
                  color: active ? "var(--rose)" : "var(--ink)",
                  borderBottom: "1px solid rgba(201,169,110,0.12)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <div style={{ marginTop: "32px" }}>
            <Link
              href="/booking"
              className="btn-primary"
              style={{
                textDecoration: "none",
                width: "100%",
                justifyContent: "center",
              }}
            >
              Book Appointment
            </Link>
          </div>

          <p
            style={{
              marginTop: "auto",
              fontSize: "9px",
              textTransform: "uppercase",
              letterSpacing: "0.4em",
              color: "var(--gold)",
              fontStyle: "italic",
            }}
          >
            Aura Glass Studio
          </p>
        </div>
      </div>

      {/* Responsive helper styles */}
      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none  !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none  !important; }
          .show-mobile   { display: flex  !important; }
        }
      `}</style>
    </>
  );
}