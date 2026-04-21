"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "Discover" },
    { href: "/booking",  label: "Booking"  },
    { href: "/preview",  label: "Preview"  },
  ];

  return (
    <header
      className="sticky top-0 z-50 header-glow"
      style={{
        background: "rgba(250, 247, 244, 0.88)",
        backdropFilter: "blur(20px) saturate(1.6)",
        WebkitBackdropFilter: "blur(20px) saturate(1.6)",
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5">

        {/* ── Brand ── */}
        <Link
          href="/"
          className="group flex flex-col leading-none"
          style={{ textDecoration: "none" }}
        >
          <span
            className="font-serif text-xl sm:text-2xl tracking-[0.14em] transition-colors duration-300"
            style={{ color: "var(--ink)" }}
          >
            The{" "}
            <span
              className="italic transition-colors duration-300"
              style={{ color: "var(--rose)" }}
            >
              Atelier
            </span>
          </span>
          <span
            className="mt-0.5 text-[8px] tracking-[0.55em] uppercase transition-colors duration-300"
            style={{ color: "var(--gold)" }}
          >
            Aura Glass Studio
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative pb-1 text-[10px] font-semibold uppercase tracking-[0.38em] transition-colors duration-300 group"
                style={{ color: active ? "var(--rose)" : "var(--muted)", textDecoration: "none" }}
              >
                {link.label}
                {/* animated underline */}
                <span
                  className="absolute left-0 bottom-0 h-[1.5px] transition-all duration-400 ease-in-out"
                  style={{
                    width: active ? "100%" : "0%",
                    background: "linear-gradient(90deg, var(--rose), var(--gold))",
                  }}
                />
              </Link>
            );
          })}
        </div>

        {/* ── CTA + Mobile Toggle ── */}
        <div className="flex items-center gap-3">
          <Link href="/booking" className="btn-primary hidden sm:inline-flex" style={{ padding: "0.55rem 1.5rem" }}>
            Book Now
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 rounded-xl transition-colors"
            style={{ background: mobileOpen ? "rgba(156,74,94,0.08)" : "transparent" }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-[1.5px] rounded-full transition-all duration-300"
                style={{
                  width: i === 1 ? (mobileOpen ? "16px" : "22px") : "22px",
                  background: "var(--ink)",
                  transform:
                    mobileOpen
                      ? i === 0 ? "translateY(6.5px) rotate(45deg)"
                      : i === 1 ? "scaleX(0) opacity(0)"
                      : "translateY(-6.5px) rotate(-45deg)"
                      : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: mobileOpen ? "260px" : "0px",
          background: "rgba(250,247,244,0.97)",
          borderTop: "1px solid rgba(201,169,110,0.18)",
        }}
      >
        <div className="mx-auto flex flex-col gap-0 max-w-6xl px-4 py-4">
          {navLinks.map((link, i) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-3 text-[11px] font-semibold uppercase tracking-[0.38em] transition-colors duration-200 border-b"
                style={{
                  color: active ? "var(--rose)" : "var(--muted)",
                  borderColor: "rgba(201,169,110,0.14)",
                  textDecoration: "none",
                }}
              >
                {link.label}
                <span style={{ color: "var(--gold)", fontSize: "0.75rem" }}>→</span>
              </Link>
            );
          })}
          <Link
            href="/booking"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-4 w-full text-center justify-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}