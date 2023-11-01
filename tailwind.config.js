/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@heroicons/react/20/solid')
  ],
}