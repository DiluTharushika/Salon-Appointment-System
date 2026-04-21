import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-rose-100 selection:text-rose-900"
      style={{ 
        background: "var(--cream)", 
        color: "var(--ink)",
        // This ensures the font rendering is high-quality (professional look)
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
      }}
    >
      {/* The Header is sticky, so it sits on top of the layout */}
      <Header />

      {/* 
          flex-1: Pushes footer to the bottom if content is short.
          w-full: Allows hero images to span the whole screen.
          page-enter: Hook for your CSS animations.
      */}
      <main className="flex-1 w-full flex flex-col page-enter">
        {children}
      </main>

      <Footer />
    </div>
  );
}