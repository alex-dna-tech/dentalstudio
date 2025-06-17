/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f9f9f9',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#a3a3a3',
          400: '#7a7a7a',
          500: '#525252',
          600: '#3d3d3d',
          700: '#2e2e2e',
          800: '#1f1f1f',
          900: '#0f0f0f',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
