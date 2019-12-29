
$(document).ready(function ($) {

    //Открываю модально окно по клику

    $('.js-modal').on('click',function(){
        let perem_modal = $(this).attr('data-modal');

        $('.modal-parent[data-modal='+perem_modal+']').css('display','block');
        $('#lean_overlay').show();//фон затемнение

        address_substitution($(this).find('img'))
    });

    $('.modal-parent .close-menu').on('click',function(){//Закрываю модальное окно по клику на крестик
        $('.modal-parent').css('display','none');
        $('#lean_overlay').hide();
    });


    $('.modal-parent').on('click', function (e) {//Закрываю модальное окно по клику рабочей области
        $('.modal-parent').css('display', 'none');
        $("#lean_overlay").hide();
    }).on('click', '.modal-container-js', function (e) {//Запрещаю закрывать окно по клику на само молдальное окно
        e.stopPropagation();



    });

    function address_substitution(elem){
        let attrib  = $(elem).attr('src');
        $('.modal-goods .modal-body img').attr('src',attrib)
    }

    // function modal_window(elem){
    //     $(elem).on('click',function(){
    //         let perem_modal = $(this).attr('data-modal');
    //
    //         $('.modal-parent[data-modal='+perem_modal+']').css('display','block');
    //         $('#lean_overlay-2').show();//фон затемнение
    //     });
    //
    //     $('.modal-auction__close-js').on('click',function(){//Закрываю модальное окно по клику на крестик
    //         $('.modal-parent').css('display','none');
    //         $('#lean_overlay-2').hide();
    //     });
    //
    //
    //     $('.modal-parent').on('click', function (e) {//Закрываю модальное окно по клику рабочей области
    //         $('.modal-parent').css('display', 'none');
    //         $("#lean_overlay-2").hide();
    //     }).on('click', '.modal-container-js', function (e) {//Запрещаю закрывать окно по клику на само молдальное окно
    //         e.stopPropagation();
    //
    //     });
    // }

    /*Форматирование цен*/

    $('.prise-js').each(function () {
        let prise = $(this).text();
        let new_price = prise.replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, "$1 ");
        $(this).text(new_price)

    })

    /*Запрет вводить в input слова*/

    $('.filter-price__display input').on("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });





});


