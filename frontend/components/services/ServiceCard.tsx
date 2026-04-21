import Link from "next/link";

type Props = {
  name: string;
  description: string;
  price: number;
  duration: number;
};

export function ServiceCard({ name, description, price, duration }: Props) {
  return (
    <div className="service-card group p-7 sm:p-8">
      {/* Top gold shimmer on hover (via CSS .service-card::before) */}

      <div className="relative">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <h3
            className="font-serif text-2xl leading-tight"
            style={{ color: "var(--ink)" }}
          >
            {name}
          </h3>

          {/* Price badge */}
          <div
            className="flex-shrink-0 rounded-2xl px-4 py-2 text-right transition-colors duration-300"
            style={{
              background: "rgba(156,74,94,0.07)",
              border: "1px solid rgba(156,74,94,0.15)",
            }}
          >
            <p
              className="text-[8px] uppercase tracking-[0.28em] font-semibold"
              style={{ color: "var(--muted)" }}
            >
              from
            </p>
            <p
              className="text-lg font-semibold mt-0.5 leading-none"
              style={{ color: "var(--rose)" }}
            >
              ${price}
            </p>
          </div>
        </div>

        {/* Description */}
        <p
          className="mt-4 text-sm leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {description}
        </p>

        {/* Divider */}
        <div className="divider-gold mt-6 mb-5" />

        {/* Footer row */}
        <div className="flex items-center justify-between">
          {/* Duration pill */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em]"
            style={{
              background: "rgba(201,169,110,0.08)",
              border: "1px solid rgba(201,169,110,0.20)",
              color: "var(--gold-dim)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--gold)" }}
            />
            {duration} min
          </div>

          {/* Book CTA */}
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] font-semibold uppercase tracking-widest transition-all duration-300"
            style={{
              background: "var(--ink)",
              color: "var(--cream)",
            }}
            // hover handled inline via onMouseEnter/Leave or global CSS
          >
            Book
            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              style={{ display: "inline-block" }}
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}