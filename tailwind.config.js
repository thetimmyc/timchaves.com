const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1140px',
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      // serif: ['Merriweather', 'serif'],
    },
    extend: {
      fontSize: {
        xl: ['1.25rem', '2rem'],
        '3xl': ['2rem', '2.55rem'],
      },
      letterSpacing: {
        wide: '0.005em',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'background-1': {
          light: '#ffffff',
          DEFAULT: '#ffffff',
          dark: '#2E303C',
        },
        'background-2': {
          light: '#ECECF1',
          DEFAULT: '#ECECF1',
          dark: '#393B48',
        },
        'background-3': {
          light: '#E1E1E9',
          DEFAULT: '#E1E1E9',
          dark: '#4C4C54',
        },
        'background-4': {
          light: '#CDCDD6',
          DEFAULT: '#CDCDD6',
          dark: '#515362',
        },
        'foreground-1': {
          light: '#292D36',
          DEFAULT: '#292D36',
          dark: '#FFFFFF',
        },
        'foreground-2': {
          light: '#4B5160',
          DEFAULT: '#4B5160',
          dark: '#D3D3DA',
        },
        'foreground-3': {
          light: '#828793',
          DEFAULT: '#828793',
          dark: '#ADADB6',
        },
        'foreground-4': {
          light: '#ABB0BD',
          DEFAULT: '#ABB0BD',
          dark: '#8C8C98',
        },
        'teal-1': {
          light: '#028B9E',
          DEFAULT: '#028B9E',
          dark: '#028B9E',
        },
        'teal-2': {
          light: '#007F91',
          DEFAULT: '#007F91',
          dark: '#007F91',
        },
        'teal-3': {
          light: '#007485',
          DEFAULT: '#007485',
          dark: '#007485',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
