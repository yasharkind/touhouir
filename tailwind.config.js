/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff88aa",
          light: "#ffb6c1",
          dark: "#cc6a88",
        },
        touhou: "#e83e8c", // custom name
      },
    },
  },
  plugins: [
    require(['flowbite/plugin'])
  ],
}

