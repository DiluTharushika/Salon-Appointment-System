import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F7F1EE] text-[#201A17]">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
      <Footer />
    </div>
  );
}