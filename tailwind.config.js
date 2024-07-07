/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      xs: { min: '478px' },
      sm: { min: '768px' },
      md: { min: '992px' },
      lg: { min: '1440px' },
      "2xl": { min: '1920px' }
    },

    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans'],
      },

      backgroundImage: {
        mainBg: 'linear-gradient(252.91deg, #E3E7F6 3.68%, rgba(227, 231, 246, 0) 97.82%)',
        secondBG: 'linear-gradient(335.73deg, #E3E7F6 12.46%, rgba(227, 231, 246, 0) 84.19%)',
        btnPrev: 'url(../assets/icons/slider/prev.svg)',
        btnNext: 'url(../assets/icons/slider/next.svg)',
      },

      colors: {
        mainColor: '#1A2578',
        secondColor: '#BF0830'
      },

      boxShadow: {
        sliderShadow: 'box-shadow: 0px 25px 35px 0px #1617480D'
      }
    },
  },
  plugins: [],
}

