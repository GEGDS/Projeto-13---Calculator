//main
let currentInput = '';
let firstInput = '';
let operator = '';

document.addEventListener('DOMContentLoaded', function() {
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    let decimal = document.querySelector('.decimal');
    let inputKeys = document.querySelector('.inputKey')
    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');

    numbers.forEach((number) => number.addEventListener('click', function(event){
        insertNumber(event.target.textContent);
        inputKeys.textContent = inputValue; // Atualize o visor após cada clique no número
    }));

    operators.forEach((operator) => operator.addEventListener('click', function(event){
        insertOperator(event.target.textContent);
        inputKeys.textContent = inputValue + " " + operator.textContent;
    }));



    clear.addEventListener("click", function(){
        inputValue = '';
        operator = '';
        inputKeys.textContent =
        inputValue;
    })
    
    equal.addEventListener("click", function(){
        if(inputValue !== ''){
            calculate();
            if(inputValue.length <= 5){
                inputKeys.textContent = inputValue;
            } else {
                inputKeys.textContent = inputValue.slice(0, 5) + "...";
            }
        }
    });

    decimal.addEventListener("click", function(){
        addDecimal();
    })


})

function insertNumber(number){
    if(inputValue.length <= 5){
        inputValue += number; 
    }
}

function insertOperator(op){
    operator = op;
    inputValue = '';
}

function calculate(){
    let secondInput = Number(inputValue);
    inputValue = Number(inputValue);
    

    if(operator === "+"){
        inputValue += secondInput;
    } else if(operator === "-"){
        inputValue -= secondInput;
    } else if(operator === "x"){
        inputValue *= secondInput;
    } else{
        inputValue /= secondInput;
    }

    inputValue = roundNumber(inputValue);
}


function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

function addDecimal(){
    if(!inputValue.includes(".")){
        inputValue += '.';
    }
}



//Footer
const dataAtual = new Date();
const ano = dataAtual.getFullYear();

document.getElementById("data").textContent = ano;