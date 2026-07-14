import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050816",
          secondary: "#0B1120",
          card: "#111827",
        },
        accent: {
          primary: "#8B5CF6",
          secondary: "#3B82F6",
          highlight: "#22D3EE",
        },
        state: {
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#CBD5E1",
          muted: "#94A3B8",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          hover: "rgba(139,92,246,0.5)",
        },
        glass: "rgba(255,255,255,0.05)",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        content: "1400px",
      },
      borderRadius: {
        btn: "12px",
        card: "20px",
        img: "24px",
      },
      spacing: {
        18: "72px",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(30px,-20px) scale(1.05)" },
        },
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(139,92,246,0.5)" },
          "50%": { boxShadow: "0 0 0 12px rgba(139,92,246,0)" },
        },
      },
      animation: {
        aurora: "aurora 12s ease-in-out infinite",
        floatY: "floatY 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
