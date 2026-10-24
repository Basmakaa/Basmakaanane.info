import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#f4efe6",
          deep: "#e7dfd2",
        },
        ink: {
          DEFAULT: "#161311",
          soft: "#3f3a34",
        },
        muted: "#746c63",
        clay: {
          DEFAULT: "#c24d2c",
          deep: "#9a3518",
        },
        moss: "#1c3d32",
        night: "#12100e",
        line: "rgba(22, 19, 17, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: {
        page: "1440px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
