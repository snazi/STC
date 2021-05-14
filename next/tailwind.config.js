module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        'logo-max': '7rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
