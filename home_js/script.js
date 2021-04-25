/* var width = document.getElementById('myID').offsetWidth;    //includes margin, border, padding
var height = document.getElementById('nav-container').offsetHeight;
document.querySelector(":root").style.setProperty("--nav-container-height", height); */


var sLeft = document.getElementById('nav-container').scrollLeft;

// scroll the topnav as long the buttons are pressed
var _timeout;
var rightBtn = document.getElementById('nav-right-button');
rightBtn.onmousedown = function () {
    _timeout = setInterval(function () {
        document.getElementById('nav-container').scrollLeft += 10;
    }, 50);
}
rightBtn.onmouseup = function () {
    clearInterval(_timeout);
}
var leftBtn = document.getElementById('nav-left-button');
leftBtn.onmousedown = function () {
    _timeout = setInterval(function () {
        document.getElementById('nav-container').scrollLeft -= 10;
    }, 50);
}
leftBtn.onmouseup = function () {
    clearInterval(_timeout);
}
