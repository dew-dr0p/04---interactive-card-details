/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      red: "#FF5252",
      darkViolet: "#21092F",
      grayishViolet: {
        light: "#DEDDDF",
        dark: "#8E8593"
      },
      gradient: {
        a: "#6448FE",
        b: "#600594"
      }
    },
    extend: {},
  },
  plugins: [],
}