import Link from "next/link";

type Props = {
  name: string;
  description: string;
  price: number;
  duration: number;
};

export function ServiceCard({ name, description, price, duration }: Props) {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 sm:p-7
                 shadow-sm backdrop-blur transition-all duration-300
                 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
    >
      {/* subtle gradient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-[#9C4A5E]/12 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[#7C6660]/12 blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl text-[#201A17] leading-tight">
            {name}
          </h3>

          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.25em] text-[#7C6660]">
              from
            </p>
            <p className="text-lg font-semibold text-[#9C4A5E]">${price}</p>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-[#7C6660]">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1.5 text-xs text-[#7C6660]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9C4A5E]" />
            <span className="uppercase tracking-[0.2em]">{duration} min</span>
          </div>

          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-[#201A17] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#F7F1EE]
                       transition-colors duration-300 hover:bg-[#9C4A5E]"
          >
            Book
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}