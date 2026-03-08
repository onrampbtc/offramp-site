import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        "bg-card": "#111111",
        "bg-card-hover": "#1A1A1A",
        gold: {
          50: "#FFF9E6",
          100: "#FFF0BF",
          200: "#FFE699",
          300: "#FFDB66",
          400: "#D4AF37",
          500: "#C9A84C",
          600: "#B8941F",
          700: "#997A1A",
          800: "#6B5512",
          900: "#3D310B",
        },
        cream: "#F5F0E8",
        "cream-60": "rgba(245, 240, 232, 0.6)",
        "cream-45": "rgba(245, 240, 232, 0.45)",
        "cream-35": "rgba(245, 240, 232, 0.35)",
        "cream-25": "rgba(245, 240, 232, 0.25)",
        "cream-15": "rgba(245, 240, 232, 0.15)",
        "cream-08": "rgba(245, 240, 232, 0.08)",
        score: {
          green: "#22c55e",
          lime: "#84cc16",
          yellow: "#eab308",
          orange: "#f97316",
          red: "#ef4444",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-sora)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "gold-shimmer": "goldShimmer 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "count-up": "countUp 1.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        goldShimmer: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #D4AF37 50%, #B8941F 100%)",
        "gold-gradient-text": "linear-gradient(90deg, #C9A84C, #F5E6A3, #C9A84C)",
        "dark-gradient": "linear-gradient(180deg, #0A0A0A 0%, #111111 100%)",
        "hero-radial": "radial-gradient(ellipse at center top, rgba(201, 168, 76, 0.08) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
