window.onload = (event) => {
    AOS.init();
}

window.onscroll = function() {
    scroll_navbar();
    update_navbar();
};

var navbar = document.getElementById("navbar");
var gotico_nav = document.getElementById("nav_1");
var gotico_spagnolo_nav = document.getElementById("nav_2");
var leon_nav = document.getElementById("nav_3");
var siviglia_nav = document.getElementById("nav_4");
var tarragona_nav = document.getElementById("nav_5");

var sticky = navbar.offsetTop;
var gotico = document.getElementById("gotico").offsetTop;
var gotico_spagnolo = document.getElementById("gotico_spagnolo").offsetTop;
var leon = document.getElementById("cattedrale_Leòn").offsetTop;
var siviglia = document.getElementById("cattedrale_Siviglia").offsetTop;
var tarragona = document.getElementById("cattedrale_Tarragona").offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position
function scroll_navbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

function update_navbar() {
    if (window.pageYOffset >= gotico && window.pageYOffset < gotico_spagnolo) {
        gotico_spagnolo_nav.classList.remove("bordered");
        gotico_nav.classList.add("bordered");

        gotico_nav.onmouseover = function () {
            gotico_nav.classList.add("hovered");
        }
        gotico_nav.onmouseout = function () {
            gotico_nav.classList.remove("hovered");
        }

    } else if (window.pageYOffset >= gotico_spagnolo && window.pageYOffset < leon) {
        leon_nav.classList.remove("bordered");
        gotico_spagnolo_nav.classList.add("bordered");
        gotico_nav.classList.remove("bordered");

        gotico_spagnolo_nav.onmouseover = function () {
            gotico_spagnolo_nav.classList.add("hovered");
        }
        gotico_spagnolo_nav.onmouseout = function () {
            gotico_spagnolo_nav.classList.remove("hovered");
        }

    } else if (window.pageYOffset >= leon && window.pageYOffset < siviglia) {
        siviglia_nav.classList.remove("bordered");
        leon_nav.classList.add("bordered");
        gotico_spagnolo_nav.classList.remove("bordered");
        // bug fix
        gotico_nav.classList.remove("bordered");

        leon_nav.onmouseover = function () {
            leon_nav.classList.add("hovered");
        }
        leon_nav.onmouseout = function () {
            leon_nav.classList.remove("hovered");
        }

    } else if (window.pageYOffset >= siviglia && window.pageYOffset < tarragona) {
        tarragona_nav.classList.remove("bordered");
        siviglia_nav.classList.add("bordered");
        leon_nav.classList.remove("bordered");
        // bug fix
        gotico_nav.classList.remove("bordered");

        siviglia_nav.onmouseover = function () {
            siviglia_nav.classList.add("hovered");
        }
        siviglia_nav.onmouseout = function () {
            siviglia_nav.classList.remove("hovered");
        }

    } else if (window.pageYOffset >= tarragona) {
        tarragona_nav.classList.add("bordered");
        siviglia_nav.classList.remove("bordered");
        // bug fix
        gotico_nav.classList.remove("bordered");

        tarragona_nav.onmouseover = function () {
            tarragona_nav.classList.add("hovered");
        }
        tarragona_nav.onmouseout = function () {
            tarragona_nav.classList.remove("hovered");
        }
    }
}
