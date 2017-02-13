'use strict';

var initializePins = function () {
  var pinList = document.getElementsByClassName('pin');
  var dialog = document.querySelector('.dialog');
  var map = document.querySelector('.tokyo__pin-map');
  var closeDialog = document.querySelector('.dialog__close');
  var PIN_ACTIVE_CLASS = 'pin--active';
  var VISIBLE_CLASS = 'visible';
  var INVISIBLE_CLASS = 'invisible';

  // ARIA
  var setCloseDialogAriaPressed = function () {
    return closeDialog.setAttribute('aria-pressed', 'true');
  };

  // собираем псевдомассив всех пинов и удаляем у них класс active
  var removeActiveClass = function () {
    for (var i = 0, pins = pinList.length; i < pins; i++) {
      pinList[i].classList.remove(PIN_ACTIVE_CLASS);
    }
  };

  // закрываем диалог и вызываем функцию удаления класса active
  var hideDialog = function () {
    dialog.classList.add(INVISIBLE_CLASS);
    removeActiveClass();
  };

  // событие закрытия диалога
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
};
