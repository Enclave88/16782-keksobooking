'use strict';

var pinList = document.getElementsByClassName('pin');
var dialog = document.querySelector('.dialog');
var closeDialog = document.querySelector('.dialog__close');
var FLAT_MIN_PRICE = 1000;
var HOVEL_MIN_PRICE = 0;
var PALACE_MIN_PRICE = 10000;

setHtmlValues();

// 1.1
for (var i = 0, pins = pinList.length; i < pins; i++) {
  pinList[i].addEventListener('click', function (e) {
    removeActiveClass();
    e.currentTarget.classList.add('pin--active');
    dialog.style.visibility = 'visible';
  });
}

// 2.3.собираем псевдомассив всех пинов и удаляем у них класс active
function removeActiveClass() {
  for (i = 0, pins = pinList.length; i < pins; i++) {
    pinList[i].classList.remove('pin--active');
  }
}

// 2.2.закрываем диалог и вызываем функцию удаления класса active
function hideDialog() {
  dialog.style.visibility = 'hidden';
  removeActiveClass();
}

// 2.1.событие закрытия диалога
closeDialog.addEventListener('click', hideDialog);

// синхронизация времени заезда и времени выезда
var arrival = document.querySelector('#time');
var departure = document.querySelector('#timeout');

arrival.addEventListener('click', function () {
  departure.selectedIndex = arrival.selectedIndex;
});

departure.addEventListener('click', function () {
  arrival.selectedIndex = departure.selectedIndex;
});

// минимальная стоимость
var livingRoomType = document.querySelector('#type');
var price = document.querySelector('#price');

livingRoomType.addEventListener('click', function () {
  var type = livingRoomType.selectedIndex;
  var prices = [FLAT_MIN_PRICE, HOVEL_MIN_PRICE, PALACE_MIN_PRICE];
  price.min = prices[type];
});

var roomNumber = document.querySelector('#room_number');
var capacity = document.querySelector('#capacity');
capacity.selectedIndex = 1;

roomNumber.addEventListener('click', function () {
  var roomIndex = roomNumber.selectedIndex;
  if (roomIndex === 0) {
    capacity.selectedIndex = 1;
  } else {
    capacity.selectedIndex = 0;
  }
});

capacity.addEventListener('click', function () {
  var capacityIndex = capacity.selectedIndex;
  if (capacityIndex === 0) {
    roomNumber.selectedIndex = 1;
  } else {
    roomNumber.selectedIndex = 0;
  }
});

function setHtmlValues() {
  var title = document.querySelector('#title');
  var price = document.querySelector('#price');
  title.required = 'required';
  title.pattern = '.{30,100}';
  price.required = 'required';
  price.type = 'number';
  price.min = '1000';
  price.max = '1000000';
  document.querySelector('#address').required = 'required';
}

var title = document.querySelector('#title');
title.required = 'required';
title.pattern = '.{30,100}';
document.querySelector('#price').required = 'required';
document.querySelector('#address').required = 'required';
