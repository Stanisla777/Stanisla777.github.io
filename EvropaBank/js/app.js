"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.onload = function () {
  var sidebar = document.querySelector('.sidebar');
  var content = document.querySelector('.content');
  var header = document.querySelector('.header');
  var container = document.querySelector('.container');

  document.querySelector('.header__burger').onclick = function () {
    this.classList.toggle('open');

    if (sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      content.classList.remove('active');
      header.setAttribute('style', 'margin-left:0');
    } else {
      sidebar.classList.add('active');
      content.classList.add('active');

      if (document.documentElement.clientWidth < 1820 && document.documentElement.clientWidth > 700) {
        var left = 340 - header.getBoundingClientRect().left;
        header.setAttribute('style', 'margin-left:' + left + 'px');
      }

      if (document.documentElement.clientWidth < 720) {
        header.classList.add('active');
      }
    }
  };

  document.querySelector('.sidebar__close').onclick = function () {
    sidebar.classList.remove('active');
    content.classList.remove('active');
    header.classList.remove('active');
    header.setAttribute('style', 'left:0');
  };

  var path = document.querySelectorAll('.lightning');

  var _iterator = _createForOfIteratorHelper(path),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var length = item.getTotalLength();
      item.style.strokeDasharray = length;
      item.style.strokeDashoffset = -length;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var links = document.querySelectorAll('.application__type');
  var contents = document.querySelectorAll('.wrapper-tab-content');

  for (var i = 0; i < links.length; i++) {
    (function (i) {
      var link = links[i];

      link.onclick = function () {
        var parent = link.parentNode;
        var child = parent.children;

        for (var _i = 0; _i < child.length; _i++) {
          var elem = child[_i];

          if (elem.classList.contains('active')) {
            elem.classList.remove('active');
          }
        }

        if (!this.classList.contains('active')) {
          this.classList.add('active');
        }

        for (var j = 0; j < contents.length; j++) {
          var opacity = window.getComputedStyle(contents[j]).opacity;

          if (contents[j].classList.contains('active')) {
            contents[j].classList.remove('active');
          }
        }

        contents[i].classList.add('active');
      };
    })(i);
  }

  var page_overlay = document.querySelector("#lean_overlay");
  var modal = document.querySelector('.dispatch');
  var but = document.querySelectorAll('.js-modal');
  var data = '';

  var _iterator2 = _createForOfIteratorHelper(but),
      _step2;

  try {
    var _loop = function _loop() {
      var el = _step2.value;

      el.onclick = function () {
        if (this.classList.contains('sidebar__modal')) {
          this.closest('.sidebar').classList.remove('active');
          document.querySelector('.header__burger').classList.remove('open');
        }

        data = el.getAttribute('data-modal');
        modal.classList.add(data);
        modal.setAttribute('data-animat', data);
        modal.setAttribute('style', 'display:block');
      };
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var inp = document.querySelector('.wrapper-select__input[name="phone"]');
  maskPhone('.wrapper-select__input[name="phone"]', '+7 (___) ___ __ __');
};