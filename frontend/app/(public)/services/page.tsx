import { getServices } from "@/lib/api";
import { ServiceCard } from "@/components/services/ServiceCard";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen bg-[#F9F6F2]">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-[#201A17] py-24 px-6">
        
        {/* Blurred blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#9C4A5E]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7C6660]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto text-center">
          
          {/* Label */}
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#9C4A5E]/60" />
            <span className="text-xs uppercase tracking-[0.4em] text-[#9C4A5E] font-medium">
              Curated Services
            </span>
            <div className="h-px w-16 bg-[#9C4A5E]/60" />
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
            Discover Our
          </h1>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#9C4A5E] italic mb-6 leading-tight">
            Service Menu
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-white/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#9C4A5E]" />
            <div className="h-px w-12 bg-white/20" />
          </div>

          {/* Subtitle */}
          <p className="text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Explore our curated treatments and rituals, crafted to restore your
            natural beauty and inner harmony.
          </p>
        </div>
      </div>

      {/* ── Services Section ── */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#9C4A5E] mb-2 font-medium">
              All Treatments
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#201A17]">
              {services.length} Services Available
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-px w-16 bg-[#7C6660]/30" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#7C6660]">
              The Atelier Collection
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        {services.length === 0 ? (
          <div className="text-center py-24 space-y-4">
            <div className="text-7xl">✨</div>
            <h3 className="font-serif text-2xl text-[#201A17]">Coming Soon</h3>
            <p className="text-[#7C6660] text-sm">
              Our service menu is being curated. Check back soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
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
        )}

        {/* ── Bottom CTA ── */}
        <div className="mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-[#201A17] px-8 py-14 text-center">
            
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#9C4A5E]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#7C6660]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-[#9C4A5E] font-medium">
                Ready to Begin?
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-white">
                Book Your Experience
              </h3>
              <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
                Reserve your appointment and let us take care of the rest.
              </p>
              <div className="pt-4">
                <a
                  href="/booking"
                  className="inline-flex items-center gap-3 rounded-full bg-[#9C4A5E] px-10 py-4 text-sm font-semibold text-white uppercase tracking-widest hover:bg-[#8a3f52] hover:shadow-xl hover:shadow-[#9C4A5E]/30 transition-all duration-300"
                >
                  <span>Book Now</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}