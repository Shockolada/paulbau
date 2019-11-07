$(document).ready(function () {
  $('.menu__toggle').click(function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
  });


  // SLIDERS

  var heroSlider = new Swiper('.hero-slider', {
    init: false,
    speed: 600,
    slidesPerView: 1,
    // loop: true,
    autoplay: {
      delay: 5000
    },
    navigation: {
      nextEl: '.hero-slider__btn-next',
      prevEl: '.hero-slider__btn-prev',
    },
  });

  
  var heroSlidesAll = $('.hero-slider__slide');
  var heroSlidePrev = heroSlidesAll.last();
  var heroSlideNext = heroSlidesAll.eq(1);
  var heroSlideNextImg = heroSlideNext.css('background-image');
  var heroSlidePrevImg = heroSlidePrev.css('background-image');
  var heroSliderBtnNext = $('.hero-slider__btn-next .hero-slider__preview');
  var heroSliderBtnPrev = $('.hero-slider__btn-prev .hero-slider__preview');

  heroSliderBtnNext.css('background-image', heroSlideNextImg);
  heroSliderBtnPrev.css('background-image', heroSlidePrevImg);

  heroSlider.init();

  heroSlider.on("slideChange", function () {
    setTimeout(function () {
      heroSlidePrev = $('.swiper-slide-prev');
      heroSlideNext = $('.swiper-slide-next');
      heroSlideNextImg = heroSlideNext.css('background-image');
      heroSlidePrevImg = heroSlidePrev.css('background-image');
      heroSliderBtnNext.css('background-image', heroSlideNextImg);
      heroSliderBtnPrev.css('background-image', heroSlidePrevImg);
    }, 50)
  });

  var aboutSlider = new Swiper('.about-slider', {
    init: false,
    speed: 600,
    parallax: true,
    slidesPerView: 1,
    // loop: true,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var slideCounterCurrent = $('.slider-counter__current');
  var slideCounterAll = $('.slider-counter__all');

  var slideAllEl = ($('.about-slider .swiper-wrapper .swiper-slide')).length;


  slideCounterAll.text(slideAllEl);

  aboutSlider.init();

  aboutSlider.on('slideChange', function () {
    setTimeout(function () {
      var slideCurrentEl = (($('.about-slider .swiper-wrapper .swiper-slide-active')).index() + 1);
      slideCounterCurrent.text(slideCurrentEl);
    }, 50)
  });

  $('[data-fancybox="gallery"]').fancybox({
    transitionEffect: "slide",
    // animationEffect: "zoom",
  });

});