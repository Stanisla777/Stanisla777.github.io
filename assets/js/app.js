
var height = $('header').height();
height = 20+height;
$(".main-content-page").css('marginTop',+height+'px');





$(document).ready(function ($) {

    //$('.then-remove').on('click',function(){
    //    location.replace("car-added.html")
    //});


    /*Подстановка марки автомобиля*/
    $('.brand-search').click(function(){
        $('.step-1, .footer-call-to-action').css('display','none');
        $('.brand-machine').css('display','block');
    });

    $('.js-icon-close-brand').click(function(){
        $('.brand-machine').css('display','none');
        $('.step-1, .footer-call-to-action').css('display','block');
    });


    $('.js-name-brand').on('click',function(){
        var brand = $(this).text();
        RegEx=/\s/g;

        brand=brand.replace(RegEx,"");
        $('.brand-machine').css('display','none');
        $('.step-1, .footer-call-to-action').css('display','block');
        $('.js-input-subst').val(brand);

    });

    //Потом убрать, это пока чтобы показать редирект на другую страницу




    $(".tabs_menu li").click(function () {
        if (!$(this).hasClass("active")) {
            var i = $(this).index();
            $(".tabs_menu li.active").removeClass("active");
            $(".tabs .active-album").hide().removeClass("active-album");
            $(this).addClass("active");
            $($(".tabs").children(".info")[i]).fadeIn(1000).addClass("active-album");
        }
    });







/*Слайдер главного экрана*/



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


    $('.slider-service-foto').slick({
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        //fade: true,
        infinite: true,
        cssEase: 'linear',
        speed:1000,
        //centerMode: true,
        //centerPadding: '30px',
        focusOnSelect: true,
        arrows: false
    });





    /*Меню*/
    $('.menu-icon').on("click",function(e){

        $('.media-menu').css("display","block");
        e.preventDefault();
    });
    $(".icon-close").click(function(){
        $('.media-menu').css("display","none");
    });
    $(".main-wrap").click(function(){
        $('.media-menu').css("display","none");
    });




    $('.menu-icon').on("click",function(e){

        $('.media-menu').css("display","block");
        e.preventDefault();
    });
    $(".icon-close").click(function(){
        $('.media-menu').css("display","none");
    });
    $(".main-wrap").click(function(){
        $('.media-menu').css("display","none");
    });

















    /*Функция для добавления картинки пользователем*/
    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                //var t = $('.upload-file-container').clone(true);
                //$(t).appendTo('.wrapper-add-foto');
                $('#image').attr('src', e.target.result);

            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInput").change(function(){
        readURL(this);
    });

    /*Смена экранов регистрации*/

    //var steps = $("form").children(".step"); // находим все шаги формы
    //$(steps[0]).show(); // показываем первый шаг
    //var current_step = 0; // задаем текущий шаг
    //$("a.next").click(function(){	// Событие клика на ссылку "Следующий шаг"
    //    if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
    //        $(this).hide(); // скрываем ссылку "Следующий шаг"
    //        $("form input[type=submit]").show(); // показываем кнопку "Регистрация"
    //    }
    //    $("a.back").show(); // показываем ссылку "Назад"
    //    current_step++; // увеличиваем счетчик текущего слайда
    //    changeStep(current_step); // меняем шаг
    //});
    //
    //$("a.back").click(function(){	// Событие клика на маленькое изображение
    //    if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
    //        $(this).hide(); // скрываем ссылку "Назад"
    //    }
    //    $("form input[type=submit]").hide(); // скрываем кнопку "Регистрация"
    //    $("a.next").show(); // показываем ссылку "Следующий шаг"
    //    current_step--; // уменьшаем счетчик текущего слайда
    //    changeStep(current_step);// меняем шаг
    //});
    //
    //function changeStep(i) { // функция смены шага
    //    $(steps).hide(); // скрываем все шаги
    //    $(steps[i]).show(); // показываем текущий
    //}

    var steps = $("form").children(".step"); // находим все шаги формы
    $(steps[0]).show(); // показываем первый шаг
    var current_step = 0; // задаем текущий шаг
    $("a.next").click(function(){	// Событие клика на ссылку "Следующий шаг"
        if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
            $(this).hide(); // скрываем ссылку "Следующий шаг"
            $("#finish_step").show(); // показываем кнопку "Регистрация"
        }
        $("a.back").show(); // показываем ссылку "Назад"
        current_step++; // увеличиваем счетчик текущего слайда
        changeStep(current_step); // меняем шаг
    });

    $("a.back").click(function(){	// Событие клика на маленькое изображение
        if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
            $(this).hide(); // скрываем ссылку "Назад"
        }
        $("#finish_step").hide(); // скрываем кнопку "Регистрация"
        $("a.next").show(); // показываем ссылку "Следующий шаг"
        current_step--; // уменьшаем счетчик текущего слайда
        changeStep(current_step);// меняем шаг
    });

    function changeStep(i) { // функция смены шага
        $(steps).hide(); // скрываем все шаги
        $(steps[i]).show(); // показываем текущий
    }


    for ( i = 1980; i < 2020; i++) {
        $('<option value='+i+'>'+i+'</option>').appendTo('select#year-issue')
    }

    /*Календарь*/
    $('.datetimepicker').datetimepicker({
        //datepicker:false
        format:'d.m.Y',
        timepicker:false,
        lang:'ru'
    });
    $('.datetimepicker-year').datetimepicker({
        format:'Y',
        //datepicker:false,
        timepicker:false,
        lang:'ru',
        closeOnDateSelect:true,
        closeOnWithoutClick :true
    });

    /*Вернуться!!!!!!!!!!!!!!!*/

    $('.js-icon-clear').on('click',function(){
        $(this).siblings('.js-input-search').val('');
    });


    /*Яндекс карты*/
    ymaps.ready(init);

    function init () {
        var myMap = new ymaps.Map("map", {
            // Центр карты, указываем коордианты
            center:[55.752161956105276,37.61949517968746],
            // Масштаб, тут все просто
            zoom: 16,
            // Отключаем все элементы управления
            controls: []
        });

        var myGeoObjects = [];

        // Наша метка, указываем коордианты
        myGeoObjects = new ymaps.Placemark([55.800151390638646,37.61400201562497],{
            balloonContentBody: 'Текст в балуне'
        },{
            iconLayout: 'default#image',
            // Путь до нашей картинки
            iconImageHref: 'assets/img/icon-tel.png',
            // Размер по ширине и высоте
            iconImageSize: [100, 100],
            // Смещение левого верхнего угла иконки относительно
            // её «ножки» (точки привязки).
            iconImageOffset: [-35, -35]
        });

        var clusterer = new ymaps.Clusterer({
            clusterDisableClickZoom: false,
            clusterOpenBalloonOnClick: false
        });

        clusterer.add(myGeoObjects);
        myMap.geoObjects.add(clusterer);
        // Отлючаем возможность изменения масштаба
        myMap.behaviors.disable('scrollZoom');

    }


    /*Доработать, вычисляет не каждый хедер*/
    $('.step').each(function(i,elem) {
        var height = $('header').height();
        height = 20+height;
        $(".main-content-page").css('marginTop',+height+'px');
    });








});


