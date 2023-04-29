/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        h1: ['56px', { fontWeight: '700', lineHeight: '1.5' }],
        top2: ['20px', { fontWeight: '700', lineHeight: '1.5' }],
        top3: ['16px', { fontWeight: '400', lineHeight: '1.5' }],
        detail2: ['16px', { fontWeight: '700', lineHeight: '1.5' }],
        detail2: ['14px', { fontWeight: '400', lineHeight: '1.5' }],
      },
      colors: {
        black: '#000',
        white: '#E1E1E1',
        purple: '#4E01F0',
        pink: '#FF00B7',
      },
      backgroundColor: {
        base: {
          black: '#000',
          white: '#E1E1E1',
          purple: '#4E01F0',
          pink: '#FF00B7',
          mask: 'rgba(0, 0, 0, 0.4)',
        },
      },
      textColor: {
        base: {
          white: '#FFF',
        },
      },
      borderRadius: {
        30: '30px',
      },
      borderColor: (theme) => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      }),
      borderStyle: {
        solid: 'solid',
      },
      borderImage: (theme) => ({
        gradation: `linear-gradient(to bottom, ${theme(
          'colors.purple'
        )}, ${theme('colors.pink')})`,
      }),
    },
  },
  plugins: [],
};
