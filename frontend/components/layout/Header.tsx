"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/",         label: "Home"     },
    { href: "/services",  label: "Discover" },
    { href: "/booking",   label: "Booking"  },
    { href: "/preview",   label: "Gallery"  },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        background: "rgba(250, 247, 244, 0.98)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(201, 169, 110, 0.12)",
        // Decreased height for a sleeker profile
        height: "72px", 
        display: "flex",
        alignItems: "center"
      }}
    >
      <div 
        style={{ 
          maxWidth: "1440px", 
          margin: "0 auto", 
          width: "100%", 
          // Added 60px padding so elements don't touch the screen corners
          padding: "0 60px", 
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {/* ── LEFT: Brand ── */}
        <div style={{ flex: "0 0 auto" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.1" }}>
              <span className="font-serif" style={{ fontSize: "22px", letterSpacing: "0.05em", color: "var(--ink)" }}>
                The <span style={{ fontStyle: "italic", color: "var(--rose)" }}>Atelier</span>
              </span>
              <span style={{ fontSize: "7px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.5em", color: "var(--gold)", marginTop: "4px" }}>
                Aura Glass Studio
              </span>
            </div>
          </Link>
        </div>

        {/* ── CENTER: Navigation (Home + Others) ── */}
        <nav style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "40px" // Perfectly balanced gap
        }}>
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "10px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  textDecoration: "none",
                  color: active ? "var(--rose)" : "var(--muted)",
                  position: "relative",
                  padding: "6px 0",
                  transition: "color 0.3s ease"
                }}
              >
                {link.label}
                {/* Slim Active Underline */}
                <span
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    height: "1px",
                    width: active ? "100%" : "0%",
                    backgroundColor: "var(--gold)",
                    transition: "width 0.4s ease",
                    opacity: active ? 1 : 0
                  }}
                />
              </Link>
            );
          })}
        </nav>

        {/* ── RIGHT: Button (Away from corner) ── */}
        <div style={{ flex: "0 0 auto" }}>
          <Link 
            href="/booking" 
            className="btn-primary" 
            style={{ 
              padding: "10px 22px", 
              fontSize: "9px", 
              letterSpacing: "0.2em",
              borderRadius: "999px",
              display: "inline-flex",
              // Slightly smaller scale to fit the 72px header
              transform: "scale(0.95)"
            }}
          >
            BOOK NOW
          </Link>
        </div>

      </div>
    </header>
  );
}