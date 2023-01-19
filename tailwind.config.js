/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*{html, js}'],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('./public/img/san-francisco.jpg')",
        'sanFranciscoDesktop': "url('./public/img/san-francisco-desktop.jpg')",
        'yosemite': "url('./public/img/yosemite.jpg')",
        'LA': "url('./public/img/la.jpg')",
        'seattle': "url('./public/img/seattle.jpg')",
        'newYork': "url('./public/img/new-york.jpg')",
        'norway': "url('./public/img/norway.jpg')",
        'sydney': "url('./public/img/sydney.jpg')",
        'miami': "url('./public/img/miami.jpg')",
        'switzerland': "url('./public/img/switzerland.jpg')",
        'bali': "url('./public/img/bali.jpg')",
        'chicago': "url'.…public//img/chicago.jpg')",
        'europe': "url('./public/img/europe.jpg')",
        'iceland': "url('./public/img/iceland.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif',]
      }
    },
  },
  plugins: [],
}
