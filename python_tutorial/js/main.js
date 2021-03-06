var toggle_button = document.getElementById("toggle-dark-mode");
var menu = document.getElementById("menu");
var topbar = document.getElementById("topbar");
var articles = document.getElementsByTagName("article");
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;

/* MOBILE MENU BUG FIXED */
if (screenHeight > screenWidth) {
    menu.style.display = "none";
} else {
    menu.style.display = "block";
}

/* Replace the dark-mode icon every time, also classes of the body and the topbar */
function toggleDarkMode() {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");

        topbar.classList.remove("dark-mode");
        topbar.classList.add("light-mode");

        toggle_button.innerHTML = '<img src="img/dark_mode-icon.png" alt="Toggle Dark Mode" width="32px" id="toggle-img" onclick="toggleDarkMode()"><a href="form.html" id="signin-link">Sign in <i class="fa fa-sign-in"></i></a>';
    
    } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");

        topbar.classList.remove("light-mode");
        topbar.classList.add("dark-mode");

        toggle_button.innerHTML = '<img src="img/light_mode-icon.png" alt="Toggle Dark Mode" width="32px" id="toggle-img" onclick="toggleDarkMode()"><a href="form.html" id="signin-link">Sign in <i class="fa fa-sign-in"></i></a>';
    
    }
    
}

/* Toggles the menu as the style attribute changes */
function toggleMenu() {
    if (menu.style.display == "block") {
        menu.style.display = "none";

    } else {
        menu.style.display = "block";
    }
}

/* Made one page that contains all the others */
function toggleArticles(toggled) {
    for (var article of articles) {
        article.style.display = "none";
    }
    
    document.getElementById(toggled).style.display = "block";
    if (toggled == "form-html") {
        menu.style.display = "none";
    }
}