/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        primary: "#85502E",
        seconday: "#2A211D",
        300: "#E9E0D9",
        semiTransparent: "#854f2e38",
      },
    },
  },
  plugins: [],
};
