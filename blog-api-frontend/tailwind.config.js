/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'navblack': '#0b0c10',
      'coalblack': '#1f2833',
      'textsilver': '#c5c6c7',
      'lightishgreen': '#66fcf1',
      'darkishgreen': '#45a29e',
    },
  },
  plugins: [],
}