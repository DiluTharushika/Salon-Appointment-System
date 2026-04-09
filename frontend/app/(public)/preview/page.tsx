import { ServiceCard } from "@/components/services/ServiceCard";

export default function PreviewPage() {
  const mockServices = [
    {
      id: "1",
      name: "Classic Cut",
      description: "A timeless haircut tailored to your style.",
      price: 45,
      duration: 45,
    },
    {
      id: "2",
      name: "Deluxe Grooming",
      description: "Haircut, beard trim, and hot towel treatment.",
      price: 75,
      duration: 90,
    },
  ];

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="text-xs uppercase tracking-[0.25em] text-[#7C6660]">
          Component Preview
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-[#201A17]">
          UI Components Gallery
        </h1>
        <p className="max-w-2xl text-sm text-[#7C6660]">
          This page showcases the UI components used throughout the application.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-medium text-[#201A17]">Service Cards</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {mockServices.map((s) => (
            <ServiceCard
              key={s.id}
              name={s.name}
              description={s.description}
              price={s.price}
              duration={s.duration}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
