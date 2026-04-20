import { getServices } from "@/lib/api";
import { ServiceCard } from "@/components/services/ServiceCard";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F6F2] to-[#F7F1EE]">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-[#201A17] px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        {/* Blurred blobs */}
        <div className="pointer-events-none absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9C4A5E]/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-[#7C6660]/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-10 sm:w-16 bg-[#9C4A5E]/70" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.45em] text-[#9C4A5E] font-medium">
              Curated Services
            </span>
            <div className="h-px w-10 sm:w-16 bg-[#9C4A5E]/70" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
            Discover Our
          </h1>
          <h2 className="mt-2 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#9C4A5E] italic leading-tight">
            Service Menu
          </h2>

          <p className="mt-6 text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore our curated treatments and rituals, crafted to restore your
            natural beauty and inner harmony.
          </p>
        </div>
      </div>

      {/* ── Services Section ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#9C4A5E] mb-2 font-medium">
              All Treatments
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#201A17]">
              {services.length} Services Available
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-px w-12 sm:w-16 bg-[#7C6660]/30" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7C6660]">
              The Atelier Collection
            </span>
          </div>
        </div>

        {services.length === 0 ? (
          <div className="rounded-3xl border border-black/10 bg-white/70 p-10 sm:p-14 text-center space-y-4 shadow-sm backdrop-blur">
            <div className="text-6xl sm:text-7xl">✨</div>
            <h3 className="font-serif text-2xl text-[#201A17]">Coming Soon</h3>
            <p className="text-[#7C6660] text-sm">
              Our service menu is being curated. Check back soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
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
        <div className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-[#201A17] px-6 sm:px-10 py-12 sm:py-14 text-center shadow-[0_25px_80px_-50px_rgba(32,26,23,0.95)]">
            <div className="pointer-events-none absolute top-0 left-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9C4A5E]/15 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/2 translate-y-1/2 rounded-full bg-[#7C6660]/10 blur-3xl" />

            <div className="relative space-y-4">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.45em] text-[#9C4A5E] font-medium">
                Ready to Begin?
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-white">
                Book Your Experience
              </h3>
              <p className="text-white/70 text-sm max-w-sm mx-auto leading-relaxed">
                Reserve your appointment and let us take care of the rest.
              </p>

              <div className="pt-5">
                <a
                  href="/booking"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#9C4A5E] px-10 py-4 text-xs sm:text-sm font-semibold text-white uppercase tracking-widest
                             hover:bg-[#8a3f52] transition-all duration-300
                             shadow-lg shadow-[#9C4A5E]/25 hover:shadow-xl hover:shadow-[#9C4A5E]/30"
                >
                  <span>Book Now</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
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