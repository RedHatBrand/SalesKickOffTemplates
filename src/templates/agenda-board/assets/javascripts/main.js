(function (global) {
  var __slice = [].slice;

  var days = document.getElementsByClassName('time-table');
  var day = days[(global.redhatSelectedDay || 1) - 1];
  (day && day.style || {}).display = 'block';

  (function initAgenda () {
    var $radios = __slice.call(document.querySelectorAll('#agenda input[type="radio"]'));
    var $labels = __slice.call(document.querySelectorAll('#agenda input[type="radio"] + label'));
    var $timeTables = __slice.call(document.querySelectorAll('.time-table'));

    $radios.forEach(function (radio, index) {
      radio.setAttribute('id', 'day-' + index);
    });

    $labels.forEach(function (label, index) {
      label.setAttribute('for', 'day-' + index);
    });

    $timeTables.forEach(function (table, index) {
      table.classList.add('time-table-' + index);
    });
  })();
})(window)
