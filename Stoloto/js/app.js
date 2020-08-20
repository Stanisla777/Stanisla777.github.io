

$(document).ready(function ($) {

//всплывающая подсказка в хедере

  $('.count__haniel')
    .popup({
      popup: $('.pop-help__haniel'),
      on: 'hover',
      position: 'bottom center',
    });
  $('.count__cup')
    .popup({
      popup: $('.pop-help__cup'),
      on: 'hover',
      position: 'bottom center',
    });
  //Высота заголовка
  $(window).resize(function(){
    // fun()
  });
  let fun = function () {
    let height_title = $('.wrap-title').height()
    $('.earth').css('top',height_title)
  }

  //Анимированный текст

  $('.wrap-animate__text').each(function () {
    let str = $(this).find('p').text();
    let arr = str.split('');
    let that = this;

    arr.forEach(function (item, i, arr) {
      $(that).find("p").append('<span class="span-animate">' + item + '</span>')
    });

  });
  let elem_1 = $('.wrap-animate-1')


  function animateTitle() {
    animateTitle_1()
    animateTitle_2()
  }
  setInterval(animateTitle,8000)

  function animateTitle_1() {
    let elem_1 = $('.wrap-animate-1')
    if(elem_1.hasClass('active')){
      elem_1.removeClass('active')
      elem_1.fadeOut()
    }
    else {
      elem_1.addClass('active')
      elem_1.fadeIn(1000)
    }
  }
  function animateTitle_2() {
    let elem_2 = $('.wrap-animate-2')
    if(elem_2.hasClass('active')){
      elem_2.removeClass('active')
      elem_2.fadeOut()
    }
    else {
      elem_2.addClass('active')
      elem_2.fadeIn(1000)
    }
  }

//Надпись Только для участников
  function posText() {
    if ($(window).width() >= 800) {
      let off_img = $('.earth img:first-child').offset();
      let wid_img = $('.earth img:first-child').width();
      $('.wrap-participants-action').offset({left: off_img.left + wid_img - 10})
    }
  }
  posText()
  $(window).resize(function () {
    setTimeout(posText, 200)
  });

  //Скролл к форме
  var hei = 0
  $('.scroll-pump-up,.leave-phone span,.express-desire-button,.header__action').click(function (event) {
    hei = $('.header').outerHeight(true)
    event.preventDefault();
    $('html, body').animate({scrollTop: $('.time-act').offset().top - hei}, 500);
  });

  //Класс Хедеру

  var scr = $(window).scrollTop();
  if (scr > 0) {
    $('.header').addClass('fixed');
  }
  else {
    $('.header').removeClass('fixed');
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });

  //Форма с номером

  $('.ui.dropdown').dropdown();
  $('#phonebox').inputmask("+7(999)9999999");
  $('.selection.dropdown input').change(function () {
    var contry = $(this).val();

    if (contry == 'ru') $('#phonebox').inputmask("+7(999)9999999");
    if (contry == 'uk') $('#phonebox').inputmask("+380999999999");
    if (contry == 'kz') $('#phonebox').inputmask("+7(999)9999999");
    if (contry == 'bl') $('#phonebox').inputmask("+375999999999");
    if (contry == 'tj') $('#phonebox').inputmask("+\\9\\92999999999");
    if (contry == 'ml') $('#phonebox').inputmask("+373999999999");
    if (contry == 'uz') $('#phonebox').inputmask("+\\9\\98(99)9999999");
    if (contry == 'ar') $('#phonebox').inputmask("+374999999999");
    if (contry == 'ge') $('#phonebox').inputmask("+\\9\\95999999999");
    if (contry == 'az') $('#phonebox').inputmask("+\\9\\94999999999");
  })

  $('.phone_wrap > input').focus(function () {
    $('.phone_wrap').addClass('focus');
  })
  $('.phone_wrap > input').blur(function () {
    $('.phone_wrap').removeClass('focus');
  })

  $.validator.addMethod(
    "phone",
    function (value, element) {
      return /\+[\d\(\)]+$/.test(value);
    },
    "Please check your input."
  );

  $('#p_form').validate({
    submitHandler: function (form) {
      var action = $(form).attr('action');
      var data = $(form).serialize();
      $(form).find(".btn").addClass('loading');

      $.ajax({
        url: action,
        data: data,
        method: 'POST',
        success: function (data) {
          $(form).find(".btn").removeClass('loading');
          $('#main_form .main_title').html("\n" +
            "Вы уже участвуете в акции. Покупайте билеты и улучшайте позицию в рейтинге!")

          $('.already .inputbox').text($('#phonebox').val());
          $('.already .flg').addClass($('.ui.selection.dropdown input').val());

          if (data != 'ok' && data) {
            $('.your_pos').html(data);
          }

          $('#p_form').hide();
          $('.already').show();
          var support_replace_url = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/(iPod|iPhone|iPad|WebApps\/.+CFNetwork)/)

          if (support_replace_url)
            history.pushState(null, null, '/')
        }
      })
    },
    rules: {
      phone: {
        required: true,
        phone: true
      }
    },
    messages: {
      email: {
        required: 'Вы уже участвуете в акции. Покупайте билеты и улучшайте позицию в рейтинге!',
        phone: 'Укажите номер телефона'
      }
    },
    errorPlacement: function (error, element) {
      element.parent().removeClass('success').addClass('error');
    },
    success: function (element) {
      $('#p_form .phone_wrap').removeClass('error').addClass('success');
    }
  });


  //Слайдер
  $('.games').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slide-arrow slide-arrow-left"></button>',
    nextArrow: '<button type="button" class="slide-arrow slide-arrow-right"></button>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });


  //Колонки одинаковой высоты
  function heightCol() {
    var maxHeight = 0;
    $(".terms-action__img").each(function () {
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });
    $(".terms-action__img").height(maxHeight);
  }
  setTimeout(heightCol,1000)



  //Папаллакс гири
  var folder = $('.earth img:first-child');
  $(window).resize(function () {
    $('.earth img:first-child').css('transform', 'translate(-50%, -109%)')
    paral()
  });
  let paral = function () {
    $(folder).paroller({
      factor: -0.1,            // multiplier for scrolling speed and offset
      factorXs: -0.05,          // multiplier for scrolling speed and offset if window width is <576px
      factorSm: -0.05,          // multiplier for scrolling speed and offset if window width is <=768px
      factorMd: -0.05,          // multiplier for scrolling speed and offset if window width is <=1024px
      factorLg: -0.05,          // multiplier for scrolling speed and offset
      type: 'foreground',     // background, foreground
      direction: 'vertical', // vertical, horizontal
      transition: 'transform 0.7s lear' // CSS transition
    });
  }
  paral()



  function isMobile () {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))
      return true;
  }

  if(!isMobile()) {
    let img = './img/fonvideo.jpg'
    $(".video_bg").vide({
      mp4: './img/video3.mp4',
      webm: './img/video3.webm',
      ogv: './img/video3.ogv',
      // poster: img
    },
      {

      })
  }
  $('.video_bg').find('video').attr('pip',false)





  //Видео




























  //Меняющийся блок
  function we(e) {
    var words = document.getElementsByClassName(e)


    wordArray = [],
      currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }

    function changeWord() {
      var cw = wordArray[currentWord];
      var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
      for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }

      for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
      }

      currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    }

    function animateLetterOut(cw, i) {
      setTimeout(function() {
        cw[i].className = 'letter out';
      }, i*80);
    }

    function animateLetterIn(nw, i) {
      setTimeout(function() {
        nw[i].className = 'letter in';
      }, 340+(i*80));
    }

    function splitLetters(word) {
      var content = word.innerHTML;
      word.innerHTML = '';
      var letters = [];
      for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }
      wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 4000);

  }

  function wer(e) {
    var wordss = document.getElementsByClassName(e)


    wordArrayZ = [],
      currentWordR = 0;

    wordss[currentWordR].style.opacity = 1;
    for (var i = 0; i < wordss.length; i++) {
      splitLetters(wordss[i]);
    }

    function changeWord() {
      var cw = wordArrayZ[currentWordR];
      var nw = currentWordR == wordss.length-1 ? wordArrayZ[0] : wordArrayZ[currentWordR+1];
      for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }

      for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
      }

      currentWordR = (currentWordR == wordArrayZ.length-1) ? 0 : currentWordR+1;
    }

    function animateLetterOut(cw, i) {
      setTimeout(function() {
        cw[i].className = 'letter out';
      }, i*80);
    }

    function animateLetterIn(nw, i) {
      setTimeout(function() {
        nw[i].className = 'letter in';
      }, 340+(i*80));
    }

    function splitLetters(word) {
      var content = word.innerHTML;
      word.innerHTML = '';
      var letters = [];
      for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }
      wordArrayZ.push(letters);
    }

    changeWord();
    setInterval(changeWord, 4000);

  }

  // we('word')
  // wer('word-2')







});


