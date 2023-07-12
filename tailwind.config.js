/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColorDark: "#121212",
        primaryColorBlue: "#9754CB",
        lightCirclesColor:"#333333",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
