/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "medium-gray":"#888EB0",
        "bright-gray":"#DFE3FA"
      }
    },
  },
  plugins: [],
}