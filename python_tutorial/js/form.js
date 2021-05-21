var formContainer = document.getElementById("form-container");
var formImage = document.getElementById("image-background");

/* Hover-zoom effect for the form container */
formContainer.onmouseover = function() {
    formImage.classList.add("zoom-img");
}
formContainer.onmouseout = function() {
    formImage.classList.remove("zoom-img");
}

/* To show the required patterns of the inputs */
function changeValidationMessages(inputs) {
    for (const input of inputs) {
        if (input.validity.valueMissing) {
            input.setCustomValidity("Hai mancato questo :P");
            input.reportValidity();

        } else if (input.validity.patternMismatch) {
            input.setCustomValidity(input.getAttribute("requiredPattern"));
            input.reportValidity();

        } else {
            input.setCustomValidity("");
            input.reportValidity();
        }
    }
}

/* To simulate a working form :') */
function redirectToIndex() {
    var inputs = document.getElementsByTagName("input");
    changeValidationMessages(inputs);

    var ok = true;

    for (const input of inputs) {
        if (!input.checkValidity()) {
            console.log(input.id + " is required to submit the form");
            ok = false;
        }
    }

    if (ok) {
        window.location.href = "./";
    }
}