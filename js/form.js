'use strict';

window.initializePins();

// selectors
var livingRoomType = document.querySelector('#type');
var price = document.querySelector('#price');
var roomNumber = document.querySelector('#room_number');
var capacity = document.querySelector('#capacity');
var title = document.querySelector('#title');
// numbers
var FLAT_MIN_PRICE = 1000;
var HOVEL_MIN_PRICE = 0;
var PALACE_MIN_PRICE = 10000;
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;
// синхронизация времени заезда и времени выезда
var arrival = document.querySelector('#time');
var departure = document.querySelector('#timeout');

// прибытие
arrival.addEventListener('click', function () {
  departure.selectedIndex = arrival.selectedIndex;
});

// отбытие
departure.addEventListener('click', function () {
  arrival.selectedIndex = departure.selectedIndex;
});

// минимальная стоимость
livingRoomType.addEventListener('click', function () {
  var type = livingRoomType.selectedIndex;
  var prices = [FLAT_MIN_PRICE, HOVEL_MIN_PRICE, PALACE_MIN_PRICE];
  price.min = prices[type];
});

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
  title.required = 'required';
  title.pattern = '.{30,100}';
  price.required = 'required';
  price.type = 'number';
  price.min = '1000';
  price.max = '1000000';
  document.querySelector('#address').required = 'required';
}

setHtmlValues();
