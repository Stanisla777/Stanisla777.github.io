
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

    //var header = $('header');
    //$(window).on('scroll', function(e){
    //    header.css('top', $(this).scrollTop());
    //});

    $(".tabs_menu li").click(function () {
        if (!$(this).hasClass("active")) {
            var i = $(this).index();
            $(".tabs_menu li.active").removeClass("active");
            $(".tabs .active").hide().removeClass("active");
            $(this).addClass("active");
            $($(".tabs").children(".info")[i]).fadeIn(1000).addClass("active");
        }
    });

    //$(document).ready( function() {
    //    $(".file-upload input[type=file]").change(function(){
    //        var filename = $(this).val().replace(/.*\\/, "");
    //        $("#filename").val(filename);
    //    });
    //});


    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                //var t = $('.upload-file-container').clone(true);
                //$(t).appendTo('.wrapper-add-foto')
                $('#image').attr('src', e.target.result);

            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInput").change(function(){
        readURL(this);
    });





});


