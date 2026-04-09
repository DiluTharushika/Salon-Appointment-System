import Link from "next/link";

type Props = {
  name: string;
  description?: string | null;
  price: number;
  duration: number; // minutes
};

export function ServiceCard({ name, description, price, duration }: Props) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-2">
          <h3 className="font-serif text-xl text-[#201A17]">{name}</h3>
          {description && (
            <p className="text-sm leading-relaxed text-[#7C6660]">
              {description}
            </p>
          )}
          <div className="text-xs uppercase tracking-[0.2em] text-[#7C6660]">
            Duration: {duration} min
          </div>
        </div>

        <div className="text-right">
          <div className="text-lg font-semibold text-[#9C4A5E]">${price}</div>
          <Link
            href="/booking"
            className="mt-3 inline-block rounded-full border border-[#9C4A5E] px-4 py-2 text-xs font-medium text-[#9C4A5E] hover:bg-[#9C4A5E]/10"
          >
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}