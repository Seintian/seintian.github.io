var formContainer = document.getElementById("form-container");
var formImage = document.getElementById("image-background");

formContainer.onmouseover = function() {
    formImage.classList.add("zoom-img");
}
formContainer.onmouseout = function() {
    formImage.classList.remove("zoom-img");
}