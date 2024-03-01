function myLoad() {
    var circleElement = document.getElementById('circle');
    circleElement.addEventListener('click', function() {
      circleElement.style.opacity = 0.5;
    });
  }
    document.addEventListener('DOMContentLoaded', myLoad);