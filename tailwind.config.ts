import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FBF9F4",
          soft: "#F5F1E8",
        },
        ink: {
          900: "#1B1712",
          700: "#2E2618",
          600: "#574B3A",
          400: "#8A7A63",
        },
        gold: {
          100: "#F6EDD6",
          200: "#EDE0C4",
          300: "#DEC58C",
          500: "#C6A15B",
          600: "#AC8843",
          700: "#8B6B31",
          900: "#5C4620",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(28, 22, 12, 0.18)",
        card: "0 4px 24px -6px rgba(28, 22, 12, 0.12)",
        gold: "0 0 0 1px rgba(198, 161, 91, 0.35), 0 12px 32px -10px rgba(198, 161, 91, 0.45)",
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(circle at 50% 0%, rgba(198,161,91,0.16), transparent 60%)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        flicker: "flicker 3.5s ease-in-out infinite",
        bounceSlow: "bounceSlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
