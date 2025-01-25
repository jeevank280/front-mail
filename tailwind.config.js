import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ".'./node_modules/preline/preline.js'",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui(), require("preline/plugin")],
};
