const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    1200: {
        slidesPerView: 4
    },

    992: {
      slidesPerView: 3
    },

    768: {
      slidesPerView: 2
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});