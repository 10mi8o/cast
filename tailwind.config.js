module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*/.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkgrey: '#222831',
        midgray: '#5a5a5a',
      },
    },
  },
  variants: {
    extend: {
      // backgroundColor: ['dark'],
    },
  },
  plugins: [],
};
