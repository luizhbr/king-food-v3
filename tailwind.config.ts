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
        cream: "#E2DDCF",
        ink: "#221D25",
        gold: "#FFD100",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "48px",
      },
      boxShadow: {
        soft: "0 12px 40px -16px rgba(34,29,37,0.18)",
        cta: "0 10px 28px -8px rgba(34,29,37,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
