var toggle_button = document.getElementById("toggle-dark-mode");

function toggleDarkMode() {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        toggle_button.innerHTML = '<img src="img/dark_mode-icon.png" alt="Toggle Dark Mode" width="32px">';
    } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        toggle_button.innerHTML = '<img src="img/light_mode-icon.png" alt="Toggle Light Mode" width="32px">';
    }
    
}