"use strict";
$(document).ready(function () {
  $('.accordion-title').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
    $(this).siblings('.accordion-content').slideToggle(500, 'swing');
  });
  var page_overlay = '<div id="lean_overlay"></div>'; //фон затемнение
  $('.js-modal').on('click', function () {
    //Открываю модально окно по клику
    if ($('body').find('#lean_overlay').length === 0) {
      $('body').append(page_overlay);
    }
    var perem_modal = $(this).attr('data-modal');
    $('.modal[data-modal=' + perem_modal + ']').css('display', 'flex');
    $('#lean_overlay').show();
    OffScroll();
  });
  $('.close-modal, .modal__form button').on('click', function () {
    //Закрываю модальное окно по клику на крестик
    $('.modal').css('display', 'none');
    $('#lean_overlay').hide();
    $(window).unbind('scroll');
  });
  $('.modal').on('click', function (e) {
    $('.modal').css('display', 'none');
    $("#lean_overlay").hide();
    $(window).unbind('scroll');
  }).on('click', '.modal-container-js', function (e) {
    e.stopPropagation();
  });

  function OffScroll() {
    var winScrollTop = $(window).scrollTop();
    $(window).bind('scroll', function () {
      $(window).scrollTop(winScrollTop);
    });
  }
});