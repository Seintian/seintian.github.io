/* window.onload = (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const fname = urlParams.get("fname");

    if (fname != null) {
        document.getElementById("logged").innerHTML = "Benvenuto, " + fname + "!\n";
        document.getElementById("account").innerHTML = 
        '<a href="dashboard.html?fname=' + fname + '&lname=' + urlParams.get("lname") + 
        '&email=' + urlParams.get("email") + '&password=' + urlParams.get("password") + 
        '">Manage Account</a>';
    } else {
        document.getElementById("account").innerHTML = 
        '<a href="login.php">Log in</a><a href="signin.php">Sign in</a>';
    }
} ==== Work in progress ==== */

// Enable or disable the dark mode in base of what mode is currently active
function darkMode() {
    var element = document.body;
    if (element.classList.contains("dark-mode")) {
        element.classList.toggle("light-mode");

    } else {
        element.classList.toggle("dark-mode");

    }
}