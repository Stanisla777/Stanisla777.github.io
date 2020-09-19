"use strict";

$(document).ready(function () {
  //Slider year
  var slide_year = $('.gallary ');
  slide_year.slick({
    infinite: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button type="button" class="slide-arrow slide-arrow-left"></button>',
    nextArrow: '<button type="button" class="slide-arrow slide-arrow-right"></button>',
    responsive: [{
      breakpoint: 660,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    }, {
      breakpoint: 450,
      settings: {
        arrows: true,
        slidesToShow: 2,
        initialSlide: 3
      }
    }, {
      breakpoint: 360,
      settings: {
        arrows: true,
        slidesToShow: 1,
        initialSlide: 3
      }
    }]
  });
  // Modal
  var coord = function coord() {
    var c = $(".modal-bodys").offset();
    $('.modal-parent .close-menu').offset({
      top: c.top - 100
    });
  };
  var galer_item = $('.gallary__item');
  var mod_cont = $('.modal-container');
  galer_item.on('click', function (e) {
    e.stopPropagation();
    $('body').addClass('overflow-hidden');
    var src_img = $(this).find('img').attr('src');
    $('.modal-parent').css('display', 'flex');
    $('#lean_overlay').show(); //фон затемнение

    $('.modal-container a').attr('href', src_img);
    $('.modal-container img').attr('src', src_img);
  });
  //big picture in the modal
  mod_cont.find('img').on('click', function () {
    if ($(this).parents(mod_cont).hasClass('non-active')) {
      $(this).parents(mod_cont).addClass('active').removeClass('non-active');
    } else {
      $(this).parents(mod_cont).removeClass('active').addClass('non-active');
    }
  });
  $('.close-menu').on('click', function () {
    $('.modal-parent').css('display', 'none');
    $('#lean_overlay').hide();
    $('body').removeClass('overflow-hidden');

    if ($(this).parents(mod_cont).hasClass('active')) {
      $(this).parents(mod_cont).removeClass('active').addClass('non-active');
    }
  });
  $('.modal-parent').on('click', function (e) {
    $('.modal-parent').css('display', 'none'); // pop_up.getNiceScroll().hide();

    $("#lean_overlay").hide();
    $('body').removeClass('overflow-hidden');

    if ($(this).find(mod_cont).hasClass('active')) {
      $(this).find(mod_cont).removeClass('active').addClass('non-active');
    }
  }).on('click', '.modal-container', function (e) {
    e.stopPropagation();
  });
  //    cursor
  window.addEventListener('load', function () {
    var O = document.getElementById('obj'),
      X = 0,
      Y = 0,
      mouseX = 0,
      mouseY = 0;
    window.addEventListener('mousemove', function (ev) {
      ev = window.event || ev;
      X = ev.pageX;
      Y = ev.pageY;
    });

    function move() {
      var p = 'px';
      O.style.left = X + p;
      O.style.top = Y + p;
      setTimeout(move, 100);
    }
    move();
  });
  //Scroll to apply
  $('.section-main__button').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('.section-submit-application').offset().top - +30
    }, {
      duration: 800,
      // тут можно контролировать скорость
      easing: "swing"
    });
  });
//  Form validation
  $('.form-page-form').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      name: {
        required: true
      },
      company_name: {
        required: true
      },
      phone: {
        required: true,
      }
    },
    messages: {
      email: {
        required: "",
        email: ""
      },
      name: {
        required: "",
      },
      company_name: {
        required: "",
      },
      phone: {
        required: "",
        digits: ""
      }
    }
  });
//  Mask
  var inp = $('.wrap-submit input[name="phone"]')
  inp.inputmask({"mask": "+7 (999) 999-99-99"});

  inp.on('input',function () {
    $(this).removeClass('error_phone')
    $(this).parents('form').find('button').attr('disabled',false)
  })
  inp.on('change',function (e) {
    $(this).addClass('error_phone')
    var count = $('.wrap-submit input[name="phone"]').val()
    var num =count.replace(/[\s(\)\_+-]+/g,'');
    if(num.length<11){
      $(this).addClass('error_phone')
      $(this).parents('form').find('button').attr('disabled',true)
    }
    else{
      $(this).removeClass('error_phone')
    }
  })
});