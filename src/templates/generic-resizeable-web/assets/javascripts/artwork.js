(function (global) {
  var canvas  = document.getElementById('artwork');
  global.redhatBrandPattern = 'corporate';

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function initArray(n) {
    return Array.apply([], Array(n));
  }

  function gridPositions (colCount) {
    return initArray(colCount).map(function (_elem, index) {
      return (100 / colCount) * index;
    });
  }

  function randomArrayElem (arr) {
    return arr[getRandomInt(0, arr.length - 1)];
  }

  var artwork = {
    gridPositions: gridPositions(10)
  };

  function createShape (i) {
    var div = document.createElement('div');
    div.classList.add('artwork-shape');
    div.style.left    = randomArrayElem(artwork.gridPositions).toString() + '%';
    div.style.top     = randomArrayElem(artwork.gridPositions.slice(1)).toString() + '%';
    div.style.height  = randomArrayElem(artwork.gridPositions.slice(1)).toString() + '%';
    div.style.width   = randomArrayElem(artwork.gridPositions.slice(1)).toString() + '%';
    div.style.opacity = getRandomArbitrary(0.125, 0.5);
    canvas.appendChild(div);
    div.classList.add('skew-animate-in');
    div.style.animationDuration = getRandomInt(1,3).toString() + 's';
    div.classList.add(i % 2 === 0 ? 'fast' : 'slow');
  }

  function addPattern () {
    var div = document.createElement('div');
    div.classList.add('js-pattern-fill');
    div.classList.add('artwork-pattern');
    canvas.appendChild(div);
    div.classList.add('rotate-animate-in');
    div.style.animationDuration = getRandomInt(1,3).toString() + 's';
  }

  function populateCanvas () {
    for (var i = 0; i < 20; i++) {
      createShape(i);
    }

    addPattern();
  }
  populateCanvas();
})(window);
