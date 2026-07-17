/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.source.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17221c',
        forest: '#075d3b',
        moss: '#2f784e',
        sage: '#dcebdc',
        ivory: '#f8f5ee',
        stone: '#ece8df',
        amber: '#e98d25',
        coral: '#d95847',
        sky: '#dcecf7',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(24, 50, 35, 0.10)',
        phone: '0 45px 110px rgba(27, 39, 31, 0.22)',
      },
    },
  },
  plugins: [],
}
