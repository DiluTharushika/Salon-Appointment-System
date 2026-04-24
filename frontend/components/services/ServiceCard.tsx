import Link from "next/link";

type Props = {
  name: string;
  description: string;
  price: number | string;
  duration?: number | string | null;
};

export function ServiceCard({ name, description, price, duration }: Props) {
  return (
    <div className="service-card p-8 flex flex-col">
      {/* Top */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <p
            className="text-[10px] uppercase tracking-[0.45em] font-semibold"
            style={{ color: "var(--gold)" }}
          >
            Service
          </p>

          <h3 className="mt-3 font-serif text-2xl" style={{ color: "var(--ink)" }}>
            {name}
          </h3>
        </div>

        <div className="text-right shrink-0">
          <p className="text-[10px] uppercase tracking-[0.35em]" style={{ color: "var(--muted)" }}>
            From
          </p>
          <p className="mt-1 font-serif text-2xl font-bold" style={{ color: "var(--rose)" }}>
            ${price}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
        {description}
      </p>

      {/* Bottom */}
      <div className="mt-7 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {duration ? (
            <span
              className="rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.35em] font-semibold"
              style={{
                border: "1px solid rgba(201,169,110,0.25)",
                background: "rgba(201,169,110,0.10)",
                color: "var(--ink)",
              }}
            >
              {duration} min
            </span>
          ) : null}
        </div>

        <Link href="/booking" className="btn-primary">
          Book
        </Link>
      </div>
    </div>
  );
}