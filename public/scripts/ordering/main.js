import { validateOrder } from "./validation.js";

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (event) => {
    submitOrder()
})

function submitOrder() {
    if (validateOrder() == true) {
        return true;
    }
}