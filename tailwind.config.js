const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Build your palette here
        transparent: 'transparent',
        current: 'currentColor',
        cyan: colors.cyan,
        blueGray: colors.blueGray,
        teal: colors.teal,
        primaryText: '#00494d',
      },
      fontFamily: {
        'spaceMono': ["Space Mono"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
