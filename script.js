var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var color3 = document.querySelector('.color3');
var body = document.getElementById('gradient');
var css = document.querySelector('.css');

function changeColor() {
    body.style.background = "linear-gradient(to right , " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background;
}
function changeTextColor() {
    body.style.color = color3.value;
}
color1.addEventListener('input', changeColor);
color2.addEventListener('input', changeColor);
color3.addEventListener('input', changeTextColor);
