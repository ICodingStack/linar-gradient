var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var color3 = document.querySelector('.color3');
var font = document.querySelector('.font');
var body = document.getElementById('gradient');
var css = document.querySelector('.css');
var h1 = document.querySelector('h1');

function changeColor() {
    body.style.background = "linear-gradient(to right , " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background;
}
function changeTextColor() {
    body.style.color = color3.value;
}
function changeFont() {
    body.style.fontFamily = font.options[font.selectedIndex].text;
    h1.style.fontFamily = font.options[font.selectedIndex].text;
}
color1.addEventListener('input', changeColor);
color2.addEventListener('input', changeColor);
color3.addEventListener('input', changeTextColor);
font.addEventListener('change', changeFont);
