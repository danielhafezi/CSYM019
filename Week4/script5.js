function displayMsg() {
var elm= document.getElementById('myinput');
alert(elm.value)
}
function myLoadFunction(){
var elm= document.getElementById(mybutton);
ekm.addEventListener('click', displayMsg);
}
document.addEventListener("DOMContentLoaded", myLoadFunction);
