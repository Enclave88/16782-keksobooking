'use strict';

var pinList = document.getElementsByClassName('pin');
var dialog = document.querySelector('.dialog');
var closeDialog = document.querySelector('.dialog__close');

// 1.1
for (var i = 0, pins = pinList.length; i < pins; i++) {
  pinList[i].addEventListener('click', function () {
    removeActiveClass();
    this.classList.add('pin--active');
    dialog.style.visibility = 'visible';
  });
}

// 2.3.собираем псевдомассив всех пинов и удаляем у них класс active
function removeActiveClass () {
  for (i = 0, pins = pinList.length; i < pins; i++) {
    pinList[i].classList.remove('pin--active');
  }
}

// 2.2.закрываем диалог и вызываем функцию удаления класса active
function hideDialog () {
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
  switch (type) {
    case 1:
      price.min = 0;
      break;
    case 2:
      price.min = 10000;
      break;
    default:
      price.min = 1000;
      break;
  }
});

var roomNumber = document.querySelector('#room_number');
var capacity = document.querySelector('#capacity');
capacity.selectedIndex = 1;

roomNumber.addEventListener('click', function () {
  var roomIndex = roomNumber.selectedIndex;
  roomIndex === 0 ? capacity.selectedIndex = 1 : capacity.selectedIndex = 0;
});

capacity.addEventListener('click', function () {
  var capacityIndex = capacity.selectedIndex;
  capacityIndex === 0 ? roomNumber.selectedIndex = 1 : roomNumber.selectedIndex = 0;
});
