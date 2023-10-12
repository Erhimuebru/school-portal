/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.8rem',
        'xs': '0.8rem' 
      },
    },
  },
  plugins: [],
}