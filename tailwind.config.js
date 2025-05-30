// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2%',
    },
    extend: {
      colors: {
        primary: '#00bbff',
        accent: '#ffa807',
      },
      scrollSnapType: { y: 'y mandatory' },
      scrollSnapAlign: { start: 'start' },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scroll-snap-y': { 'scroll-snap-type': 'y mandatory' },
        '.snap-start':    { 'scroll-snap-align': 'start' },
      });
    },
  ],
};
