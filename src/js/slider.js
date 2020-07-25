const slider = document.querySelector('.swiper-container')
const mySwiper = new Swiper('.swiper-container', {
  loop: true,

  navigation: {
    nextEl: '.slider-button_next',
    prevEl: '.slider-button_prev',
  },
  // autoplay: {
  //   delay: 2000
  // },
  keyboard: true,
  effect: 'coverflow',
  spaceBetween: -50

})

// остоновка и запуск autoplay при взаимодействии с мышкой
// slider.addEventListener('mouseover', () => mySwiper.autoplay.stop())
// slider.addEventListener('mouseout', () => mySwiper.autoplay.start())
