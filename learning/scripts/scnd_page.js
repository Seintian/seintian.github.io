window.onload = (event) => {
    AOS.init();
}

function darkMode() {
    var element = document.body;
    if (element.classList.contains("dark-mode")) {
        element.classList.toggle("light-mode");
    
    } else {
        element.classList.toggle("dark-mode");
    
    }
}

function active_led() {
    var element = document.getElementById("led");
    if (element.classList.contains("active")) {
        element.classList.remove("active");
    } else {
        element.classList.add("active");
    }
}