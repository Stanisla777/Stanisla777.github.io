"use strict";

$(document).ready(function () {
  $('.accordion-title').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }

    $(this).siblings('.accordion-content').slideToggle(500, 'swing');
  }); //  Модалка

  var page_overlay = '<div id="lean_overlay"></div>'; //фон затемнение

  $('.js-modal').on('click', function () {
    //Открываю модально окно по клику
    if ($('body').find('#lean_overlay').length === 0) {
      $('body').append(page_overlay);
    }

    var perem_modal = $(this).attr('data-modal');
    $('.modal[data-modal=' + perem_modal + ']').css('display', 'flex');
    $('#lean_overlay').show(); //фон затемнение
  });
  $('.close-modal, .modal__form button').on('click', function () {
    //Закрываю модальное окно по клику на крестик
    $('.modal').css('display', 'none');
    $('#lean_overlay').hide();
  });
  $('.modal').on('click', function (e) {
    //Закрываю модальное окно по клику рабочей области
    $('.modal').css('display', 'none');
    $("#lean_overlay").hide();
  }).on('click', '.modal-container-js', function (e) {
    //Запрещаю закрывать окно по клику на само молдальное окно
    e.stopPropagation();
  }); //Когда окно повится можно добавить функцию запрета скроллинга страницы

  function OffScroll() {
    var winScrollTop = $(window).scrollTop();
    $(window).bind('scroll', function () {
      $(window).scrollTop(winScrollTop);
    });
  }
});