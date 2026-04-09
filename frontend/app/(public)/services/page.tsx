import { getServices } from "@/lib/api";
import { ServiceCard } from "@/components/services/ServiceCard";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="text-xs uppercase tracking-[0.25em] text-[#7C6660]">
          Curated Services
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-[#201A17]">
          Discover our service menu
        </h1>
        <p className="max-w-2xl text-sm text-[#7C6660]">
          Explore our curated treatments and book your appointment.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <ServiceCard
            key={s.id}
            name={s.name}
            description={s.description ?? ""}
            price={s.price}
            duration={s.duration}
          />
        ))}
      </div>
    </div>
  );
}