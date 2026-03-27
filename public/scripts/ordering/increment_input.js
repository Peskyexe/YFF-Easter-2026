const minValue = 0;
const maxValue = 10;

const inputsArray = document.querySelectorAll(".increment-value-input")
inputsArray.forEach(input => {
    initializeInput(input);
});

function initializeInput(input) {
    const addButton = input.querySelector(".increment-add");
    const removeButton = input.querySelector(".increment-remove");
    const label = input.querySelector(".increment-value");

    let value = 0;

    addButton.addEventListener("click", () => {
        if (addButton.classList.contains("enabled") && value < maxValue) {
            value += 1;
            updateInput(addButton, removeButton, label, value);
        }
    })

    removeButton.addEventListener("click", () => {
        if (removeButton.classList.contains("enabled") && value > minValue) {
            value -= 1;
            updateInput(addButton, removeButton, label, value);
        }
    })

    updateInput(addButton, removeButton, label, value);
}

function updateInput(addButton, removeButton, label, value) {
    label.textContent = value;

    if (value >= maxValue) {
        addButton.classList.remove("enabled")
    }
    else if (value <= minValue) {
        removeButton.classList.remove("enabled")
    }
    else {
        addButton.classList.add("enabled")
        removeButton.classList.add("enabled")
    }
}

