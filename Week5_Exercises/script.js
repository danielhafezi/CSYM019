function myLoad() {
    var circleElement = document.getElementById('circle');
    circleElement.addEventListener('click', function() {
      alert("The button was pressed.");
    });
  }
    document.addEventListener('DOMContentLoaded', myLoad);
  