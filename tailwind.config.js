module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: theme => ({ 
        "customWidth": "19.4rem",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
