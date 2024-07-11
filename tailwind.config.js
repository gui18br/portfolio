/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        primary: "#914D1E",
        seconday: "#2A211D",
        300: "#E9E0D9",
        semiTransparent: "#a6552654",
      },
    },
  },
  plugins: [],
};
