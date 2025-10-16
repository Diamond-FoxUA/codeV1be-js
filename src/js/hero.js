const swiper = new Swiper('.hero-swiper', {
  loop: true,
  speed: 400,
  slidesPerView: 1,
  keyboard: {
    enabled: true,   
  },
  wrapperClass: 'hero-swiper-wrapper',
  slideClass: 'hero-slide',
  navigation: {
    nextEl: '.hero-right-btn',
    prevEl: '.hero-left-btn',
  }
});
