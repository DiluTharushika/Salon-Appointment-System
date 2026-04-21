/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:      "#FAF7F4",
        parchment:  "#EDE3D8",
        ink:        "#1C1410",
        "ink-soft": "#2E2420",
        rose:       "#9C4A5E",
        "rose-deep":"#7A3448",
        "rose-light":"#C47080",
        gold:       "#C9A96E",
        "gold-light":"#E8D5A8",
        "gold-dim": "#9A7A4A",
        muted:      "#8A7068",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "ui-serif", "Georgia", "serif"],
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        silk:   "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.96)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        goldPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,169,110,0)" },
          "50%":      { boxShadow: "0 0 0 8px rgba(201,169,110,0.12)" },
        },
      },
      animation: {
        "fade-up":    "fadeUp 0.65s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "fade-in":    "fadeIn 0.55s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "scale-in":   "scaleIn 0.55s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "float":      "floatY 4s ease-in-out infinite",
        "gold-pulse": "goldPulse 2.4s ease-in-out infinite",
        "shimmer":    "shimmer 4s linear infinite",
      },
      boxShadow: {
        soft:  "0 4px 32px rgba(28,20,16,0.08)",
        card:  "0 8px 40px rgba(28,20,16,0.12)",
        rose:  "0 16px 48px rgba(156,74,94,0.18)",
        gold:  "0 8px 32px rgba(201,169,110,0.20)",
      },
    },
  },
  plugins: [],
};