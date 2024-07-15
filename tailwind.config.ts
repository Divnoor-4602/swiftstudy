import type { Config } from "tailwindcss";

const config: Config = {
  daisyui: {
    themes: ["coffee"],
    base: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        open: ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
