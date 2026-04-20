import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F7F1EE] text-[#201A17]">
      <Header />

      {/* Consistent modern spacing + centered content */}
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {children}
      </main>

      <Footer />
    </div>
  );
}