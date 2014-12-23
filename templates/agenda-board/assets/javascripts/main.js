(function (global) {
  var days = document.getElementsByClassName('section-agenda');
  var day = days[(global.redhatSelectedDay || 1) - 1];
  (day && day.style || {}).display = 'block';
})(window)
