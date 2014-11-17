(function (global) {
  var canvas  = document.getElementById('artwork');
  global.redhatBrandPattern = 'corporate';

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createShape (i) {
    var div = document.createElement('div');
    div.classList.add('artwork-shape');
    div.style.left = (Math.ceil(getRandomInt(0,100) / 10) * 10).toString() + '%';
    canvas.appendChild(div);
    div.classList.add('animate-in');
    div.style.animationDuration = getRandomInt(1,3).toString() + 's';
    div.classList.add(i % 2 === 0 ? 'fast' : 'slow');
  }

  function addPattern () {
    var div = document.createElement('div');
    div.classList.add('js-pattern-fill');
    div.classList.add('artwork-pattern');
    canvas.appendChild(div);
    div.classList.add('animate-in');
    div.style.animationDuration = getRandomInt(1,3).toString() + 's';
  }

  function populateCanvas () {
    for (var i = 0; i < 3; i++) {
      createShape(i);
    }

    addPattern();
  }
  populateCanvas();
})(window);
