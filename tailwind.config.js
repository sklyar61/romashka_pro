/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00bbff',
        accent: '#ffa807'
      }
    }
  },
  plugins: []
};