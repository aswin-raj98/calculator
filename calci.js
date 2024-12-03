const inputs = document.getElementById("inputs");

function toDisplay(input) {
    inputs.value += input;
}

function clearDisplay() {
    inputs.value = "";
}

function calculate() {
    try {
        inputs.value = eval(inputs.value);
    } catch (error) {
        inputs.value = 'Error';
    }
}

function sqrt() {
    try {
        inputs.value = Math.sqrt(eval(inputs.value));
    } catch (error) {
        inputs.value = 'Error';
    }
}

function backspace() {
    inputs.value = inputs.value.slice(0, -1);
}

document.addEventListener('keydown', function(event) {
    const allowedKeys = "0123456789.+-*/%()";
    if (allowedKeys.includes(event.key)) {
        toDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculate();
        event.preventDefault();
    } else if (event.key === 'Backspace') {
        backspace();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});
