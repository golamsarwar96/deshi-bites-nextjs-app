/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('/bg1.png')",
        bg2: "url('/b4.png')",
      },
      colors: {
        bgColor: "#FFF5E1",
        primaryColor: "#E63946",
        secondaryColor: "#FFC107",
        accentColor: "#4f006f",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  darkMode: "class",
  plugins: [daisyui],
};
