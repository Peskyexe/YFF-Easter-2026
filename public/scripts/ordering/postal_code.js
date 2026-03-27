let postalAreas = {};

fetch("assets/postal-codes.json")
    .then(response => response.json())
    .then(data => {
        postalAreas = data;
    });


function capitalize(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


const postalCodeElement = document.getElementById("post-number-input");
const postalAreaElement = document.getElementById("post-area-display");

postalCodeElement.addEventListener("keyup", () => {
    const postalCode = postalCodeElement.value;

    if (postalCode.length === 4 && postalAreas[postalCode]) {
        postalAreaElement.value = capitalize(postalAreas[postalCode]);
    } else {
        postalAreaElement.value = "";
    }
})