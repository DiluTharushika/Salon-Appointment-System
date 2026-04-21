import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "The Atelier — Aura Glass Studio",
    template: "%s | The Atelier",
  },
  description:
    "Experience a sanctuary of bespoke beauty at The Atelier — Aura Glass Studio. Curated hair, skin, nail, and wellness rituals crafted for your unique aura.",
  keywords: [
    "luxury salon",
    "beauty studio",
    "hair artistry",
    "skin rituals",
    "nail studio",
    "wellness",
    "atelier",
  ],
  openGraph: {
    title: "The Atelier — Aura Glass Studio",
    description:
      "A sanctuary of bespoke beauty. Where light meets pure serenity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body
        className="min-h-screen antialiased"
        style={{
          background: "var(--cream)",
          color: "var(--ink)",
          fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}