/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 'class' oder 'media', 'class' ist hier empfohlen
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "medium-gray":"#888EB0",
        "bright-gray":"#DFE3FA",
        "navy": "#252945",
        "light-bg": "#F8F8FB",
        "dark-bg": "#141625"
      }
    },
  },
  plugins: [],
}
