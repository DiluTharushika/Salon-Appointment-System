import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[#F7F1EE] text-[#201A17]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Salon interior"
            fill
            priority
            className="object-cover object-center"
          />
          {/* soft overlays for luxury look */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F1EE]/35 via-[#F7F1EE]/65 to-[#F7F1EE]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#201A17]/10 via-transparent to-[#201A17]/10" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-[10px] uppercase tracking-[0.45em] text-[#7C6660] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9C4A5E]" />
              Aura Glass Studio
            </div>

            <h1 className="mt-8 font-serif text-5xl leading-[1.03] sm:text-6xl md:text-7xl text-balance">
              Where light meets{" "}
              <span className="italic text-[#201A17]">pure serenity.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[#7C6660] sm:text-base">
              Experience a sanctuary of bespoke beauty. Our atelier combines
              ethereal aesthetics with master craftsmanship to unveil your most
              radiant self.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-full bg-[#201A17] px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F7F1EE]
                           shadow-lg shadow-black/10 transition hover:bg-[#9C4A5E] hover:shadow-xl hover:shadow-[#9C4A5E]/15"
              >
                Book your experience
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/65 px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#201A17]
                           backdrop-blur transition hover:bg-white"
              >
                Our philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#9C4A5E]">
            Reserve
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Reserve Your Moment
          </h2>
          <p className="mt-3 text-sm text-[#7C6660]">
            Tailored services curated for your unique aura.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="group rounded-3xl border border-black/10 bg-white/65 p-7 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10">
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#7C6660]">
              Hair Artistry
            </p>
            <h3 className="mt-3 font-serif text-xl">Sculpt & Shine</h3>
            <p className="mt-2 text-sm text-[#7C6660] leading-relaxed">
              Bespoke cuts, color, and restorative treatments.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs text-[#7C6660]">Starting from $70</span>
              <Link
                href="/services"
                className="text-sm text-[#9C4A5E] hover:underline underline-offset-4"
              >
                View →
              </Link>
            </div>
          </div>

          {/* Card 2 (highlight) */}
          <div className="group rounded-3xl border border-[#9C4A5E]/25 bg-gradient-to-b from-[#9C4A5E]/12 to-white/40 p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#9C4A5E]/10">
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#7C6660]">
              Glass Spa
            </p>
            <h3 className="mt-3 font-serif text-xl">Ritual Facials</h3>
            <p className="mt-2 text-sm text-[#7C6660] leading-relaxed">
              Ethereal rituals using botanical infusions.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs text-[#7C6660]">Starting from $50</span>
              <Link
                href="/services"
                className="text-sm text-[#9C4A5E] hover:underline underline-offset-4"
              >
                View →
              </Link>
            </div>
          </div>

          {/* Card 3 (mini booking UI look) */}
          <div className="rounded-3xl border border-black/10 bg-white/65 p-7 shadow-sm backdrop-blur">
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#7C6660]">
              Schedule
            </p>
            <h3 className="mt-3 font-serif text-xl">Select a date</h3>

            <div className="mt-5 grid grid-cols-4 gap-2 text-center text-xs">
              {["14", "15", "16", "17"].map((d) => (
                <div
                  key={d}
                  className="rounded-2xl border border-black/10 bg-white/80 py-3 text-[#201A17] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              {["09:00", "11:30", "04:30", "07:00"].map((t) => (
                <div
                  key={t}
                  className={`rounded-2xl border border-black/10 py-3 text-center transition ${
                    t === "11:30"
                      ? "bg-[#201A17] text-[#F7F1EE]"
                      : "bg-white/80 text-[#201A17]"
                  }`}
                >
                  {t}
                </div>
              ))}
            </div>

            <Link
              href="/booking"
              className="mt-5 block rounded-full bg-[#201A17] py-3 text-center text-[10px] font-semibold uppercase tracking-[0.45em] text-[#F7F1EE]
                         hover:bg-[#9C4A5E] transition shadow-md shadow-black/10"
            >
              Confirm appointment
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#9C4A5E]">
              Gallery
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              The Gallery of Light
            </h2>
            <p className="mt-3 max-w-xl text-sm text-[#7C6660]">
              A curation of our latest masterpieces. Each look is a dialogue
              between form and light.
            </p>
          </div>

          <Link
            href="/preview"
            className="hidden sm:inline-flex text-xs uppercase tracking-[0.45em] text-[#7C6660] hover:text-[#9C4A5E]"
          >
            View full lookbook →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl shadow-sm">
            <Image
              src="/gallery/1.jpg"
              alt="Gallery 1"
              width={900}
              height={900}
              className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
            />
          </div>

          <div className="overflow-hidden rounded-3xl shadow-sm">
            <Image
              src="/gallery/2.jpg"
              alt="Gallery 2"
              width={600}
              height={600}
              className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
            />
          </div>

          <div className="overflow-hidden rounded-3xl shadow-sm">
            <Image
              src="/gallery/3.jpg"
              alt="Gallery 3"
              width={600}
              height={600}
              className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
            />
          </div>

          <div className="col-span-2 overflow-hidden rounded-3xl shadow-sm">
            <Image
              src="/gallery/4.jpg"
              alt="Gallery 4"
              width={900}
              height={600}
              className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>

        <Link
          href="/preview"
          className="mt-8 inline-flex sm:hidden text-xs uppercase tracking-[0.45em] text-[#7C6660] hover:text-[#9C4A5E]"
        >
          View full lookbook →
        </Link>
      </section>
    </div>
  );
}