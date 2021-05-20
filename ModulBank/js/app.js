"use strict";

if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; 

    padString = String(typeof padString !== 'undefined' ? padString : ' ');

    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;

      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); 
      }

      return padString.slice(0, targetLength) + String(this);
    }
  };
}

if (!String.prototype.repeat) {
  String.prototype.repeat = function (count) {
    'use strict';

    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }

    var str = '' + this;
    count = +count;

    if (count != count) {
      count = 0;
    }

    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }

    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }

    count = Math.floor(count);

    if (str.length == 0 || count == 0) {
      return '';
    } 


    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }

    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));

    while (count) {
      str += str;
      count--;
    }

    str += str.substring(0, maxCount - str.length);
    return str;
  };
}

window.onload = function () {
  var button = document.querySelectorAll('.assignment__title');
  button = Array.prototype.slice.call(button);
  button.forEach(function (item) {
    item.addEventListener('click', function () {
      var container = this.nextElementSibling;
      var container_child = container.querySelector('.assignment__content');
      var parent = this.parentNode;
      var height_el = wrapHeiht(this);
      var height_area = contentHeiht(height_el, this);
      var val_diag = container.querySelectorAll('.information__indicators-val');
      val_diag = Array.prototype.slice.call(val_diag);
      var segment = reeturnSegment(container);
      overflowBody();
      closeIcon(this);

      if (container.classList.contains('active')) {
        classUnActiveAssig(parent);
        container.style.maxHeight = 0;
        container.classList.remove('active');
      } else {
        classActiveAssig(parent);
        container.classList.add('active');
        container.style.maxHeight = height_el + 'px';
        container_child.style.maxHeight = height_area + 'px';
        numberAnimate(val_diag);
        diagramAdd(segment);
      }
    });
  });

  function overflowBody() {
    document.body.classList.toggle('active');
  }

  function closeIcon(el) {
    el.querySelector('.assignment__close').classList.toggle('active');
  }

  function reeturnSegment(elem) {
    var segment = elem.querySelectorAll('.donut-segment');
    segment = Array.prototype.slice.call(segment);
    return segment;
  }

  function masiveParent(elem) {
    var head_parent = elem.parentNode;
    var massive_el = head_parent.querySelectorAll('.assignment');
    massive_el = Array.prototype.slice.call(massive_el);
    return massive_el;
  }

  function classActiveAssig(elem) {
    elem.classList.add('active');
    var massive_el = masiveParent(elem);
    massive_el.forEach(function (item) {
      if (!item.classList.contains('active')) {
        item.classList.add('unactive');
      }
    });
  }

  function classUnActiveAssig(elem) {
    var massive_el = masiveParent(elem);
    massive_el.forEach(function (item) {
      item.classList.remove('active');
      item.classList.remove('unactive');
    });
  }

  var account = document.querySelectorAll('.account-number');
  var new_account = Array.prototype.slice.call(account);
  new_account.forEach(function (item) {
    var val = item.textContent;
    var new_val = lastDigits(val);
    item.textContent = new_val;
  });

  function lastDigits(number) {
    var string = String(number);
    var sliced = string.slice(-6);
    var maska = String(sliced).padStart(string.length, "*");
    return maska;
  }

  function wrapHeiht(title) {
    var window_height = window.innerHeight;
    var header_height = document.querySelector('.header').clientHeight;
    var title_height = title.clientHeight;
    var height_el = window_height - header_height - title_height;
    return height_el;
  }

  function contentHeiht(height) {
    var height_footer = document.querySelector('.assignment__footer').clientHeight;
    var header_height = document.querySelector('.header').clientHeight;
    var height_area = height - height_footer;
    return height_area;
  }

  function diagramAdd(elem) {
    elem.forEach(function (item) {
      item.classList.add('active');
    });
  }

  function numberAnimate(elem) {
    elem.forEach(function (item) {
      var val = item.textContent;
      outNum(val, item);
    });
  }

  function outNum(num, elem) {
    var step = 1;
    var e = elem;
    var n = 0;
    var interval = setInterval(function () {
      n = n + step;

      if (n == num) {
        clearInterval(interval);
      }

      e.innerHTML = n;
    }, 20);
  }
};