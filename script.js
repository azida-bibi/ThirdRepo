const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");
const output = document.getElementById("output");

function addition(event) {
    event.preventDefault();
    let result = Number(num1.value) + Number(num2.value);
    output.innerHTML = "Addition Result: " + result;
}

addBtn.addEventListener("click", addition);

function subtraction(event) {
    event.preventDefault();
    let result = Number(num1.value) - Number(num2.value);
    output.innerHTML = "Subtraction Result: " + result;
}

subtractBtn.addEventListener("click", subtraction);

function multiplication(event) {
    event.preventDefault();
    let result = Number(num1.value) * Number(num2.value);
    output.innerHTML = "Multiplication Result: " + result;
}

multiplyBtn.addEventListener("click", multiplication);

function division(event) {
    event.preventDefault();

    if (Number(num2.value) === 0) {
        output.innerHTML = "Cannot divide by zero!";
        return;
    }

    let result = Number(num1.value) / Number(num2.value);
    output.innerHTML = "Division Result: " + result;
}

divideBtn.addEventListener("click", division);