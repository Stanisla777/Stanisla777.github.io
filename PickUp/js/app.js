"use strict";
window.onload = function () {

  //Полифиллы
  (function (ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
        if (!this)return null;
        if (this.matches(selector))return this;
        if (!this.parentElement) {
          return null;
        } else return this.parentElement.closest(selector);
      };
  })(Element.prototype);
  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function value(predicate) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var thisArg = arguments[1];
        var k = 0;
        while (k < len) {
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          }
          k++;
        }
        return undefined;
      }, configurable: true, writable: true
    });
  }


  var input = document.querySelector('.point__search input');
  var point = document.querySelectorAll('.pick-up-point');
  point = Array.prototype.slice.call(point);
  var point_total = document.querySelector('.i_count');
  var decl_text = document.querySelector('.i_decl');
  var pick_up = [{
    id: 0,
    coord: [55.008277326462675, 36.43642062698342],
    address: 'ул. Щорса 6',
    name: 'ПВЗ ТТТ',
    price: '250 руб',
    storage: '8 дней',
    time: '1-3 дня'
  }, {
    id: 1,
    coord: [55.01241106433588, 36.457944533065756],
    address: 'ул. Герцена 32',
    name: 'ПВЗ Папа',
    price: '250 руб',
    storage: '4 дня',
    time: '1-3 дня'
  }, {
    id: 2,
    coord: [55.007823145468414, 36.473017915344215],
    address: 'ул. Гагарина 10',
    name: 'ПВЗ Гого',
    price: '250 руб',
    storage: '7 дней',
    time: '1-3 дня'
  }];

  function findActivPpoint() {
    var active_point = document.querySelectorAll('.pick-up-point.active');
    active_point = Array.prototype.slice.call(active_point);
    return active_point;
  }

  function declinationWord(value, words) {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20)return words[2];
    if (num > 1 && num < 5)return words[1];
    if (num == 1)return words[0];
    return words[2];
  }

  function countPoint() {
    var point_active = document.querySelectorAll('.pick-up-point.active');
    point_active = Array.prototype.slice.call(point_active);
    var point_active_len = point_active.length;
    return point_active_len;
  }

  function textSubstitution() {
    var point_lenth = countPoint();
    var declination = declinationWord(point_lenth, ['пункт', 'пункта', 'пунктов']);
    point_total.textContent = point_lenth;
    decl_text.textContent = declination;
  }

  textSubstitution();
  input.onkeyup = function () {
    var val = this.value;
    point.forEach(function (item) {
      var address = item.querySelector('.pick-up-point__address');
      var address_val = address.textContent;
      var reg = new RegExp(val, "i");
      if (address_val.match(reg)) {
        item.classList.add('active');
        textSubstitution();
      } else {
        item.classList.remove('active');
        textSubstitution();
      }
    });
    setTimeout(function () {
      myMap.destroy();
      init()
    },500)
  };
  function findChildren(item) {
    var children = activePoint(item).querySelectorAll('.pick-up-point');
  }

  function activePoint(item, parent_item, action) {
    var parent = item.closest(parent_item);
    if (action === 'add') {
      parent.classList.add('active');
      item.classList.add('show_des');
      for (var i = 0; i <= point.length - 1; i++) {
        if (!point[i].classList.contains('show_des')) {
          point[i].setAttribute('style', 'display:none');
        }
      }
    } else {
      parent.classList.remove('active');
      for (var _i = 0; _i <= point.length - 1; _i++) {
        if (!point[_i].classList.contains('show_des')) {
          point[_i].setAttribute('style', 'display:block');
        }
        point[_i].classList.remove('show_des');
      }
    }
  }

  point.forEach(function (item) {
    item.onclick = function () {
      activePoint(this, '.point__col', 'add');
      var data_id = this.getAttribute('data-id');
      var item_point = pick_up.find(function (item) {
        return item.id == data_id;
      });
      myMap.destroy();
      init(18, item_point.coord, item_point.address, item_point.name, item_point.price, item_point.storage, item_point.time);
    };
  });
  var come_back = document.querySelector('.point__come-back');
  come_back.onclick = function () {
    activePoint(this, '.point__col', 'remove');
    myMap.destroy();
    init();
  };
  var myMap;

  function init() {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 14;
    var coord = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [55.012667, 36.461351];
    var address = arguments.length > 2 ? arguments[2] : undefined;
    var name = arguments.length > 3 ? arguments[3] : undefined;
    var price = arguments.length > 4 ? arguments[4] : undefined;
    var storage = arguments.length > 5 ? arguments[5] : undefined;
    var time = arguments.length > 6 ? arguments[6] : undefined;
    ymaps.ready(function () {
      myMap = new ymaps.Map("map", {center: coord, zoom: item, controls: ['zoomControl']});
      if (!document.querySelector('.point__col').classList.contains('active')) {
        var active_point = findActivPpoint();
        active_point.forEach(function (item, i) {
          var data_id = item.getAttribute('data-id');
          var placemark = "placemark+".concat(i);
          placemark = new ymaps.Placemark(pick_up[data_id].coord, {
            balloonContentHeader: "<span style='display: block;font-size: 14px;color: #338fec;'>".concat(pick_up[data_id].address, "</span>"),
            balloonContentBody: "<span style='display: block;width: 100%;max-width: 260px;font-size: 13px;'><b>".concat(pick_up[data_id].name, "</b> \n           \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438: <b>").concat(pick_up[data_id].price, "</b></span>\n            \u0425\u0440\u0430\u043D\u0435\u043D\u0438\u0435: <b>").concat(pick_up[data_id].storage, "</b> \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0434\u043E \u043F\u0443\u043D\u043A\u0442\u0430 <b>").concat(pick_up[data_id].time, "</b>")
          }, {'preset': 'islands#darkBlueIcon'});
          myMap.geoObjects.add(placemark);
        });
      } else {
        var placemark = new ymaps.Placemark(myMap.getCenter(), {
          balloonContentHeader: "<span style='display: block;font-size: 14px;color: #338fec;'>".concat(address, "</span>"),
          balloonContentBody: "<span style='display: block;width: 100%;max-width: 260px;font-size: 13px;'><b>".concat(name, "</b> \n         \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438: <b>").concat(price, "</b></span>\n         \u0425\u0440\u0430\u043D\u0435\u043D\u0438\u0435: <b>").concat(storage, "</b> \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0434\u043E \u043F\u0443\u043D\u043A\u0442\u0430 <b>").concat(time, "</b>")
        }, {'preset': 'islands#darkBlueIcon'});
        myMap.geoObjects.add(placemark);
        placemark.balloon.open();
      }
    });
  }

  init();
};