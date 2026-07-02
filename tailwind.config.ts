import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0D12",
          surface: "#14171F",
          raised: "#1B1F29",
          line: "#242938",
        },
        gold: {
          DEFAULT: "#C9A227",
          glow: "#E8C468",
          dim: "#8A6F2A",
        },
        paper: {
          DEFAULT: "#F5F3EE",
          muted: "#8A8F9C",
          faint: "#565B68",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-geist)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "aurora-gold":
          "radial-gradient(60% 50% at 50% 0%, rgba(201,162,39,0.18) 0%, rgba(201,162,39,0) 70%)",
        "grain": "url('/images/noise.png')",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "marquee": "marquee 28s linear infinite",
        "pulse-slow": "pulseSlow 3.5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.32em",
      },
    },
  },
  plugins: [],
};

export default config;
