//main
let firstInput = '';
let secondInput = '';
let operator = '';

document.addEventListener('DOMContentLoaded', function() {
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    let decimal = document.querySelector('.decimal');
    let inputScreen = document.querySelector('.inputScreen')
    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');


    numbers.addEventListener('click', function() {
        if(firstInput === '' && secondInput === '') {
            firstNumber(e.target.textContent)
            inputScreen.textContent = firstInput;
        } else if (secondInput === '') {
            secondNumber(e.target.textContent)
            inputScreen.textContent = secondInput;
        }
        
    })

    operators.addEventListener('click', function(){
        insertOperator(e.target.textContent)
        inputScreen.textContent = operator;
    })


})





  
//Footer
const dataAtual = new Date();
const ano = dataAtual.getFullYear();

document.getElementById("data").textContent = ano;