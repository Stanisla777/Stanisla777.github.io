$(window).on('scroll', function () {


});
$(document).ready(function ($) {

    $('.type-job-slider').slick({
        slidesToShow: 1,
        dots: true,
        //variableWidth: true,/*именно благодаря этому кадров столько, сколько помещается на экране*/
        slidesToScroll: 1,
        infinite: true,
        cssEase: 'linear',
        speed:1000,
        centerMode: true,
        focusOnSelect: true,
        arrows: false
    })
});


