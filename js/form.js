'use strict';

// синхронизация времени заезда и времени выезда
var arrival = document.querySelector('#time');
var departure = document.querySelector('#timeout');
var type = [0, 1, 2];
// numbers
var FLAT_MIN_PRICE = 1000;
var HOVEL_MIN_PRICE = 0;
var PALACE_MIN_PRICE = 10000;
var prices = [FLAT_MIN_PRICE, HOVEL_MIN_PRICE, PALACE_MIN_PRICE];

window.initializePins();
window.synchronizeFields(arrival, departure, type, prices);
