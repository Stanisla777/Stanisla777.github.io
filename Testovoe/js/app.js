

$(document).ready(function ($) {
    $('.wrapper-slider-reviews .owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        // center: true,
        nav: true,
        navText: ['', ''],
        mouseDrag: true,
        touchDrag: true,
    });

    let img = './img/VideoFon.jpg'
    let video = './img/video.mp4'

    function  videoPlay(elem){
        $(elem).vide(video,{
            autoplay: true
        })
    }
    $('.section-video').on('click', function () {
        $(this).css('backgroundImage', 'none').find('.section-video__button').hide()
        videoPlay($(this))
    })

    /*Меню*/

    $('.wrap-media-menu').on('click',function(){//Открываю модально окно по клику

        $('.header-navigation').css('display','flex');
        $('#lean_overlay').show();//фон затемнение
    });


    $('#lean_overlay').on('click', function (e) {//Закрываю модальное окно по клику рабочей области
        $("#lean_overlay").hide();
        $(".header-navigation").hide();

    }).on('click', '.header-navigation__list', function (e) {//Запрещаю закрывать окно по клику на само молдальное окно
        e.stopPropagation();

    });

    /*Цвет иконки*/

    $(document).ready(function(){
        let $element = $('.section-slider-reviews');
        let counter = 0;
        $(window).scroll(function() {
            let scroll = $(window).scrollTop();
            //Если скролл до конца елемента
            //let offset = $element.offset().top + $element.height();
            //Если скролл до начала елемента
            let offset = $element.offset().top

            if (scroll > offset) {
                $('.icon-media-menu i').css('color',"#fff")
                counter = 1;
            }
            else {
                $('.icon-media-menu i').css('color',"#000")
            }
        });
    });

});


