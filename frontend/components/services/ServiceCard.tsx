type Props = {
  name: string;
  description?: string;
  price: number;
  duration: number; // minutes
};

export function ServiceCard({ name, description, price, duration }: Props) {
  return (
    <div className="rounded-3xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="font-medium text-lg">{name}</h3>
          {description && (
            <p className="mt-1 text-sm text-gray-600">{description}</p>
          )}
          <p className="mt-2 text-xs text-gray-500">Duration: {duration} min</p>
        </div>

        <div className="text-right">
          <p className="text-lg font-semibold text-rose-700">${price}</p>
          <a
            href="/booking"
            className="mt-3 inline-block rounded-full border border-rose-700 px-4 py-1 text-xs font-medium text-rose-700 hover:bg-rose-50"
          >
            Book
          </a>
        </div>
      </div>
    </div>
  );
}