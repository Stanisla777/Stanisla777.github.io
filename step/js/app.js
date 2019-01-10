

$(document).ready(function ($) {

//Добавить-------------------------

    //Медиа главного меню

    $('.main-site-bar__icon').on('click',function () {

        if($(this).siblings('.main-site-bar__list').hasClass('main-site-bar__list-active')){
            $(this).find('.close-burger').css('border-bottom','3px solid #fff').removeClass('close-cross');
            $(this).siblings('.main-site-bar__list').css('display','none').removeClass('main-site-bar__list-active');
        }
        else {
            $(this).find('.close-burger').css('border','0').addClass('close-cross');
            $(this).siblings('.main-site-bar__list').css('display','flex').addClass('main-site-bar__list-active');
        }


    })


});


