
$(document).ready(function ($) {



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


    /*Прижатый хедер*/

    var height = $('header').height();
    height = 20+height;
    alert(height)

    $(".main-content-page").css('marginTop',+height+'px');
















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

    var steps = $("form").children(".step"); // находим все шаги формы
    $(steps[0]).show(); // показываем первый шаг
    var current_step = 0; // задаем текущий шаг
    $("a.next").click(function(){	// Событие клика на ссылку "Следующий шаг"
        if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
            $(this).hide(); // скрываем ссылку "Следующий шаг"
            $("form input[type=submit]").show(); // показываем кнопку "Регистрация"
        }
        $("a.back").show(); // показываем ссылку "Назад"
        current_step++; // увеличиваем счетчик текущего слайда
        changeStep(current_step); // меняем шаг
    });

    $("a.back").click(function(){	// Событие клика на маленькое изображение
        if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
            $(this).hide(); // скрываем ссылку "Назад"
        }
        $("form input[type=submit]").hide(); // скрываем кнопку "Регистрация"
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








});


