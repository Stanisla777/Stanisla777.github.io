"use strict";

window.onload = function () {
  var page_overlay = document.querySelector("#lean_overlay");
  var modal = document.querySelector('.modal');
  var but = document.querySelectorAll('.js-modal');

  for (var el = 0; el < but.length; el++) {
    but[el].onclick = function () {
      document.body.classList.add('body-overflow');
      page_overlay.setAttribute('style', 'display:block');
      modal.setAttribute('style', 'display:flex');
    };
  }

  document.querySelector('.close-modal').onclick = function () {
    page_overlay.setAttribute('style', 'display:none');
    modal.setAttribute('style', 'display:none');
    document.body.classList.remove('body-overflow');
  };

  var price = document.querySelectorAll('.price');

  for (var item = 0; item < price.length; item++) {
    var val = price[item].textContent;
    var new_price = val.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    price[item].textContent = new_price;
  }
};