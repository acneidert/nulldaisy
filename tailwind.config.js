const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './lib/components/**/*.njs',
    './lib/components/**/*.jsx',
    './lib/components/**/*.nts',
    './lib/components/**/*.tsx',
    './lib/components/**/*.ts',
    './src/**/*.njs',
    './src/**/*.jsx',
    './src/**/*.nts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {},
    fontFamily: {
      mono: [...defaultTheme.fontFamily.mono],
      roboto: ['Roboto', 'sans-serif'],
      'crete-round': ['Crete Round', 'sans-serif'],
    },
  },
  plugins: [require('daisyui')],
}
