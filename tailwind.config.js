/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1a202c',
            h1: {
              color: '#1a202c',
              fontWeight: '800',
            },
            h2: {
              color: '#1a202c',
              fontWeight: '700',
            },
            h3: {
              color: '#1a202c',
              fontWeight: '600',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              color: '#1a202c',
              backgroundColor: '#f7fafc',
              padding: '0.25rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '600',
            },
            pre: {
              backgroundColor: '#f7fafc',
              color: '#1a202c',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
            },
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
        dark: {
          css: {
            color: '#e2e8f0',
            h1: {
              color: '#f7fafc',
            },
            h2: {
              color: '#f7fafc',
            },
            h3: {
              color: '#f7fafc',
            },
            code: {
              color: '#f7fafc',
              backgroundColor: '#2d3748',
            },
            pre: {
              backgroundColor: '#2d3748',
              color: '#f7fafc',
            },
            a: {
              color: '#63b3ed',
              '&:hover': {
                color: '#90cdf4',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}