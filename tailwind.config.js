/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Overpass','sans serif'],
        'mono': ['Overpass', 'sans-serif'],
      },
      spacing: {
        '3px': '60px',
        '4px': '80px',
        '5px': '100px',
      },
    },
  },
  plugins: [],
}

