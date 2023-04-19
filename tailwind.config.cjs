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
      backgroundColor: {
        base: {
          black: '#000',
          white: '#E1E1E1',
          gradation:
            'linear-gradient(180deg, #4E01F0 0%, rgba(96, 100, 251, 0) 100%)',
        },
      },
      textColor: {
        base: {
          white: '#FFF',
        },
      },
      borderColor: {
        base: {
          white: '#FFF',
          gradation: 'linear-gradient(180deg, #4E01F0 0%, #FF00B7 100%)',
        },
      },
    },
  },
  plugins: [],
};
