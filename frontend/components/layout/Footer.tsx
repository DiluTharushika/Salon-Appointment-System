import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-bg mt-20">
      {/* Gold shimmer divider */}
      <div className="divider-gold" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand block */}
          <div className="space-y-3 max-w-xs">
            <p className="font-serif text-2xl tracking-[0.12em]" style={{ color: "var(--ink)" }}>
              The{" "}
              <span className="italic" style={{ color: "var(--rose)" }}>
                Atelier
              </span>
            </p>
            <p
              className="text-[8px] tracking-[0.55em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              Aura Glass Studio
            </p>
            <p className="text-xs leading-relaxed mt-2" style={{ color: "var(--muted)" }}>
              A sanctuary of bespoke beauty. Where light meets pure serenity.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-10 text-xs">
            <div className="space-y-3">
              <p
                className="text-[9px] font-semibold uppercase tracking-[0.4em] mb-4"
                style={{ color: "var(--gold)" }}
              >
                Explore
              </p>
              {[
                { href: "/services", label: "Our Services" },
                { href: "/booking",  label: "Book Appointment" },
                { href: "/preview",  label: "Preview Gallery" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block transition-colors duration-200 hover:underline underline-offset-4"
                  style={{ color: "var(--muted)", textDecoration: "none" }}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="space-y-3">
              <p
                className="text-[9px] font-semibold uppercase tracking-[0.4em] mb-4"
                style={{ color: "var(--gold)" }}
              >
                Contact
              </p>
              {[
                "hello@theatelier.com",
                "+1 (800) 555-0192",
                "Mon–Sat · 9am – 7pm",
              ].map((item) => (
                <p key={item} className="text-xs" style={{ color: "var(--muted)" }}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold my-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[9px] uppercase tracking-[0.3em]" style={{ color: "var(--muted)" }}>
          <p>© {year} The Atelier. All rights reserved.</p>
          <p style={{ color: "var(--gold-dim)" }}>Curated Beauty · Modern Rituals</p>
        </div>
      </div>
    </footer>
  );
}