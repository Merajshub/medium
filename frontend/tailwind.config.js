/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        zentry:['zentry','sans-serif']
      },
      colors:{
        orangeneo: '#F45203'
      }
    },
  },
  plugins: [],
}