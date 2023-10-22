import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;