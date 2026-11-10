/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pesawaran: {
          primary: '#123B5D',
          secondary: '#1685B9',
          success: '#20A477',
          warning: '#E5A33A',
          danger: '#D94C4C',
          bg: '#F1F4F8',
          surface: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
