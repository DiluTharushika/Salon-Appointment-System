import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F7F1EE]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <Link href="/" className="font-serif text-xl tracking-wide text-[#201A17]">
          The Atelier
        </Link>

        {/* Links */}
        <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] text-[#7C6660] md:flex">
          <Link href="/services" className="hover:text-[#9C4A5E]">
            Discover
          </Link>
          <Link href="/booking" className="hover:text-[#9C4A5E]">
            Bookings
          </Link>
          <Link href="/preview" className="hover:text-[#9C4A5E]">
            Preview
          </Link>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/booking"
            className="rounded-full bg-[#9C4A5E] px-4 py-2 text-xs font-medium text-white hover:bg-[#8a3f52]"
          >
            Book now
          </Link>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className="mx-auto block max-w-6xl px-4 pb-3 md:hidden">
        <div className="flex gap-4 text-xs uppercase tracking-[0.2em] text-[#7C6660]">
          <Link href="/services" className="hover:text-[#9C4A5E]">
            Discover
          </Link>
          <Link href="/booking" className="hover:text-[#9C4A5E]">
            Bookings
          </Link>
          <Link href="/preview" className="hover:text-[#9C4A5E]">
            Preview
          </Link>
        </div>
      </div>
    </header>
  );
}