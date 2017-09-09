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
        centerPadding: '30px',
        focusOnSelect: true,
        arrows: false
    });

    var header = $('header');
    $(window).on('scroll', function(e){
        header.css('top', $(this).scrollTop());
    });

    $(".tabs_menu li").click(function () {
        if (!$(this).hasClass("active")) {
            var i = $(this).index();
            $(".tabs_menu li.active").removeClass("active");
            $(".tabs .active").hide().removeClass("active");
            $(this).addClass("active");
            $($(".tabs").children(".info")[i]).fadeIn(1000).addClass("active");
        }
    });



});


