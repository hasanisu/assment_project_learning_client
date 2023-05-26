/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

