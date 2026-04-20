"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/services", label: "Discover" },
    { href: "/booking", label: "Booking" },
    { href: "/preview", label: "Preview" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F7F1EE]/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="font-serif text-xl sm:text-2xl tracking-[0.12em] text-[#201A17] hover:text-[#9C4A5E] transition-colors"
        >
          The Atelier
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.35em] text-[#7C6660]">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-colors hover:text-[#9C4A5E]
                  after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-[#9C4A5E] after:transition-all after:duration-300
                  ${active ? "text-[#9C4A5E] after:w-full" : "after:w-0 hover:after:w-full"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/booking"
          className="rounded-full bg-[#201A17] px-5 sm:px-6 py-2.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.35em] text-[#F7F1EE]
                     shadow-md shadow-black/10 transition hover:bg-[#9C4A5E]"
        >
          Book Now
        </Link>
      </nav>

      {/* Mobile links */}
      <div className="md:hidden border-t border-black/5 bg-[#F7F1EE]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-7 px-4 sm:px-6 lg:px-8 py-3 text-[10px] uppercase tracking-[0.32em] text-[#7C6660]">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 border-b-[1.5px] transition-colors hover:text-[#9C4A5E]
                  ${active ? "text-[#9C4A5E] border-[#9C4A5E]" : "border-transparent"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}