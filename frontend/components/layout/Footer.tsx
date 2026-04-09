export function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-[#F7F1EE]">
      <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-[#7C6660]">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} The Atelier. All rights reserved.</p>
          <p className="tracking-[0.15em] uppercase">Curated Beauty • Modern Rituals</p>
        </div>
      </div>
    </footer>
  );
}