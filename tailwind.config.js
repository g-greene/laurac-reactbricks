const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/routes/**/*.{ts,tsx,js}',
    './app/components/**/*.{ts,tsx,js}',
    './app/react-bricks/**/*.{ts,tsx,js}',
    './app/root.tsx',
    './build/*.{ts,tsx,js}',
    './build/_shared/*.{ts,tsx,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: '600px',
        lg: '900px',
        xl: '1200px',
      },
      boxShadow: {
        newsLetter:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1) , 0 5px 15px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
