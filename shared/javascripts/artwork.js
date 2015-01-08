(function (global) {
  var canvasWrapper = document.getElementById('artwork');
  var canvas        = document.createElement('div');
  var animatable    = canvasWrapper.classList.contains('artwork-animate');

  canvas.classList.add('artwork-inner');
  canvasWrapper.appendChild(canvas);

  var complexity = global.redhatArtComplexity || 10;
  global.redhatBrandPattern = 'corporate';

  function isPortrait (element) {
    return element.offsetWidth < element.offsetHeight;
  }

  function setCanvasSize () {
    if (isPortrait(canvasWrapper)) {
      canvas.style.width = canvasWrapper.offsetHeight + 'px';
    } else {
      canvas.style.width = 'initial';
    }
  }

  setCanvasSize();
  window.addEventListener('resize', function () {
    setCanvasSize();
  });

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
    div.style.opacity = randomArrayElem([0.25, 0.5, 0.75]);
    div.style.animationDuration = getRandomInt(1,3).toString() + 's';
    canvas.appendChild(div);

    if (animatable) {
      div.classList.add('skew-animate-in');
    }
  }

  function addPattern () {
    var div = document.createElement('div');
    div.setAttribute('data-red-hat-pattern', global.redhatBrandPattern);
    div.classList.add('artwork-pattern');
    div.style.animationDuration = getRandomInt(1,3).toString() + 's';
    canvas.appendChild(div);

    if (animatable) {
      div.classList.add('rotate-animate-in');
    }
  }

  function populateCanvas (complexity) {
    for (var i = 0; i < complexity; i++) {
      createShape(i);
    }

    addPattern();
  }
  populateCanvas(complexity);
})(window);
