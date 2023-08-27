/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
const config = {
  purge: {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    safelist: [],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        blue: {
          100: "#f3f9fd",
          200: "#e5f3fa",
          300: "#cceafa",
          400: "#99d6f6",
          500: "#66c1f1", // Primary blue that Microsoft often uses
          600: "#59aecd",
          700: "#4a8aa8",
          800: "#3c6784",
          900: "#2d4469",
        },
        // Add other Microsoft colors as needed
      },
      fontFamily: {
        sans: ["Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        "ms-soft":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        // This is a softer box-shadow reminiscent of Fluent's soft UI.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default config;
