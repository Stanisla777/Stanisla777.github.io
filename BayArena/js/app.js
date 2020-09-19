"use strict";

$(document).ready(function ($) {
    $('.confirmation-item__check input').hover(function () {
        $(this).siblings('label').addClass('label-hover');
    }, function () {
        $(this).siblings('label').removeClass('label-hover');
    });
    $(".usual-input").focusout(function () {
        if ($(this).val() !== "") {
            $(this).addClass("has-content");
        } else {
            $(this).removeClass("has-content");
        }
    }); //Слайдер года
    //
    var slide_year = $('.history-line');
    slide_year.slick({
        infinite: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        // adaptiveHeight:true,
        dots: false,
        prevArrow: '<button type="button" class="slide-arrow slide-arrow-left"></button>',
        nextArrow: '<button type="button" class="slide-arrow slide-arrow-right"></button>',
        responsive: [{
            breakpoint: 890,
            settings: {
                arrows: true,
                slidesToShow: 3
            }
        }, {
            breakpoint: 600,
            settings: {
                arrows: true,
                slidesToShow: 2
            }
        }, {
            breakpoint: 450,
            settings: {
                arrows: true,
                slidesToShow: 1,
                initialSlide: 3
            }
        }]
    }); //Слайдер площадки



    var slide_platform = $('.event-location');
    slide_platform.slick({
        infinite: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
            breakpoint: 693,
            settings: {
                arrows: false,
                // centerPadding: '10px',
                slidesToShow: 3
            }
        }]
    }); //Дополнение к слайдеру

    slide_platform.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        if ($(window).width() <= 490) {
            var count_slide = $(this).find('.slick-track .slick-slide').length;
            var attr = $(this).find(".slick-slide[data-local=\"".concat(count_slide, "\"]")).attr('aria-hidden');

            if (attr === "false") {
                $(this).animate({
                    left: -44 + "px"
                }, 1000);
            } else {
                $(this).animate({
                    left: 0
                }, 1000);
            }
        }
    }); //Слайдер Заявка на участие

    var request = $('.container-application');
    request.slick({
        draggable: false,
        infinite: false,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        fade: true,
        adaptiveHeight: true
    }); //Переключение в слайдере
    //
    $('.container-application button').on('click', function () {
        var ind = $(this).attr('data-button');
        $(this).parents('.container-application').find('.slick-dots li').eq(ind).click();

        if (ind === 0) {
            $(this).parents('.container-application').find('.slick-dots li').eq(ind + 1).click();
        } else {
            $(this).parents('.container-application').find('.slick-dots li').eq(ind - 1).click();
        }
    }); //Слайдер года и техники
    //
    var slide_teh = $('.industrial-slider');
    var slide_date = $('.event-location-date');
    var tab = 1;

    function slider() {
        slide_date.slick({
            infinite: false,
            edgeFriction: true,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            prevArrow: '<button type="button" class="slide-arrow slide-arrow-left"></button>',
            nextArrow: '<button type="button" class="slide-arrow slide-arrow-right"></button>',
            responsive: [{
                breakpoint: 1180,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            }]
        }); //Слайдер техники

        slide_teh.slick({
            lazyLoad: 'ondemand',
            infinite: true,
            edgeFriction: true,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            prevArrow: '<button type="button" class="slide-arrow slide-arrow-left"></button>',
            nextArrow: '<button type="button" class="slide-arrow slide-arrow-right"></button>',
            responsive: [{
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    };
    //
    slider(); //Поправляю слайдер

    if ($(window).width() <= 490) {
        slide_date.on('afterChange', function (event, slick, currentSlide, nextSlide) {
            var count_slide = $(this).find('.slick-track .slick-slide').length;
            var attrb = $(this).find(".slick-track .slick-slide[data-slick-index=\"".concat(count_slide - 1, "\"]")).attr('aria-hidden');
            console.log(attrb);

            if (attrb === "false") {
                $(this).animate({
                    left: -10 + "%"
                }, 1000);
            } else {
                $(this).animate({
                    left: 0
                }, 1000);
            }
        });
    } //Табы площадок и мероприятий


    var loc_item = $('.event-location__item');
    loc_item.on('click', function () {
        slide_date.slick('unslick');
        slide_teh.slick('unslick');
        tab = $(this).attr('data-local');
        $(".event-location-desc[data-local=".concat(tab, "]")).show().siblings('.event-location-desc').hide();
        slider(); // let count = $(this).parents('.event-location').siblings(`.event-location-desc[data-local=${tab}]`).find('ymaps')
        // if(count.length===0){
        //     // Подставляю в яндекс карту нужнуые координаты
        //     map(`map${tab}`,yanadress[tab-1].adress)
        // }
    }); //Открыть меню

    var paje_nav = $('.page-navigation');
    $('.menu-icon').on('click', function () {
        //Открываю медиа-меню по клику
        if ($(this).hasClass('menu-active')) {
            paje_nav.css('display', 'none');
            $('#lean_overlay').hide();
            $(this).removeClass('menu-active');
        } else {
            paje_nav.css('display', 'flex');
            $('#lean_overlay').show();
            $(this).addClass('menu-active');
            pni_hide();
        }
    });

    var pni_hide = function pni_hide() {
        $('.page-navigation__item').on('click', function () {
            paje_nav.css('display', 'none');
            $('#lean_overlay').hide();
        });
    };
    //
    $('#lean_overlay').on('click', function (e) {
        //Закрываю модальное окно по клику рабочей области
        $(this).parents('.section-main').find('.menu-icon').removeClass('menu-active');
        paje_nav.css('display', 'none');
        $("#lean_overlay").hide();
    }).on('click', '.block', function (e) {
        //Запрещаю закрывать окно по клику на само молдальное окно
        e.stopPropagation();
    });
    //Скролл в нужное место

    $('.page-navigation__item').on('click', function () {
        var scroll = $(this).attr('data-scroll');
        $('html, body').animate({
            scrollTop: $(".h2-title[data-scroll=".concat(scroll, "]")).offset().top - +30
        }, {
            duration: 800,
            // тут можно контролировать скорость
            easing: "swing"
        });
    }); //Скролл подать заявку

    $('.button[data-scroll="form"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".section-application").offset().top - +30
        }, {
            duration: 800,
            // тут можно контролировать скорость
            easing: "swing"
        });
    }); //Скролл в начало

    var element = $('.scroll-beginning');
    $(window).scroll(function () {
        element['fade' + ($(this).scrollTop() > 200 ? 'In' : 'Out')](500);
    });
    element.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    }); //Задаю id для чекбоксов
    // $('.checkbox').each(function (ind) {
    //     // $(this).find('input').attr('id',`checkbox_${ind}`)
    //     // $(this).find('label').attr('for',`checkbox_${ind}`)
    // });
    // //Форма отправки поле select
    //
    $('.wrapper-select').on('click', function () {
        $(this).find('.wrapper-select__option').slideToggle();
    });
    $('.wrapper-select__option li').on('click', function () {
        var val = $(this).find('p').text();
        $(this).parents('.wrapper-select').find('.wrapper-select__input').val(val);
        $(this).parents('.wrapper-select__option').siblings('.wrapper-select__wrapper-input').find('.wrapper-select__input').addClass('has-content');
        $(this).find('.wrapper-select__option').slideUp();
    }); //Форма отправки input

    $('.wrapper-select__wrapper-input').on('click', function () {
        $(this).find('input').focus();
    });
    $('.wrapper-select__wrapper-input').on('click', function () {
        $(this).addClass('inp-bor');
    });
    $('.wrapper-select__input').on('blur', function () {
        var valu = $(this).val(); // if(valu===""){

        $(this).parents('.wrapper-select__wrapper-input').removeClass('inp-bor'); // }
    });
    var phoneInput = document.querySelector('.phone');

    if ($('body').find(phoneInput)) {
        phoneInput.addEventListener('keydown', function (event) {
            if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
                event.preventDefault();
            }

            var mask = '+7 (111) 111-11-11'; // Задаем маску

            if (/[0-9\+\ \-\(\)]/.test(event.key)) {
                // Здесь начинаем сравнивать this.value и mask
                // к примеру опять же
                var currentString = this.value;
                var currentLength = currentString.length;

                if (/[0-9]/.test(event.key)) {
                    if (mask[currentLength] == '1') {
                        this.value = currentString + event.key;
                    } else {
                        for (var i = currentLength; i < mask.length; i++) {
                            if (mask[i] == '1') {
                                this.value = currentString + event.key;
                                break;
                            }

                            currentString += mask[i];
                        }
                    }
                }
            }
        });
    } //Запускаю видео
    //
    //
    var videoyou = [{
        id: 0,
        video: 'https://www.youtube.com/embed/FgB9RTdXzUw'
    }, {
        id: 1,
        video: 'https://www.youtube.com/embed/uEVyjyTHKlw'
    }, {
        id: 2,
        video: 'https://www.youtube.com/embed/kVcbQ8nTsVc'
    }, {
        id: 3,
        video: 'https://www.youtube.com/embed/Om0MgAqXy6U'
    }, {
        id: 4,
        video: 'https://www.youtube.com/embed/0fK8_fFkDko'
    }];
    $('.video-item').on('click', function () {
        var dataYoutobe = $(this).attr('data-video');
        $(this).find('img').hide();
        $(this).find('.thumb-wrap').append("<iframe allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"  src=\"".concat(videoyou[dataYoutobe].video, "?autoplay=1\" frameborder='0' allowfullscreen ></iframe><br/>"));
    });
    var text; //Подмена текста

    $('.event-location-date__item:not(.event-location-date__current-date)').hover(function () {
        text = $(this).find('p').text();
        $(this).addClass('another-text').find('p').text('Скачать отчёт');
    }, function () {
        $(this).removeClass('another-text').find('p').text(text);
    }); //Яндекс карта
    //
    // var map = function map(id, coor) {
    //     ymaps.ready(function () {
    //         var myMap = new ymaps.Map(id, {
    //                 center: coor,
    //                 zoom: 15
    //             }, {
    //                 searchControlProvider: 'yandex#search'
    //             }),
    //             myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    //                 hintContent: 'Собственный значок метки',
    //                 balloonContent: 'Это красивая метка',
    //                 iconCaption: 'подсказка'
    //             }, {
    //                 // Опции.
    //                 // Необходимо указать данный тип макета.
    //                 iconLayout: 'default#image',
    //                 // Своё изображение иконки метки.
    //                 iconImageHref: './img/metka.png',
    //                 // Размеры метки.
    //                 iconImageSize: [50, 75],
    //                 // Смещение левого верхнего угла иконки относительно
    //                 // её "ножки" (точки привязки).
    //                 iconImageOffset: [-3, -42]
    //             }); // Добавляем круг на карту.
    //
    //         myMap.geoObjects.add(myPlacemark);
    //     });
    // };
    //
    // var yanadress = [{
    //     id: 1,
    //     adress: [45.619363, 40.353814]
    // }, {
    //     id: 2,
    //     adress: [52.793491, 39.033371]
    // }, {
    //     id: 3,
    //     adress: [51.20995, 36.26744]
    // }, {
    //     id: 4,
    //     adress: [52.632739, 32.928025]
    // }]; //Координаты областей
    // // map('map1',[45.619363,40.353814])
    // //Полоска меню
    //
    $('.navigation-item:not(.event-location__item)').hover(function () {
        $(this).addClass('active');
    }, function () {
        $(this).removeClass('active');
        $(this).addClass('non-active');
    });
    loc_item.on('click', function () {
        if (!$(this).hasClass('active-dobble')) {
            $(this).addClass('active-dobble');
            $(this).siblings('.event-location__item.active-dobble').removeClass('active-dobble active').addClass('non-active');
        } // else{
        //     $(this).removeClass('active-dobble')
        //
        // }

    });
    loc_item.hover(function (e) {
        if ($(this).hasClass('active-dobble')) {
            e.preventDefault();
        } else {
            $(this).addClass('active');
        }
    }, function () {
        if ($(this).hasClass('active-dobble')) {
            e.preventDefault();
        } else {
            $(this).removeClass('active');
            $(this).addClass('non-active');
        }
    }); //    Модальное окно

    var pop_up = $('.modal-container');
    $('.js-modal').on('click', function (e) {
        e.stopPropagation();
        scroll();
        OffScroll();
        $('.modal-parent').css('display', 'flex');
        $('#lean_overlay').show(); //фон затемнение
    });
    $('.close-menu').on('click', function () {
        $('.modal-parent').css('display', 'none');
        pop_up.getNiceScroll().hide();
        $('#lean_overlay').hide();
        $(window).unbind('scroll');
    });
    $('.modal-parent').on('click', function (e) {
        $('.modal-parent').css('display', 'none');
        pop_up.getNiceScroll().hide();
        $("#lean_overlay").hide();
        $(window).unbind('scroll');
    }).on('click', '.modal-container', function (e) {
        //Запрещаю закрывать окно по клику на само молдальное окно
        e.stopPropagation();
    });

    function OffScroll() {
        var winScrollTop = $(window).scrollTop();
        $(window).bind('scroll', function () {
            $(window).scrollTop(winScrollTop);
        });
    } //Красивый скролл в модалке


    function scroll() {
        pop_up.scrollTop(0); //при вызове ползунок помещаю вверх

        pop_up.getNiceScroll().show(); // показываю скролл

        pop_up.getNiceScroll().resize(); //разрушаю скролл

        pop_up.niceScroll({
            cursorcolor: "#fff",
            //цвет ползунка
            autohidemode: false,
            cursorwidth: 10,
            //ширина ползунка
            cursorborderradius: 4,
            //радиус ползунка
            background: "#a4a4a4" //цвет линии сролла

        });
    }
});