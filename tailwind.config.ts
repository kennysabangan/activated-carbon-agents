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
        primary: {
          DEFAULT: "#1B5E20",
          light: "#2E7D32",
          dark: "#0D3B12",
        },
        charcoal: {
          DEFAULT: "#333333",
          light: "#4a4a4a",
          dark: "#1a1a1a",
        },
        gold: {
          DEFAULT: "#C8A951",
          dark: "#B8860B",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
