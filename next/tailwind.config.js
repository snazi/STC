const num = [1, 2, 3, 4, 5, 6, 8, 10, 12]
const whitelist = []
num.map((x) => {
  whitelist.push('translate-x-' + x)
  whitelist.push('-translate-x-' + x)
  whitelist.push('translate-y-' + x)
  whitelist.push('-translate-y-' + x)
})


module.exports = {
  purge: [],
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
