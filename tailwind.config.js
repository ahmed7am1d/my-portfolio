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
        primaryColorDark: "#1F2833",
        primaryColorBlue: "#66FCF1",
        lightCirclesColor:"#333333",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
