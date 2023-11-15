/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: { 
      gridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',
    },
    animation: {
            'text':'text 5s ease infinite',
        },
    keyframes: {
            'text': {
                '0%, 100%': {
                   'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                   'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
        }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@heroicons/react/20/solid')
  ],
}