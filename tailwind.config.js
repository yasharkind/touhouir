const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ".flowbite-react/class-list.json"
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { max: '639px' }, 
      },
      colors: {
        primary: {
          DEFAULT: "#ff88aa",
          light: "#ffb6c1",
          dark: "#cc6a88",
        },
        touhou: "#e83e8c",
      },
    },
  },
  plugins: [require('flowbite/plugin'), flowbiteReact],
}