
//var height = $('header').height();
//height = 20+height;
//$(".main-content-page").css('marginTop',+height+'px');





$(document).ready(function ($) {





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







    /*Открытие окна с выбором марки автомобиля и Подстановка выбранной марки */
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

    /*Открытие окна с фильтром*/
    $('.js-filtr-icon').click(function(){
        $('.main-page-window, .footer').css('display','none');
        $('.window-filtr').css('display','block');
    });

    $('.js-close').on('click',function(){
        $('.window-filtr').css('display','none');
        $('.main-page-window, .footer').css('display','block');
    });





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

    //Вызов поп-ап Заказ опубликован

    $("#js-call-published").on("click",function(){
        event.preventDefault(); /*Это убрать, так как окощко о том, что задание выполнено будет вызываться через ajax*/
        $(".wrapper-order-published").css("display","block")

    });
    $(".pop-up-order-published").on("click",function(){
        $(".wrapper-order-published").css("display","none")
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

    /*Стирать поля ввода*/

    $('.js-icon-clear').on('click',function(){
        $(this).siblings('.js-input-search').val('');
    });

    /*Выбор количества звездочек для оценок*/


    $('.item-rating').on('click',  function() {
        $(this).toggleClass('item-rating-fill');
    });




    /*Яндекс карты*/
    //ymaps.ready(init);
    //
    //function init () {
    //    var myMap = new ymaps.Map("map", {
    //        // Центр карты, указываем коордианты
    //        center:[55.752161956105276,37.61949517968746],
    //        // Масштаб, тут все просто
    //        zoom: 16,
    //        // Отключаем все элементы управления
    //        controls: []
    //    });
    //
    //    var myGeoObjects = [];
    //
    //    // Наша метка, указываем коордианты
    //    myGeoObjects = new ymaps.Placemark([55.800151390638646,37.61400201562497],{
    //        balloonContentBody: 'Текст в балуне'
    //    },{
    //        iconLayout: 'default#image',
    //        // Путь до нашей картинки
    //        iconImageHref: 'assets/img/icon-tel.png',
    //        // Размер по ширине и высоте
    //        iconImageSize: [100, 100],
    //        // Смещение левого верхнего угла иконки относительно
    //        // её «ножки» (точки привязки).
    //        iconImageOffset: [-35, -35]
    //    });
    //
    //    var clusterer = new ymaps.Clusterer({
    //        clusterDisableClickZoom: false,
    //        clusterOpenBalloonOnClick: false
    //    });
    //
    //    clusterer.add(myGeoObjects);
    //    myMap.geoObjects.add(clusterer);
    //    // Отлючаем возможность изменения масштаба
    //    myMap.behaviors.disable('scrollZoom');
    //
    //}

    //Формы отправки
    /*Формы отправки*/

    $('.js-number').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9\(\)\+\s]/g)) {
            this.value = this.value.replace(/[^0-9\(\)\.\+\s]/g, '');
        }
    });

    $('.js-number-point').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9\(\)\.\+\s]/g)) {
            this.value = this.value.replace(/[^0-9\(\)\.\+\s]/g, '');
        }
    });

    $('.js-word, .js-input-search').bind("change keyup input click", function() {
        if (this.value.match(/[^а-яА-Яa-zA-Z\s\"\'\0-9\.\,]/g)) {
            this.value = this.value.replace(/[^а-яА-Яa-zA-Z\s\"\'\0-9\.\,]/g, '');
        }
    });


    $('.js-email').bind("change keyup input click", function() {
        if (this.value.match(/[^а-яА-Яa-zA-Z\s\"\'\0-9\.\,\@]/g)) {
            this.value = this.value.replace(/[^а-яА-Яa-zA-Z\s\"\'\0-9\.\,\@]/g, '');
        }
    });



});


