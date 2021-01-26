"use strict";

$(document).ready(function () {
  var page_overlay = '<div id="lean_overlay"></div>';
  $('.hover').hover(function () {
    $(this).find('.hover-item').removeClass('not-active-hover').addClass('active-hover');
  }, function () {
    $(this).find('.hover-item').removeClass('active-hover').addClass('not-active-hover');
  });

  function coorModal() {
    var elem = document.querySelector('.header__search');
    var coor = elem.getBoundingClientRect();
    $('.modal-city-confirm').css('left', coor.left);
  }

  $('.header__selected-city').on('mouseenter click', function () {
    if ($(window).width() <= 870) {
      if ($('body').find('#lean_overlay').length === 0) {
        $('body').append(page_overlay);
      }

      $('#lean_overlay').show();
    }

    if ($(window).width() > 870) {
      coorModal();
    }

    $(this).find('p.header__selected-city-name').removeClass('not-active-hover').addClass('active-hover');
    $('.modal-city-confirm').show().removeClass('animate__zoomOut').addClass('animate__zoomIn');
  });
  $('.modal-city-confirm__close').on('click', function () {
    var elem = $(this);
    closeMenuConfirm(elem);
    $('#lean_overlay').hide();
    $('.modal-city-confirm').css('z-index', 1001);
    $('p.header__selected-city-name').removeClass('active-hover').addClass('not-active-hover');
  });
  $('.modal-city-confirm__choose-another').on('click', function () {
    if ($('body').find('#lean_overlay').length === 0) {
      $('body').append(page_overlay);
    }

    var perem_modal = $(this).attr('data-modal');
    $('.parent-modal[data-modal=' + perem_modal + ']').css('display', 'flex');
    $('.modal-city-confirm').css('z-index', 0);
    $('#lean_overlay').show(); //фон затемнение
  });

  function closeModal() {
    $('.parent-modal').css('display', 'none');
    $('.modal-city-confirm').css('z-index', 1001);
  }

  function closeMenuConfirm(elem) {
    elem.parents('.modal-city-confirm').removeClass('animate__zoomIn').addClass('animate__zoomOut');
    elem.parents('.header__selected-city-wrap').find('p.header__selected-city-name').removeClass('active-hover').addClass('not-active-hover');
    setTimeout(function () {
      elem.parents('.modal-city-confirm').hide();
    }, 400);
    $('#lean_overlay').hide();
  }

  $('.close-menu').on('click', function () {
    //Закрываю модальное окно по клику на крестик
    closeModal();
    $('.moda-city-confirm').css('z-index', 1001);
  });
  $('.parent-modal').on('click', function (e) {
    //Закрываю модальное окно по клику рабочей области
    closeModal();
  }).on('click', '.modal-container-js', function (e) {
    //Запрещаю закрывать окно по клику на само молдальное окно
    e.stopPropagation();
  });
  $('.modal-city-selection__name-town').on('click', function () {
    $('.modal-city-selection__col-town .modal-city-selection__name-town').removeClass('active');
    $(this).addClass('active-hover');
    var name_town = $(this).text();
    changeTown(name_town);
    closeModal();
  });

  function changeTown(town) {
    $('.modal-city-confirm .modal-city-confirm__select-city').text(town);
  }

  $('.modal-city-confirm__button').on('click', function () {
    var name_town = $(this).parents('.modal-city-confirm').find('.modal-city-confirm__select-city').text();
    var elem = $(this);
    closeMenuConfirm(elem);
    AddCity(name_town);
    $('p.header__selected-city-name').removeClass('active-hover').addClass('not-active-hover');
    $('.moda-city-confirm').css('z-index', 1001);
  });

  function AddCity(param) {
    $('.header__selected-city-name').text(param);
  } //    Медиа запросы


  $(window).resize(function () {
    mediaResize();
  });

  function mediaResize() {
    if ($(window).width() <= 870) {
      $('.header__busket, .header__search').appendTo('.header__top-part');
      $('.header__selected-city-wrap,.header__tel,.header__information-menu').appendTo('.header__bottom-part');
      $('.header__wrap-blind-tel').remove();
      var new_el = '<div class="header__media-wrap_up"></div>';

      if ($('.header__media-wrap_up').length === 0) {
        $('.header__bottom-part').prepend(new_el);
      }

      $('.header__catalog, .header__wrap-profile-busket, .header__selected-city-wrap').appendTo('.header__media-wrap_up');
      var new_el_2 = '<div class="header__media-wrap"></div>';

      if ($('.header__media-wrap').length === 0) {
        $('.header__media-wrap_up').after(new_el_2);
      }

      $('.header__information-menu, .header__tel').appendTo('.header__media-wrap');
    }
  }

  mediaResize();
  $('.header__burger').on('click', function () {
    $('.header__top-part').addClass('active');
    $('.header__bottom-part').css('transform', 'translateX(-15px)');
  });
  $('.header__bottom-part-close').on('click', function () {
    $('.header__bottom-part').css('transform', 'translateX(-120%)');
    $('.header__top-part').removeClass('active');
  });
});