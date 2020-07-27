const slider = document.querySelector('.hotel-slider')
const mySwiper = new Swiper('.hotel-slider', {
  loop: true,

  navigation: {
    nextEl: '.hotel-slider__button_next',
    prevEl: '.hotel-slider__button_prev',
  },
  // autoplay: {
  //   delay: 2000
  // },
  keyboard: true,
  effect: 'coverflow',
  spaceBetween: 0

})

// остоновка и запуск autoplay при взаимодействии с мышкой
// slider.addEventListener('mouseover', () => mySwiper.autoplay.stop())
// slider.addEventListener('mouseout', () => mySwiper.autoplay.start())
