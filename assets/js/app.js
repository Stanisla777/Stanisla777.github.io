
//var height = $('header').height();
//height = 20+height;
//$(".main-content-page").css('marginTop',+height+'px');





$(document).ready(function ($) {

    /*Убрать класс из модального окна, чтобы всё было по центру после согласования убрать и изменть в шаблоне*/

    //$("#modal-characteristics").find(".modal-active-item").removeClass("flex-left-center");





/*Раскоментировать когда добавлю везде*/
    $('#slider').slider({
        min: 0,
        max: 1000,
        values: [0,1000],
        range: true,
        create: displaySliderValues,
        slide: displaySliderValues,
        stop: inputValue
    });

    function displaySliderValues() {
        $('#lower').text($('#slider').slider("values", 0));
        $('#upper').text($('#slider').slider("values", 1));
    }

    function inputValue(){
        var price_low = $("#lower").text();
        var price_top = $("#upper").text();
        $(".js-input-range-low").val(price_low);
        $(".js-input-range-top").val(price_top);
    }

    $('.name-server').click(function(){
        var price_low = $("#lower").text();
        var price_top = $("#upper").text();
        $(".js-input-range-low").val(price_low);
        $(".js-input-range-top").val(price_top);
    });


    //Резиновый input
    var $input = $('.price-range input'),
        $buffer = $('.input-buffer');

    $input.on('change', function() {
        $buffer.text($input.val());
        $input.width($buffer.width());
    });





    //!!!!!!!!!!!Потом убрать, это пока чтобы показать редирект на другую страницу!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $('.then-remove').on('click',function(){
        event.preventDefault();
        location.replace("car-added.html")
    });

    $('.then-remove-2').on('click',function(){
        event.preventDefault();
        location.replace("create-account-step2.html")
    });
    $('.then-remove-3').on('click',function(){
        event.preventDefault();
        location.replace("grow-screen.html")
    });

    $('.then-remove-5').on('click',function(){
        event.preventDefault();
        location.replace("information-added.html")
    });








    //Шаблонизатор
    //var data = [
    //    { name: "Замена масла"},
    //    { name: "Замена масла"},
    //    { name: "Замена масла"},
    //    { name: "Замена масла"},
    //    { name: "Замена масла"}
    //];
    //
    //$("#clientTemplate").tmpl(data).appendTo( ".type_service" );
    //
    //$(".perform-action").on('click',function(){
    //    var rt = '<select id="type_service" class="dropdown type_service" name="type_service"></select>';
    //    $(rt).appendTo('.ry');
    //    $("#clientTemplate").tmpl(data).appendTo( ".type_service" );
    //});

    /*Снять все чекбоксы*/

    $(".js-pull-off-checbox").on("click",function () {
            $(this).parents(".header").siblings(".main-content-brand").find(".list-filters input").prop('checked', false);
    });






    /*Убираю футер в  профиле "Тип автосервиса" исполнителя*/
    //var ind = $("ste")
    //
    //if($(".step-profile-type").prop("display","block")){
    //    $(".step-profile-type").siblings(".footer-call-to-action").css("display","none")
    //}
    //if($(".step-profile-type").prop("display","none")){
    //    $(".step-profile-type").siblings(".footer-call-to-action").css("display","block")
    //}





    //Переключение между табами
    $(".tabs_menu li").click(function () {
        if (!$(this).hasClass("active")) {
            var i = $(this).index();
            $(".tabs_menu li.active").removeClass("active");
            $(".tabs .active-album").hide().removeClass("active-album");
            $(this).addClass("active");
            $($(".tabs").children(".info")[i]).fadeIn(1000).addClass("active-album");
        }
    });

    $(".tabs_menu_2 li").click(function () {
        if (!$(this).hasClass("active-type")) {
            var i = $(this).index();
            $(".tabs_menu_2 li.active-type").removeClass("active-type");
            $(".tabs_2 .active-album").hide().removeClass("active-album");
            $(this).addClass("active-type");
            $($(".tabs_2").children(".info")[i]).fadeIn(1000).addClass("active-album");
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
        speed:500,
        centerMode: true,
        centerPadding: '30px',
        focusOnSelect: true,
        arrows: false
    });

    $('.slider-photos-order').slick({
        slidesToShow: 3,
        dots: true,
        //variableWidth: true,/*именно благодаря этому кадров столько, сколько помещается на экране*/
        slidesToScroll: 1,
        infinite: true,
        cssEase: 'linear',
        speed:400,
        centerMode: true,
        centerPadding: '20px',
        focusOnSelect: true,
        arrows: false
        //respondTo: 'min'
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
        $('header, section, footer').css('display','none');

        $('.media-menu').css("display","block");
        e.preventDefault();
    });
    $(".media-close").click(function(){
        $('.media-menu').css("display","none");
        $('header, section, footer').css('display','block');
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



    var steps = $("form").children(".step"); // находим все шаги формы
    $(steps[0]).show(); // показываем первый шаг
    var current_step = 0; // задаем текущий шаг

    $("a.next").click(function(){	// Событие клика на ссылку "Следующий шаг"
        if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
            $(this).hide(); // скрываем ссылку "Следующий шаг"
            $(".input-hide").show(); // показываем кнопку "Регистрация"
        }
        $("a.back").show(); // показываем ссылку "Назад"
        current_step++; // увеличиваем счетчик текущего слайда
        changeStep(current_step); // меняем шаг
    });

    $("a.back").click(function(){	// Событие клика на маленькое изображение
        if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
            $(this).hide(); // скрываем ссылку "Назад"
        }


        $(".input-hide").hide(); // скрываем кнопку "Регистрация"
        $("a.next").show(); // показываем ссылку "Следующий шаг"
        current_step--; // уменьшаем счетчик текущего слайда
        changeStep(current_step);// меняем шаг
    });

    function changeStep(i) { // функция смены шага
        $(steps).hide(); // скрываем все шаги
        $(steps[i]).show(); // показываем текущий

        if($(".step-11").is(":visible") != true){
            $(".footer-call-to-action").show();
        }else{
            $(".footer-call-to-action").hide();
        }

    }




    //$(function(){
    //    $( "#date" ).datepicker();
    //});


    /*Календарь*/
    //$('.datetimepicker').datetimepicker({
    //    //datepicker:false
    //    format:'d.m.Y',
    //    timepicker:false,
    //    lang:'ru'
    //});
    //$('.datetimepicker-year').datetimepicker({
    //    format:'Y',
    //    //datepicker:false,
    //    timepicker:false,
    //    lang:'ru',
    //    closeOnDateSelect:true,
    //    closeOnWithoutClick :true
    //});


    //$(function () {
    //    $('#datetimepicker6').datetimepicker(
    //        {language: 'ru'}
    //    );
    //});









    /*Стирать поля ввода*/

    $('.js-icon-clear').on('click',function(){
        $(this).siblings('.js-input-search').val('');
    });

    /*Выбор количества звездочек для оценок*/


    $('.item-rating').on('click',  function() {
        $(this).toggleClass('item-rating-fill');
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
    //
    //
    ///*Формы отправки регулярка на ввод символов*/
    //
    $('.js-number, input[name="tel"]').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9\(\)\+\-\s]/g)) {
            this.value = this.value.replace(/[^0-9\(\)\.\+\-\s]/g, '');
        }
    });

    $('.js-number-point').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9\(\)\.\+\s]/g)) {
            this.value = this.value.replace(/[^0-9\(\)\.\+\s]/g, '');
        }
    });

    $('.js-word, .js-input-search, input[name="password"], textarea[name="text"]').bind("change keyup input click", function() {
        if (this.value.match(/[^а-яА-Яa-zA-Z\s\"\'\0-9\.\,]/g)) {
            this.value = this.value.replace(/[^а-яА-Яa-zA-Z\s\"\'\0-9\.\,]/g, '');
        }
    });


    $('.js-email, input[name="e-mail"]').bind("change keyup input click", function() {
        if (this.value.match(/[^а-яА-Яa-zA-Z\s\"\'\0-9\.\,\@]/g)) {
            this.value = this.value.replace(/[^а-яА-Яa-zA-Z\s\"\'\0-9\.\,\@]/g, '');
        }
    });


    //Запускаю диаграмму

    var c = $(".box input").val();
    $(function() {

        $(".dial").knob({

        });
        //$({animatedVal: 0}).animate({animatedVal: c}, {
        //    duration: 2000,
        //    easing: "swing",
        //    step: function() {
        //        $(".dial").val(Math.ceil(this.animatedVal)).trigger("change");
        //    }
        //});
    });


    /*Модальное окно*/

    var text;

    //Шаблонизатор templates Сейчас формируются от сюда модальные окна селектов марок авто итому подобного
    //var marka = [
    //    {title: "Марка"},
    //    { name: "Ford",ic_marka:"../../assets/img/icon-BMW.png"},
    //    { name: "Mercedes-Benz"},
    //    { name: "Жигули"},
    //    { name: "Москвич"}
    //];
    //var model = [
    //    { name: "Focus"},
    //    { name: "Mercedes-Benz G"},
    //    { name: "Ваз-2015"},
    //    { name: "410H"}
    //];
    //var engine = [
    //    { name: "Бензин"},
    //    { name: "Электродвигатель"},
    //    { name: "Дизель"}
    //];
    //
    //var type_service = [
    //    { name: "Замена масла"},
    //    { name: "Замена шин"},
    //    { name: "Замена магнитолы"}
    //];
    //
    //var transmission = [
    //    { name: "Механическая"},
    //    { name: "Автомат"},
    //    { name: "Полуавтомат"}
    //];
    //var wishes_spare = [
    //    { name: "Только оригинальные"},
    //    { name: "Неоригинальные"},
    //    { name: "Полуавтомат"}
    //];

    /*А это статичная инфа о годах, её не убирать*/




    //Получаю тикущий год
    Data = new Date();
    year = Data.getFullYear();

    //$(".js-modal").on("click",function(){
    //
    //
    //    //Это потом убрать. Пока просто для подстановки каких-то данных и показа
    //    if($(this).find("input").hasClass("marka")){
    //        $("#clientTemplate").tmpl(marka).appendTo( "#modal-characteristics .modal-body" );
    //    }
    //    if($(this).find("input").hasClass("model")){
    //        $("#clientTemplate").tmpl(model).appendTo( "#modal-characteristics .modal-body" );
    //    }
    //
    //    if($(this).find("input").hasClass("engine")){
    //        $("#clientTemplate").tmpl(engine).appendTo( "#modal-characteristics .modal-body" );
    //    }
    //
    //    if($(this).find("input").hasClass("type-of-service")){
    //        $("#clientTemplate").tmpl(type_service).appendTo( "#modal-characteristics .modal-body" );
    //    }
    //
    //    if($(this).find("input").hasClass("transmission")){
    //        $("#clientTemplate").tmpl(transmission).appendTo( "#modal-characteristics .modal-body" );
    //    }
    //
    //    if($(this).find("input").hasClass("wishes-spare")){
    //        $("#clientTemplate").tmpl(wishes_spare).appendTo( "#modal-characteristics .modal-body" );
    //    }
    //
    //    /*А это статичная инфа о годах, её не убирать*/
    //    if($(this).find("input").hasClass("year")){
    //        for ( i = year; i > year-30; i--) {
    //            $('<div class="modal-active-item <!--flex-left-center-->/">'+'<div class="modal-item-cheked"></div>'+'<p>'+i+'</p>'+'</div>').appendTo("#modal-characteristics .modal-body")
    //        }
    //    }
    //
    //    if($(this).find("input").hasClass("weekend")){
    //
    //        $('<div class="modal-active-item <!--flex-left-center-->/">'+'<div class="modal-item-cheked"></div>'+
    //        '<p>Да</p>'+'</div>'+'<div class="modal-active-item <!--flex-left-center-->/">'+'<div class="modal-item-cheked"></div>'+'<p>Нет</p>'+'</div>').appendTo("#modal-characteristics .modal-body")
    //
    //    }
    //
    //
    //
    //
    //    $(this).find("input").addClass("active-item-m");
    //    $("#modal-characteristics").modal('show');
    //    ret();
    //
    //    $("#modal-characteristics").on('hidden.bs.modal', function(){
    //        $(".active-item-m").val(text);
    //        $(".js-modal").find("input").removeClass("active-item-m");
    //        $(this).find(".modal-body").html("");
    //    });
    //
    //});

    //function ret(){
    //
    //    $(".modal-active-item").on("click",function(){
    //        $(this).siblings().find(".modal-item-cheked").css("backgroundColor","#fff");
    //        $(this).siblings().find("p").removeClass("active-item-modal");
    //        $(this).find(".modal-item-cheked").css("backgroundColor","#00dd1c").find("p").addClass("active-item-modal");
    //        $(this).find("p").addClass("active-item-modal");
    //        text =  $(this).find("p").text();
    //        $("#modal-characteristics").modal('hide');
    //
    //
    //
    //
    //    })
    //}

    /*Тут надо переделывать. Оказывается окно марки автомобилей это и есть модальное окно с марками автомобилей
     Сейчай это у меня на двух страничках profile-filling.html и car-service-profile-performer.html Там сечас сделано на скорую руку
     но факт то что при клике на кнопку скрывается всё содержимое wrap c footer и подставляется в поле
     */

    /*Открытие окна с выбором марки автомобиля и Подстановка выбранной марки */
    //$('.brand-search').click(function(){
    //    $('.wrap, .step-1, .footer-call-to-action').css('display','none');
    //    $('.brand-machine').css('display','block');
    //});
    //
    //$('.js-icon-close-brand').click(function(){
    //    $('.brand-machine').css('display','none');
    //    $('.wrap, .step-1, .footer-call-to-action').css('display','block');
    //});
    //
    //
    //$('.js-name-brand').on('click',function(){
    //    var brand = $(this).text();
    //    RegEx=/\s/g;
    //
    //    brand=brand.replace(RegEx,"");
    //    $('.brand-machine').css('display','none');
    //    $('.wrap, .step-1, .footer-call-to-action').css('display','block');
    //    $('.js-input-subst').val(brand);
    //    $('.js-input-subst').text(brand);
    //
    //
    //});

    /*Настройка Шаблона пользователя*/
    $(document).ready(function(){
        $(".checkbox").change(function(){
            if ($(this).prop('checked')) {
                $('.wrapper-call-template').show();
                $('.input-template').hide();

            } else {
                $('.wrapper-call-template').hide();
                $('.input-template').fadeIn().show();
            }
        });

    });



    /*Открытие окна с фильтром*/
    $('.js-filtr-icon').click(function(){
        $('.main-page-window, .footer').css('display','none');
        $('.window-filtr').css('display','block');
    });

    $('.js-close').on('click',function(){
        $('.window-filtr').css('display','none');
        $('.main-page-window, .footer').css('display','block');
    });

    /*Открытие окна с подписками*/
    $(".go-to-subscription").click(function(){
        $("#modal-subscription").modal('show');
    });

    $('.wrapper-subscription').on('click',function(){
        var price = $(this).find(".js-sub-price").text();
        $("#modal-subscription").modal('hide');
        $('.js-substitute-price').text(price);

    });

    //Вызов поп-ап Заказ опубликован наверное вызывется в AJAX

    $("#js-call-published").on("click",function(){

        //event.preventDefault(); /*Это убрать, так как окощко о том, что задание выполнено будет вызываться через ajax*/
        //$(".wrapper-order-published").css("display","block")

        event.preventDefault(); /*Это убрать, так как окощко о том, что задание выполнено будет вызываться через ajax*/
        $("#modal-order-published").modal('show');

    });
    //$(".pop-up-order-published").on("click",function(){
    //    $(".wrapper-order-published").css("display","none")
    //});

    //Вызов поп ап Отклик отправлен у исполнителя наверное вызывется в AJAX
    $("#js-call-response-sent").on("click",function(){
        event.preventDefault(); /*Это убрать, так как окощко о том, что задание выполнено будет вызываться через ajax*/
        $("#modal-response-sent").modal('show');


    });

    //Вызов поп ап Другие шаблоны
    $(".select-another-template").on("click",function(){
        event.preventDefault(); /*Это убрать, так как окощко о том, что задание выполнено будет вызываться через ajax*/
        $("#another-template").modal('show');


    });

    //Вызов модалки селекты

    //$(".js-modal").on("click",function(){
    //    $("#modal-select").modal('show');
    //});

    var title= {
        title_marka: "Марка",
        title_model: "Модель",
        title_engine: "Двигатель",
        title_year: "Год выпуска",
        title_transmission: "Коробка передач",
        title_type_service: "Тип сервиса",
        title_wishes_spare: "Пожелания по запчастям"




    };


    var model = [
        { name: "Focus"},
        { name: "Mercedes-Benz G"},
        { name: "Ваз-2015"},
        { name: "410H"}
    ];

    var marka = [
        { name: "Ford",ic_marka:"../../assets/img/icon-BMW.png"},
        { name: "Mercedes-Benz",ic_marka:"../../assets/img/icon-BMW.png"},
        { name: "Жигули",ic_marka:"../../assets/img/icon-BMW.png"},
        { name: "Москвич",ic_marka:"../../assets/img/icon-BMW.png"}
    ];

    var engine = [
            { name: "Бензин"},
            { name: "Электродвигатель"},
            { name: "Дизель"}
        ];

        var type_service = [
            { name: "Замена масла"},
            { name: "Замена шин"},
            { name: "Замена магнитолы"}
        ];

        var transmission = [
            { name: "Механическая"},
            { name: "Автомат"},
            { name: "Полуавтомат"}
        ];
        var wishes_spare = [
            { name: "Только оригинальные"},
            { name: "Неоригинальные"},
            { name: "Всё равно"}
        ];

    function ret(){

        $(".modal-active-item").on("click",function(){
            //$(this).removeClass("active-item-modal");
            //$(this).find(".name-service").addClass("active-item-modal");
            text =  $(this).find(".name-service").text();
            //text =  $(this).find(".year-service").text();

            $("#modal-select").modal('hide');

        })
    }

    $(".js-modal").on("click",function(){
        $("#modal-select").modal('show');

        //Это потом убрать. Пока просто для подстановки каких-то данных и показа
        if($(this).find("input").hasClass("marka")){
            $("#modal-select .modal-header h1").text(title.title_marka);
            $("#clientTemplate").tmpl(marka).appendTo("#modal-select .js-wrapper-services" );
        }
        if($(this).find("input").hasClass("model")){
            $("#modal-select .modal-header h1").text(title.title_model);
            $("#clientTemplate").tmpl(model).appendTo("#modal-select .js-wrapper-services" );
        }

        if($(this).find("input").hasClass("engine")){
            $("#modal-select .modal-header h1").text(title.title_engine);
            $("#clientTemplate").tmpl(engine).appendTo("#modal-select .js-wrapper-services" );
        }

        if($(this).find("input").hasClass("type-of-service")){
            $("#modal-select .modal-header h1").text(title.title_type_service);
            $("#clientTemplate").tmpl(type_service).appendTo("#modal-select .js-wrapper-services" );
        }

        if($(this).find("input").hasClass("transmission")){
            $("#modal-select .modal-header h1").text(title.title_transmission);
            $("#clientTemplate").tmpl(transmission).appendTo("#modal-select .js-wrapper-services" );
        }

        if($(this).find("input").hasClass("wishes-spare")){
            $("#modal-select .modal-header h1").text(title.title_wishes_spare);
            $("#clientTemplate").tmpl(wishes_spare).appendTo("#modal-select .js-wrapper-services" );
        }

        /*А это статичная инфа о годах, её не убирать*/
        if($(this).find("input").hasClass("year")){
            $("#modal-select .modal-header h1").text(title.title_year);
            for ( i = year; i > year-30; i--) {
                $('<li class="modal-active-item js-name-brand text-center">'
                +'<span class="year-service">'+i+'</span>').appendTo("#modal-select .js-wrapper-services")
            }
        }

        if($(this).find("input").hasClass("weekend")){

            $('<div class="modal-active-item <!--flex-left-center-->/">'+'<div class="modal-item-cheked"></div>'+
            '<p>Да</p>'+'</div>'+'<div class="modal-active-item <!--flex-left-center-->/">'+'<div class="modal-item-cheked"></div>'+'<p>Нет</p>'+'</div>').appendTo("#modal-characteristics .modal-body")

        }




        $(this).find("input").addClass("active-item-m");


        ret();

        $("#modal-select").on('hidden.bs.modal', function(){
            $(".active-item-m").val(text);
            $(".js-modal").find("input").removeClass("active-item-m");
            text = "";
            $(this).find(".modal-body ul.js-wrapper-services").html("");
        });


    });






});


