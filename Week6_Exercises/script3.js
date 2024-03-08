document.addEventListener('keydown', startMoving);
document.addEventListener('keyup', stopMoving);

var circle = document.getElementById('circle');
var timer;
var speed = 1;

function startMoving(event) {
  if (event.keyCode >= 37 && event.keyCode <= 40) {
    event.preventDefault();
    stopMoving();
    timer = setInterval(function() {
      moveCircle(event.keyCode);
    }, 10);
  }
}

function moveCircle(keyCode) {
  var currentLeft = parseInt(circle.style.left) || 0;
  var currentTop = parseInt(circle.style.top) || 0;

  if (keyCode == 37) {
    currentLeft -= speed;
  } else if (keyCode == 39) {
    currentLeft += speed;
  } else if (keyCode == 38) {
    currentTop -= speed;
  } else if (keyCode == 40) {
    currentTop += speed;
  }

  circle.style.left = currentLeft + 'px';
  circle.style.top = currentTop + 'px';
}

function stopMoving() {
  clearInterval(timer);
}