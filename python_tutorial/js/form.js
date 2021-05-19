var formContainer = document.getElementById("form-container");
var formImage = document.getElementById("image-background");

/* Hover-zoom effect for the form container */
formContainer.onmouseover = function() {
    formImage.classList.add("zoom-img");
}
formContainer.onmouseout = function() {
    formImage.classList.remove("zoom-img");
}