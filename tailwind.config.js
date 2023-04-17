/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"

  ],
  theme: {
    extend: {
      colors: {
        whitishblue: "#E8EEF4",
        sharpblue: "#535bf2"
      }
    },
  },
  plugins: [],
}
