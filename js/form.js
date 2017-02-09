'use strict';

// selectors
var pinList = document.getElementsByClassName('pin');
var pin = document.querySelector('.pin');
var rounded = document.querySelector('.rounded');
var dialog = document.querySelector('.dialog');
var map = document.querySelector('.tokyo__pin-map');
var closeDialog = document.querySelector('.dialog__close');
var livingRoomType = document.querySelector('#type');
var price = document.querySelector('#price');
var roomNumber = document.querySelector('#room_number');
var capacity = document.querySelector('#capacity');
var title = document.querySelector('#title');
// strings
var PIN_ACTIVE_CLASS = 'pin--active';
var VISIBLE_CLASS = 'visible';
var INVISIBLE_CLASS = 'invisible';
// numbers
var FLAT_MIN_PRICE = 1000;
var HOVEL_MIN_PRICE = 0;
var PALACE_MIN_PRICE = 10000;
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;
// синхронизация времени заезда и времени выезда
var arrival = document.querySelector('#time');
var departure = document.querySelector('#timeout');

// ARIA
var setCloseDialogAriaPressed = function () {
  return closeDialog.setAttribute('aria-pressed', 'true');
};

// 2.3.собираем псевдомассив всех пинов и удаляем у них класс active
var removeActiveClass = function () {
  for (var i = 0, pins = pinList.length; i < pins; i++) {
    pinList[i].classList.remove(PIN_ACTIVE_CLASS);
  }
};

// 2.2.закрываем диалог и вызываем функцию удаления класса active
var hideDialog = function () {
  dialog.classList.add(INVISIBLE_CLASS);
  removeActiveClass();
};

// 2.1.событие закрытия диалога
closeDialog.addEventListener('click', hideDialog);

var hideHandling = function () {
  hideDialog();
  setCloseDialogAriaPressed();
};

map.addEventListener('click', function (event) {
  for (var i = 0, pins = pinList.length; i < pins; i++) {
    if (event.target === pinList[i]) {
      visibleAfterAction(event.target);
    }
    visibleAfterAction(event.target.parentNode);
  }
});

map.addEventListener('keydown', function (event) {
  var key = event.keyCode;
  if (key && key === ENTER_KEY_CODE) {
    visibleAfterAction(event.target);
  }
  if (key && key === ESCAPE_KEY_CODE) {
    hideHandling();
  }
});

var visibleAfterAction = function (node) {
  removeActiveClass();
  dialog.classList.remove(INVISIBLE_CLASS);
  node.classList.add(PIN_ACTIVE_CLASS);
  dialog.classList.add(VISIBLE_CLASS);
};

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
