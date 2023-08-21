/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#0C0F13',
        },
        purple: {
          100: '#C1CEEB',
          200: '#B2C2E6',
          300: '#A3B6E1',
          400: '#93AADC',
          500: '#466EC3',
          600: '#466EC3',
          700: '#6586CD',
          800: '#567AC8',
          900: '#466ec3',
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        sulphur: ['var(--font-sulphur)', 'sans-serif'],
        'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif']
      },
      fontSize: {
        xs: '0.8rem',
        sm: '0.9rem',
        base: '1.0rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
        '4xl': '2.75rem',
        '5xl': '3.5rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '0em',
        tight: '0em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
