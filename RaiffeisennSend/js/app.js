$(document).ready(function() {

    $('.accordion-item__title').on('click',function(){

        let perem =$(this).parents('.accordion-item').siblings('.accordion-item').find('.accordion-item__cross');
        let per =$(this).siblings('.accordion-item__description');
        let cross = $(this).find('.accordion-item__cross')
        perem.removeClass('active')
        if($(cross).hasClass('active')){
            $(cross).removeClass('active')
        }
        else {
            $(cross).addClass('active')
        }
        $(this).siblings('.accordion-item__description').slideToggle(500,'swing');
        $('.accordion-item__description').not(per).slideUp(500,'swing');
    });

});
