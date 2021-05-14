module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        'logo-max': '7rem'
      },
      backgroundImage: theme => ({
        'bg1': src="/images/bg1.png",
        'bg2': src="/images/bg2.png",
        'bg3': src="/images/bg3.png",
        'bg4': src="/images/bg4.png",
      }),
      fontFamily: {
        'sans': ['QuartzoBold']
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
