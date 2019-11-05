$(document).ready(function () {
  $('.menu__toggle').click(function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
  });


  // SLIDERS
  var heroSlider = new Swiper('.hero-slider', {
    // speed: 600,
    slidesPerView: 1,
    autoplay: {
      // delay: 5000
    },
    navigation: {
      nextEl: '.hero-slider__btn-next',
      prevEl: '.hero-slider__btn-prev',
    },
  });
});