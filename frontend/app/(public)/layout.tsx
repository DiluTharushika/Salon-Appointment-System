import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--cream)", color: "var(--ink)" }}
    >
      <Header />

      {/* Pages that need full-bleed layouts (hero sections) get their own padding.
          Pages like booking/preview that need a contained wrapper use max-w inside. */}
      <main className="flex-1 w-full page-enter">
        {children}
      </main>

      <Footer />
    </div>
  );
}