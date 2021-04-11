window.onload = (event) => {
    AOS.init();
}

window.onscroll = function() {
    scroll_navbar();
    update_navbar();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

var gotico = document.getElementById("gotico").offsetTop;
var gotico_spagnolo = document.getElementById("gotico_spagnolo").offsetTop;
var leon = document.getElementById("cattedrale_Leòn").offsetTop;

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
    if (window.pageYOffset >= leon) {
        document.getElementById("nav_3").classList.add("bordered");
        document.getElementById("nav_2").classList.remove("bordered");
        document.getElementById("nav_1").classList.remove("bordered");

    } else if (window.pageYOffset >= gotico_spagnolo) {
        document.getElementById("nav_2").classList.add("bordered");
        document.getElementById("nav_1").classList.remove("bordered");
        document.getElementById("nav_3").classList.remove("bordered");

    } else {
        document.getElementById("nav_1").classList.add("bordered");
        document.getElementById("nav_2").classList.remove("bordered");
    }
}