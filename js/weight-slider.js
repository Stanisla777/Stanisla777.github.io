$(function () {
  var min_size = $('.weight-slider').attr('data-min-size');
  min_size = parseInt(min_size);
  var max_size = $('.weight-slider').attr('data-max-size');
  max_size = parseInt(max_size);
  var step = $('.weight-slider').attr('data-step');
  step = parseInt(step);
  for(var i = min_size; i <= max_size; i += step){
    $('.weight-slider .swiper-wrapper').append('<div class="swiper-slide">'+ i +'</div>');
    console.log(i);
  }
  var swiper = new Swiper('.weight-slider', {
    initialSlide: 3,
    slidesPerView: 5,
    centeredSlides: true,
    direction:'horizontal'
  });
});