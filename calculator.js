//main
let firstNumber = '';
let operator = '';
let secondNumber = '';


function btnValue(value) {
    const screen = document.querySelector('.screen');
    screen.value += value;

    if ('+-*/'.includes(value)) {
        operator = value;
    } else if (operator === '') {
        firstNumber += value;
    } else {
        secondNumber += value;
    }
}

function clearScreen() {
    document.querySelector('.screen').value = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
}

function calculate() {
    let result = '';
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (!isNaN(num1) && !isNaN(num2)) {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Error: Division by zero';
                }
                break;
            default:
                result = 'Error: Invalid operation';
        }
    } else {
        result = 'Error: Invalid input';
    }

    const screen = document.querySelector('.screen');
    screen.value = result;
}





  
//Footer
const dataAtual = new Date();
const ano = dataAtual.getFullYear();

document.getElementById("data").textContent = ano;