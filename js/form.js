'use strict';

var pinList = document.getElementsByClassName('pin');
var dialog = document.querySelector('.dialog');
var closeDialog = document.querySelector('.dialog__close');
var PIN_ACTIVE_CLASS = 'pin--active';
var VISIBLE_CLASS = 'visible';
var INVISIBLE_CLASS = 'invisible';
var FLAT_MIN_PRICE = 1000;
var HOVEL_MIN_PRICE = 0;
var PALACE_MIN_PRICE = 10000;
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

// ARIA
var setCloseDialogAriaPressed = function () {
  return closeDialog.setAttribute('aria-pressed', 'true');
};

var getCloseDialogAriaPressed = function () {
  return closeDialog.setAttribute('aria-pressed', 'false');
};

// 1.1
for (var i = 0, pins = pinList.length; i < pins; i++) {
  pinList[i].addEventListener('click', function (e) {
    removeActiveClass();
    e.currentTarget.classList.add(PIN_ACTIVE_CLASS);
    dialog.classList.remove(INVISIBLE_CLASS);
    dialog.classList.add(VISIBLE_CLASS);
  });
}

// 2.3.собираем псевдомассив всех пинов и удаляем у них класс active
var removeActiveClass = function () {
  for (i = 0, pins = pinList.length; i < pins; i++) {
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

var hideHandling = function () {
  hideDialog();
  setCloseDialogAriaPressed();
};

closeDialog.addEventListener('keydown', function (event) {
  if (event.keyCode && event.keyCode === ENTER_KEY_CODE) {
    hideHandling();
    document.addEventListener('keydown', function (evt) {
      debugger;
      if(evt.keyCode && evt.keyCode === ESCAPE_KEY_CODE) {
        hideHandling();
      }
    })
  }
});

var title = document.querySelector('#title');

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
