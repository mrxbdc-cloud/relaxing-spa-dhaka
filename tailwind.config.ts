import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--bg-primary, #0B0B0B)",
        bgSecondary: "var(--bg-secondary, #151515)",
        bgTertiary: "var(--bg-tertiary, #1C1C1C)",
        accentGold: "var(--accent, #C9A45C)",
        accentHover: "var(--accent-hover, #E2C889)",
        accentDark: "var(--accent-dark, #8C6E2E)",
        textPrimary: "var(--text-primary, #F5F1E8)",
        textSecondary: "var(--text-secondary, #A8A8A8)",
        borderGold: "var(--border-color, rgba(201, 164, 92, 0.2))",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A45C 0%, #E2C889 50%, #9E7933 100%)",
        "radial-overlay": "radial-gradient(circle at center, rgba(201,164,92,0.08) 0%, rgba(11,11,11,0.95) 70%)",
      },
      animation: {
        "slow-zoom": "slowZoom 25s ease-in-out infinite alternate",
        "pulse-gold": "pulseGold 3s infinite",
      },
      keyframes: {
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.03)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
