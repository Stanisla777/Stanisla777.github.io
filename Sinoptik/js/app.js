$(document).ready(function ($) {

    /*Главная страница*/

    /*Отображение медиа-меню при клике*/

    function hide_menu() {
        $('.header__wrapper-logo-menu').hide()
    }

    $('.icon-media-menu').on('click', function () {
        if ($(this).hasClass('icon-media-menu_active')) {

            $('.header__wrapper-logo-menu').removeClass('zoomMenuUp').addClass('zoomMenudown');
            $('.body-wrapper').removeClass('zoomSectionUp').addClass('zoomSectiondown');
            $('.container-main-page').removeClass('zoomSectionUp').addClass('zoomSectiondown');
            setTimeout(hide_menu, 500);
            $(this).removeClass('icon-media-menu_active');
            $('.body-wrapper').fadeIn(800);
            $('.container-main-page').fadeIn(800);

        }
        else {
            $(this).addClass('icon-media-menu_active');
            $('.header__wrapper-logo-menu').show().removeClass('zoomMenudown').addClass('zoomMenuUp')
            $('.body-wrapper').removeClass('zoomSectiondown').addClass('zoomSectionUp');
            $('.container-main-page').removeClass('zoomSectiondown').addClass('zoomSectionUp');
            $('.body-wrapper').fadeOut(600);
            $('.container-main-page').fadeOut(600);
        }

    });
    $(".product-model-slider").on('changed.owl.carousel', function(event) {
        var colorEnum = $(event.target).find(".owl-stage").first().find(".owl-item").not(".owl-item  .owl-item").eq(event.item.index).find(".model-slider-item").data("hash");
        $(".wrapper-for-slider").find("li").removeClass("selected active-item")
        $(".wrapper-for-slider").find("li[data-color-id='#"+colorEnum+"']").addClass("selected active-item")
    })
    //формирую меню  /*Исправил*/


    function med_menu(index) {
        if (index >= 830) {

            $('.header__wrapper-logo-menu ').removeClass('zoomMenudown').css('display', 'flex');

            $('.header__menu-item').each(function () {
                let str = $(this).find('p').text();
                let arr = str.split('');
                let that = this;

                arr.forEach(function (item, i, arr) {
                    $(that).find("p").append('<span>' + item + '</span>')
                });

            });

        }
    }

    function res() {
        index = $(window).width();
        med_menu(index)
    }

    res();
    $(window).resize(function () {
        $('.header__menu-item p span').remove();
        e = $(window).width();
        med_menu(e)

    });

    /*Страница модели*/

    //        слайдер карусель


    let count_sliders = $("#model-slider li").length;
    if (count_sliders > 1) {

        animatedSlider();
    }
    else {
        $('.choose_slider_items li').css('display', 'block');
        $('#model-slider li:not(.current_item) .model-slider__list').css('opacity', 1);
        $('#btn_next1,#btn_prev1').hide();
    }

    function animatedSlider() {
        let count = $('.model-slider > li').length;
        $("#model-slider").AnimatedSlider({

            prevButton: "#btn_prev1",
            nextButton: "#btn_next1",
            visibleItems: 1,
            infiniteScroll: true,
            willChangeCallback: function (obj, item) {//выполнение чего-либо при загрузке слайда и перед ыполнением

            },
            changedCallback: function (obj, item) {//выполнение чего-либо при отработке слайда
            },
        });
    }

//        Чтобы слайд можно было листать мышкой, а не только нажатием на кнопки

    $(".wrapper-model-slider-img").swipe({
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            $('#btn_next1').click();
        }
    });
    $(".wrapper-model-slider-img").swipe({
        swipeRight: function (event, direction, distance, duration, fingerCount) {
            $('#btn_prev1').click();
        }
    });

//        Так как все li у нас имеют position:absolute, задаем высоту общего контейнера

    var current_item = $('.choose_slider_items li.current_item');
    var height_current_item;

    /*Высчтывает высоту слайдера только на странице модели*/
    function height_slider() {

        if($(".model-slider").length>0){
            var maxheight = 0;
            $('.model-slider li').each(function () {
                height = $(this).outerHeight();

                if (height > maxheight) {
                    maxheight = height

                }

            });
            $('#model-slider').css({
                'height':height +20
            });
        }



    }

    height_slider();

    /*Высота блока чтобы он всегда был прижат к низу страницы*/  /*Исправил*/

    function model_page_height(){
        let height_block = $(document).outerHeight(true);
        $('.model-page').css('height', height_block + 20);
    }
    model_page_height();


    $(window).resize(function () {
        model_page_height();
    });
    /*Слайдер для моделей с подстановкой каринки*/

    let attr_item = "";
    $('.model-slider__list_item').hover(
        function () {
            attr_item = $(this).attr('data-model');
            $('.wrapper-slider-man').find('.model-slider-man[data-model="' + attr_item + '"]').fadeIn(300);
        },
        function () {
            $('.wrapper-slider-man').find('.model-slider-man[data-model="' + attr_item + '"]').fadeOut(300);
            attr_item = "";
        });

    /*Карточка товара*/

    /*Открываю модальное окно*/
    function open_modal() {
        $('#before-load').show();
        $('#before-load').find('i').end().delay(600).fadeOut('slow');
        $('.container-models-modal').show();
        $("body").css("overflow-y", "hidden");
    }

    function close_open() {
        $('.container-models-modal,.container-size-modal').hide();
        $("body").css("overflow-y", "auto");
    }

    /*Закрыть окно*/
    $('.wrapper-models-modal__close').on('click', function () {
        massive_imj.length = 0;
        /*обнуляю массив с картинками*/
        close_open();
        $('.slider-models-fancy .owl-carousel').remove();
        $('.slider-models-fancy').append('<div class="owl-carousel"></div>');
        // t=destroy.owl.carousel

    });

    /*Вызов слайдера больших картинок для моделей на основной странице*/
    $('.owl-carousel-models').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        margin: 10,
        callbacks: true,
        URLhashListener: true,
        startPosition: 'URLHash',
        animateIn: 'fadeIn',
        autoHeight: true,
        responsiveClass: true,
        onInitialized: function () {
            owl_carousel_img()
        }

    });
    /*Делаю активный слайдер пейджера*/

    $('.model-slider-pagers .model-slider-pagers__item').on('click', function () {
        if (!$(this).hasClass('active-item')) {
            $(this).addClass('active-item');
            $(this).siblings('.model-slider-pagers .model-slider-pagers__item').removeClass('active-item');
        }
    });

    /*Делаю активный размер*/


    $('.model-slider-size .model-slider-size__item,.product-detail-pagers .model-slider-pagers__item').on('click', function () {
        if (!$(this).hasClass('active-item')) {
            $(this).addClass('active-item');
            $(this).siblings('.model-slider-size .model-slider-size__item,.product-detail-pagers .model-slider-pagers__item').removeClass('active-item');
        }
    });

    /*Вызов слайдера для маленьких картинок по клику вызывается модалка*/
    function owl_carousel_img() {
        let $owl = $('.wrapper-owl-carousel-models-img .owl-carousel').owlCarousel({
            items: 6,
            loop: false,
            // center: true,
            margin: 10,
            nav: true,
            navText: ['', ''],
            mouseDrag: false,
            touchDrag: false,
            responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                0: {
                    items: 3
                },
                400: {
                    items: 4
                },
                1050: {
                    items: 6
                }
            },
            onInitialized: function () {

            }
        });
    }



    /*По клику на большую картинку страницы карточка товара вызываю слайдер в модальном окне*/
    let massive_imj = [];

    $('.model-slider-item__img, .model-slider-item__big-img').on('click',function () {
        $('.body-wrapper').removeClass('zoomSectiondown');

        $(this).siblings('.wrapper-owl-carousel-models-img, .wrapper-models-small-img').find('.models-img-slider-item, .models-small-img__item').each(function () {

            let elem = $(this);
            massive_imj.push(elem)
        });
        /*элементы массива добавляю в слайдер модалки*/
        $.each(massive_imj, function (i, item) {

            $('.slider-models-fancy .owl-carousel').append(item.clone())
        });

        $('.slider-models-fancy .models-img-slider-item').unbind('click');
        setTimeout(owl_carousel_img_fancy(), 500);
        open_modal();
    });

    /*По клику на пейджер (слайдер маленьких картинок) страницы карточка товара вызываю слайдер в модальном окне*/


    $('.wrapper-owl-carousel-models-img .models-img-slider-item, .wrapper-models-small-img .models-small-img__item').on('click', function () {
        $('.body-wrapper').removeClass('zoomSectiondown');
        let img_src = $(this).attr('style');
        let index;
        if($(this).parent().hasClass('owl-item')){
            index = $(this).parent().index();
        }
        else {
            index = $(this).index();
        }

        /*для слайдера в модалке в массив записываю дивы с пейджеров основного сайта*/


        $(this).parents('.wrapper-owl-carousel-models-img, .wrapper-models-small-img').find('.models-img-slider-item, .models-small-img__item').each(function () {

            let elem = $(this);
            massive_imj.push(elem)
        });
        /*элементы массива добавляю вслайдер модалки*/
        $.each(massive_imj, function (i, item) {

            $('.slider-models-fancy .owl-carousel').append(item.clone())
        });
        // massive_imj.forEach(function (item, i, massive_imj) {
        //     $('.slider-models-fancy .owl-carousel').append(...item)
        // });
        $('.slider-models-fancy .models-img-slider-item').unbind('click');
        setTimeout(owl_carousel_img_fancy(index), 500);
        open_modal();
    });
    /*Функция для вызова слайдера в модалке*/

    let t;

    function owl_carousel_img_fancy(index) {
        t = $('.slider-models-fancy .owl-carousel').owlCarousel({
            items: 1,
            loop: false,
            margin: 0,
            nav: true,
            dots: true,
            navText: ['', ''],
            startPosition: index,
            onInitialized: function () {
                setTimeout(page_fancy_width, 500)
                // page_fancy_width()
            }


        });
    }

    /*В слайдере модалки формирую для него блок с пейджерами и стрелками*/
    function page_fancy_width() {
        let width = $('.slider-models-fancy .owl-dots').outerWidth();
        $('.slider-models-fancy .owl-nav').css('width', width + 70)
    }

    /*Модальное окно для размеров*/
    $('.wrapper-size-chart').on('click', function () {
        $('.container-size-modal').show();
        $("body").css("overflow-y", "hidden");
    });


    /*Для медиа перестраиваю страницу карточка товара*/

    //параметры при загрузке страницы
    function res_slide() {
        width_window = $(window).width();
        count_elem = $('.section-separate-model .wrapper-separate-model').length;
        restructuring_block(width_window,count_elem)
    }
    res_slide();
    //параметры при измеении ширины экрана
    $(window).resize(function () {
        width_window = $(window).width();
        count_elem = $('.section-separate-model .wrapper-separate-model').length;
        restructuring_block(width_window,count_elem);
        restructuring_block_3(width_window,count_elem)
        restructuring_block_2()
    });



    /*Меняю расположение блоков в карточке товара при изменении экрана*/
    function restructuring_block(index,couny_elem) {

        if (index <= 830) {
            $(".wrapper-model-slider-img").unwrap('.wrapper-separate-model');
            // $('.section-separate-model .wrapper-separate-model').remove()
            $('.owl-carousel-models').append($('.wrapper-for-slider'));
        }
        else if(index > 830&&couny_elem!==1) {
            $(".wrapper-model-slider-img").unwrap('.wrapper-separate-model');
            $(".model-options, .wrapper-model-slider-img").wrapAll('<div class="wrapper-separate-model"></div>');
            $('.model-options').append($('.wrapper-for-slider'));
        }
    }



    function restructuring_block_3(index,couny_elem){

        if (index <= 830) {
            $('.wrap-price-nomenclature').prependTo('.wrapper-slider-model-img');
        }
        else if(index > 830) {
            $('.wrap-price-nomenclature').prependTo('.product-detail');
        }
    }




    /*Модальное окно размеры перестраиваю блок рекоменю размеры*/
    function restructuring_block_2() {
        if ($(window).width() <= 680) {
            $('.user-data').append($('.recommended-size'));
        }
    }

    restructuring_block_2();

    $(".js-toggle-checkoutform").on("click", function (e) {
        e.preventDefault();
        var checkoutContainer = $($(this).data("toggle"));
        if (checkoutContainer.hasClass("open")) {
            checkoutContainer.addClass("open");
            checkoutContainer.slideUp(300);
        } else {
            checkoutContainer.removeClass("open");
            checkoutContainer.slideDown(300);
        }
    });

    /*В карточке товара при наведении на маленькие картинки подставляем в большой блок*/

    let attr_img;
    let attr_total_img;
    $('.wrapper-models-small-img .models-small-img__item-img').hover(
        function(){
            attr_total_img = $(this).parents('.wrapper-models-small-img').siblings('.model-slider-item__big-img').find('.model-slider-item__big-img__img').css('background-image');
            attr_img = $(this).css('background-image')
            $(this).parents('.wrapper-models-small-img').siblings('.model-slider-item__big-img').find('.model-slider-item__big-img__img').css('background-image',attr_img)
        },
        function(){
            $(this).parents('.wrapper-models-small-img').siblings('.model-slider-item__big-img').find('.model-slider-item__big-img__img').css('background-image',attr_total_img)


        });

    /*В карточке товара аккордеон*/

    $('.model-description__wrapper-title').on('click',function(){

        if($(this).hasClass('model-description__icon-down')){
            $(this).removeClass('model-description__icon-down').addClass('model-description__icon-up');
        }
        else{
            $(this).removeClass('model-description__icon-up').addClass('model-description__icon-down');
        }
        $(this).siblings('.model-description__slide-down').slideToggle(600,'swing')

    });

    /*В карточке товара слайдер для пейджера*/

    // $('.wrapper-models-small-img').each(function () {
    //     let count_slide;
    //     count_slide = $(this).length;

        // $(this).find( '.models-small-img__item').each(function (index,elem) {
        //     if(index<=3){
        //         $(this).addClass('img_show');
        //     }
        //     else{
        //         $(this).addClass('img_hide');
        //     }
        //
        // })


    // })









});


