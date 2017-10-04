

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

    $('.then-remove-5').on('click',function(){
        event.preventDefault();
        location.replace("information-added.html")
    });
    $('.then-remove-6').on('click',function(){
        event.preventDefault();
        location.replace("profile-klient.html")
    });
    $('.then-remove-7').on('click',function(){
        event.preventDefault();
        location.replace("mane-page.html")
    });

    $('.then-remove-9').on('click',function(){
        event.preventDefault();
        location.replace("shares.html")
    });
    $('.then-remove-10').on('click',function(){
        event.preventDefault();
        location.replace("mane-page-subscription-end.html")
    });





    /*Снять все чекбоксы*/

    $(".js-pull-off-checbox").on("click",function () {
            $(this).parents(".header").siblings(".main-content-brand").find(".list-filters input").prop('checked', false);
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
    //
    //if($('.radio-2').is(':checked'))
    //{
    //    alert('Приавк');
    //}

    $(".radio-2").click(function(){
        $({animatedVal: 0}).animate({animatedVal: 20}, {
                duration: 2000,
                easing: "swing",
                step: function() {
                    $(".dial").val(Math.ceil(this.animatedVal)).trigger("change");
                }
            });
    });

    $(".radio-1").click(function(){
        $({animatedVal: 0}).animate({animatedVal: c}, {
            duration: 2000,
            easing: "swing",
            step: function() {
                $(".dial").val(Math.ceil(this.animatedVal)).trigger("change");
            }
        });
    });





    /*Модальное окно*/

    var text;

    //Получаю текущий год
    Data = new Date();
    year = Data.getFullYear();



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
        setTimeout('location.replace("orders.html")',2000);


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

    //Вызов поп ап Вы выполнили задание?
    $(".js-question-about-task").on("click",function(){
        event.preventDefault(); /*Это убрать, так как окощко о том, что задание выполнено будет вызываться через ajax*/
        $("#modal-question-about-task").modal('show');
    });

    //Вызов поп ап Да, выполнили задание?
    $(".yes-perform").on("click",function(){
        event.preventDefault(); /*Это убрать, так как окощко о том, что задание выполнено будет вызываться через ajax*/
        $("#modal-order-published-q").modal('show');
        $("#modal-question-about-task").modal('hide');
        setTimeout('location.replace("orders.html")',2000);
    });


    //Вызов модалки селекты

    //$(".js-modal").on("click",function(){
    //    $("#modal-select").modal('show');
    //});

    /*По клику на кнопку  делать клон поля вид услуги*/

    //$(".js-perform-action").click(function(){
    //    var input = '<div class="js-modal wrapper-input-choice border-grey mar-top-10 cur-pointer">' +
    //        '<input disabled class="type-of-service" type="text" name="type_service">' +
    //        '<div class="icon-search-carat-2"></div></div>';
    //
    //    $(input).appendTo(".wrapper-inp");
    //
    //});

    var title= {
        title_marka: "Марка",
        title_model: "Модель",
        title_engine: "Двигатель",
        title_year: "Год выпуска",
        title_transmission: "Коробка передач",
        title_type_service: "Тип сервиса",
        title_wishes_spare: "Пожелания по запчастям",
        title_type_service: "Вид услуги",
        title_weekend: "Выходные",
        title_category: "Категория",
        title_type_of_service: "Вид услуги"

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
        var category = [
            { name: "Услуги"},
            { name: "Неуслуги"},
            { name: "Что-то ещё"}
        ];
        var type_of_service = [
            { name: "Диагностика кондиционера"},
            { name: "Диагностика мотора"},
            { name: "Диагностика шин"}
        ];


    function ret(){

        $(".modal-active-item").on("click",function(){
            //$(this).removeClass("active-item-modal");
            //$(this).find(".js-name-item").addClass("active-item-modal");
            text =  $(this).find(".js-name-item, .year-service").text();
            $("#modal-select").modal('hide');

        })
    }

    $(".js-modal").on("click",function(){
        $("#modal-select").modal('show');

        //Вэтих условиях используется подстановка заголовка модалки, а также данных в шаблон, который будет другим
        //В условиях так же стоит будет в модалке окно поиска или нет.

        if($(this).find("input").hasClass("marka")){
            $("#modal-select .modal-header h1").text(title.title_marka);
            $("#clientTemplate-2").tmpl(marka).appendTo("#modal-select .js-wrapper-services" );
        }
        if($(this).find("input").hasClass("model")){
            $("#modal-select .modal-header h1").text(title.title_model);
            $("#clientTemplate").tmpl(model).appendTo("#modal-select .js-wrapper-services" );
        }

        if($(this).find("input").hasClass("engine")){
            $("#modal-select .modal-header h1").text(title.title_engine);
            $(".wrapper-input-search").hide();
            $("#clientTemplate").tmpl(engine).appendTo("#modal-select .js-wrapper-services" );
        }

        if($(this).find("input").hasClass("type-of-service")){
            $("#modal-select .modal-header h1").text(title.title_type_service);
            $("#clientTemplate").tmpl(type_service).appendTo("#modal-select .js-wrapper-services" );
        }

        if($(this).find("input").hasClass("transmission")){
            $("#modal-select .modal-header h1").text(title.title_transmission);
            $(".wrapper-input-search").hide();
            $("#clientTemplate").tmpl(transmission).appendTo("#modal-select .js-wrapper-services" );
        }

        if($(this).find("input").hasClass("wishes-spare")){
            $("#modal-select .modal-header h1").text(title.title_wishes_spare);
            $("#clientTemplate").tmpl(wishes_spare).appendTo("#modal-select .js-wrapper-services" );
        }

        if($(this).find("input").hasClass("category")){
            $("#modal-select .modal-header h1").text(title.title_category);
            $("#clientTemplate").tmpl(category).appendTo("#modal-select .js-wrapper-services" );
        }
        if($(this).find("input").hasClass("type-of-service")){
            $("#modal-select .modal-header h1").text(title.title_category);
            $("#clientTemplate").tmpl(type_of_service).appendTo("#modal-select .js-wrapper-services" );
        }

        /*А это статичная инфа о годах, её не убирать*/
        if($(this).find("input").hasClass("year")){
            $("#modal-select .modal-header h1").text(title.title_year);
            for ( i = year; i > year-50; i--) {
                $('<li class="modal-active-item js-name-brand text-center">'
                +'<span class="year-service">'+i+'</span>').appendTo("#modal-select .js-wrapper-services")
            }
        }

        if($(this).find("input").hasClass("weekend")){
            $("#modal-select .modal-header h1").text(title.title_weekend);
            $(".wrapper-input-search").hide();
            $('<li class="modal-active-item js-name-brand text-center">'
            +'<span class="year-service">Да</span>'+'<li class="modal-active-item js-name-brand text-center">'
            +'<span class="year-service">Нет</span>').appendTo("#modal-select .js-wrapper-services").appendTo("#modal-characteristics .modal-body")

        }




        $(this).find("input").addClass("active-item-m");


        ret();

        $("#modal-select").on('hidden.bs.modal', function(){
            $(".active-item-m").val(text);
            $(".js-modal").find("input").removeClass("active-item-m");
            text = "";
            $(this).find(".modal-body ul.js-wrapper-services").html("");
            $("input.js-input-search").val("");
            $(".wrapper-input-search").show();
        });
    });

    $(".js-modal").on("click",function(){
        $("#modal-select").modal('show');
        if($(this).find("p").hasClass("marka")){
            $("#modal-select .modal-header h1").text(title.title_marka);
            $("#clientTemplate-2").tmpl(marka).appendTo("#modal-select .js-wrapper-services" );
        }



    });

    //var elem = '<div class="js-modal wrapper-input-choice border-grey mar-top-10 cur-pointer">' +
    //    '<input disabled class="type-of-service" type="text" name="type_service">' +
    //    '<div class="icon-search-carat-2"></div></div>'


    //var elem = $('<div class="js-modal wrapper-input-choice border-grey mar-top-10 cur-pointer">' +
    //'<input disabled class="type-of-service" type="text" name="type_service">' +
    //'<div class="icon-search-carat-2"></div></div>').clone();

    $(".tabssss").on('click','.js-perform-action',function(e){

        var elem = $(this).siblings('.wrapper-inp').find('.wrapper-input-choice').last().clone(true);
        $(elem).find('input').val("");
        $(elem).appendTo(".wrapper-inp");

    });

    //Услуги - аккордеон
    ! function(i) {
        var o, n;
        i(".title_block").on("click", function() {
            o = i(this).parents(".accordion_item"), n = o.find(".info"),
                o.hasClass("active_block") ? (o.removeClass("active_block"),
                    n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
                    o.siblings(".active_block").removeClass("active_block").children(
                        ".info").stop(!0, !0).slideUp())



        })

    }(jQuery);

    $(".js-reset").on("click",function () {
        $("li.active_block input[type='checkbox']").prop('checked', false);
    });


    //Задаю циклом id инпутам и лэйблам

    $('.checkbox-green').each(function(i) {
        $(this).attr('id', 'box'+(i+1))
    });

    $('.stylized-checkbox').each(function(i) {
        $(this).attr('for', 'box'+(i+1))
    });

//Подписка считаю в месяц

    $('.wrapper-subscription-price').each(function(i) {
       var price = $(this).find(".subscription-price-price").text();
        var month = $(this).find(".subscription-price-time").text();
        var price_month = price/month;
        price = parseInt(price);
        month = parseInt(month);
        var price_month = price/month;
        price_month = price_month.toFixed();
        $(this).find(".price-month").text(price_month + " p")
    });

    var month;
    var price;

    $('.wrapper-subscription-price').on('click',function(){
        $(this).siblings('.wrapper-subscription-price').removeClass('border-green-2')
        $(this).addClass('border-green-2');
        month = $(this).find('.subscription-price-time').text();
        price = $(this).find('.subscription-price-price').text();
        $('.formed-price .tariff-plan').text(month+' / '+price);
    });





    //var price = $(".subscription-price-price").text();
    //alert(price);














    //Резиновый textarea
    var textarea= $('#textarea');

    textarea.height(textarea.get(0).scrollHeight);

    textarea.on('keyup input', function(){
        var $this = $(this);
        $this.height(1);
        $this.height(this.scrollHeight);
    });


    //В профиле выбор марок












});


