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
        navy: "#000321",
        sage: "#596654",
        burnt: "#933A16",
        formBorder: "#ACACAC",
        formLabel: "#2c3345",
        formPlaceholder: "#8c8c8c",
        footerGray: "#cbd5e0",
        linkBlue: "#188bf6",
      },
      fontFamily: {
        headline: ['"Darker Grotesque"', 'sans-serif'],
        content: ['"Manrope"', 'sans-serif'],
        form: ['"Inter"', 'sans-serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
