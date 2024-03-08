document.addEventListener('keydown', moveCircle);

function moveCircle(event) {
    var circle = document.getElementById('circle');
    var currentLeft = parseInt(circle.style.left) || 0;
    var currentTop = parseInt(circle.style.top) || 0;

    if (event.keyCode == 37) {
        circle.style.left = (currentLeft - 10) + 'px';
    } if (event.keyCode == 39) {
        circle.style.left = (currentLeft + 10) + 'px';
    } if (event.keyCode == 38) {
        circle.style.top = (currentTop - 10) + 'px';
    } if (event.keyCode == 40) {
        circle.style.top = (currentTop + 10) + 'px';
    }
}