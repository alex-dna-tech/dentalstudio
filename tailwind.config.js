/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html"],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
