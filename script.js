//Selecting input element
let input = document.querySelector("input");

input.value = 0;

//Function to add input from numbered buttons
let selectedOperation;
let temp;
const handleInputValue = (e) => {
    if (input.value == 0) {
        input.value = "";
    }
    input.value == temp
        ? (document.querySelector("input").value = e.innerText)
        : (document.querySelector("input").value += e.innerText);
};

// Function to handle arithmatic operations using switch case
const handleOperations = (e) => {
    temp = parseInt(input.value);
    switch (e.innerText) {
        case "+":
        selectedOperation = "+";
        break;

        case "-":
        selectedOperation = "-";
        break;

        case "x":
        selectedOperation = "*";
        break;

        case "/":
        selectedOperation = "/";
        break;
    }
};

//Function to calculate
const calculate = () => {
    if (selectedOperation && temp) {
        switch (selectedOperation) {
        case "+":
            input.value = parseInt(input.value) + parseInt(temp);
            break;

        case "-":
            input.value = parseInt(input.value) - parseInt(temp);
            break;

        case "x":
            input.value = parseInt(input.value) * parseInt(temp);
            break;

        case "/":
            input.value = parseInt(temp) / parseInt(input.value);
            break;
        }
        selectedOperation = null;
    }
};

const handleClear = () => {
    input.value = input.value.slice(0, -1);
    input.value == "" ? (input.value = 0) : null;
};
