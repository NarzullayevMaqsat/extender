const message = document.querySelector('.text');
const box = document.querySelector('.wrapper')

message.textContent = 'Have a nice travel'



var money = +prompt("Write your money in UZS");

var ticket = 500; // => USD
var hotel = 255; // => USD
var museun = 120; // => EURO

var USD_TO_UZS = 10650.34;  // from USD to UZS
var EURO_TO_UZS = 11650.03; // from EURO to UZS

var total = (ticket + hotel) * USD_TO_UZS + museun * EURO_TO_UZS;

if (money >= total) {
    message.textContent = 'Have a nice travel !';
    setInterval(boxColor, 955)
    function boxColor() {
        var red = Math.floor(Math.random()*260)
        var green = Math.floor(Math.random()*260)
        var blue = Math.floor(Math.random()*260)

        box.style.backgroundColor = "RGB("+red+", "+green+", "+blue+")"

    }
    setInterval (changeBackgroundColor, 959)
    function changeBackgroundColor() {
        var red = Math.floor(Math.random()*300)
        var green = Math.floor(Math.random()*300)
        var blue = Math.floor(Math.random()*300)

        message.style.backgroundColor = "RGB("+red+", "+green+", "+blue+")"

    }
    setInterval (changeColor, 1200);
    function changeColor() {
        var red = Math.floor(Math.random()*255)
        var green = Math.floor(Math.random()*255)
        var blue = Math.floor(Math.random()*255)

        message.style.color = "RGB("+red+", "+green+", "+blue+")"
    }
} else if (money < 0){
    message.textContent = 'Are you wanna go on credits ?';
    box.style.backgroundColor = "#ff0000"
    message.style.backgroundColor = "#ff0000"
    
}else if(money <= total) {
    message.textContent = 'You must wait a little time to go your holidays.';
    message.style.backgroundColor = "#ffff00"
    message.style.color = "#ffffff"
    box.style.backgroundColor = "#ffff00"
    
}
 else if(money !== 'number'){
    message.textContent = 'Do not write letters !';
    box.style.backgroundColor = "#ff0000"
    message.style.color = "#fff"
}
