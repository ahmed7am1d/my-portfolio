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
        primaryColorDark: "rgb(36, 36, 36)",
        primaryColorGold: "#F7AB0B",
        lightCirclesColor:"#333333",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
