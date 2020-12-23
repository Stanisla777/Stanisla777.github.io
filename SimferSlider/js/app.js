"use strict";

$(document).ready(function () {
  $('.main-page-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.wrap-slider-dots'
  });
  $('.wrap-slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.main-page-slider',
    dots: false,
    arrows: false,
    // centerMode: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }]
  });

  function remClass() {
    $('.main-page-slider__item.slick-active').find('.slide__banner__text-wrap').removeClass('animate__backInLeft');
  }

  function hideImg(ind) {
    $('.main-page-slider__item').eq(ind).find('.thumb-wrap img').hide();
  }

  $('.main-page-slider').on('afterChange', function (event, slick, currentSlide) {
    console.log(currentSlide);
    $('.slide__banner').find('.slide__banner__text-wrap').addClass('opacity_0');
    $('.main-page-slider__item.slick-active').find('.slide__banner__text-wrap').addClass('animate__backInLeft').removeClass('opacity_0');
    setTimeout(remClass, 1000);
    var src = '';

    if ($('.main-page-slider__item').eq(currentSlide).hasClass('slide__video')) {
      src = $('.main-page-slider__item').eq(currentSlide).find('iframe').attr('src');
      $('.main-page-slider__item').eq(currentSlide).find('iframe').attr('src', src + '?autoplay=1');
      setTimeout(hideImg, 1300, currentSlide);
    } else {
      var _src = $('.slide__video iframe').attr('src');

      _src = _src.replace(/\?autoplay=1/g, '');
      $('.slide__video iframe').attr('src', _src);
      $('.main-page-slider__item').find('.thumb-wrap img').show();
    }
  });
});