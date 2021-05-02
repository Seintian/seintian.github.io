var toggle_button = document.getElementById("toggle-dark-mode");
var menu = document.getElementById("menu");

function toggleDarkMode() {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");

        document.getElementById("topbar").classList.remove("dark-mode");
        document.getElementById("topbar").classList.add("light-mode");

        toggle_button.innerHTML = '<img src="img/dark_mode-icon.png" alt="Toggle Dark Mode" width="32px" id="toggle-img">';
    
    } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");

        document.getElementById("topbar").classList.remove("light-mode");
        document.getElementById("topbar").classList.add("dark-mode");

        toggle_button.innerHTML = '<img src="img/light_mode-icon.png" alt="Toggle Light Mode" width="32px">';
    
    }
    
}

function toggleMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "block";
        document.getElementById("content").style.margin = "0";
    } else {
        menu.style.display = "none";
        document.getElementById("content").style.margin = "0 20%";
    }
}