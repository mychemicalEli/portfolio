/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    colors: {
      primary: "oklch(0.2267 0.0152 286.18)",
      accent: {
        DEFAULT: "oklch(0.862 0.233 157.26)",
        hover: "oklch(0.8094 0.2166 158.69)",
      },
    },
    extend: {},
  },
  plugins: [],
};
