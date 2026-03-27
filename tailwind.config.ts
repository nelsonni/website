import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Lora", "Georgia", "serif"],
        mono: ['"DM Mono"', '"Courier New"', "monospace"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#1a1814",
          muted: "#5a5650",
          faint: "#9a958f",
        },
        paper: {
          DEFAULT: "#f8f5f0",
          subtle: "#f0ece5",
        },
        rule: "#ddd8d0",
        accent: {
          DEFAULT: "#b85c2c",
          light: "#e8d0c0",
        },
        brand: {
          DEFAULT: "#2d5a8e",
          light: "#dde8f5",
        },
        scholar: {
          DEFAULT: "#e8f0e8",
          text: "#3a6b3a",
          border: "#c8dfc8",
        },
      },
      fontSize: {
        "2xs": ["0.67rem", { lineHeight: "1.4" }],
        "xs+": ["0.76rem", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
