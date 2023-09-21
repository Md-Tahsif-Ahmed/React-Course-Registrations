/** @type {import('tailwindcss').Config} */
const daisyUI = require('daisyui');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyUI],
}



