import { ServiceCard } from "@/components/services/ServiceCard";

const demoServices = [
  {
    name: "Hair Artistry",
    description: "From editorial cuts to bespoke balayage, redefine your crown.",
    price: 40,
    duration: 45,
  },
  {
    name: "Skin Rituals",
    description: "Glow-focused facial treatments tailored to your skin type.",
    price: 60,
    duration: 60,
  },
  {
    name: "Nail Studio",
    description: "Minimal, modern manicures with careful attention to detail.",
    price: 25,
    duration: 30,
  },
  {
    name: "Soul & Wellness",
    description: "Relaxing spa rituals designed to reset and restore.",
    price: 70,
    duration: 75,
  },
];

export default function ServicesPage() {
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
          Explore our curated treatments designed for modern beauty. Select a
          service and book your appointment in minutes.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {demoServices.map((s) => (
          <ServiceCard key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}