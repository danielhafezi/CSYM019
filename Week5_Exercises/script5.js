function myLoad() {
    var circleElement = document.getElementById('circle');
    circleElement.addEventListener('click', function() {
      var circle0pacity = parseFloat(circleElement.style.opacity);
      circleElement.style.opacity = circle0pacity - 0.1;
    });
  }
    document.addEventListener('DOMContentLoaded', myLoad);