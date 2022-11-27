//All selectors for dom elements we need to access:
const numButtons = document.querySelectorAll(".numButton");
const display = document.querySelector(".display");
const equalsButton = document.querySelector(".equalsButton");
const clearButton = document.querySelector(".clearButton");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");


//All functions that will be used in my calculator program:
function add (a, b){
    let total = a + b;
    return total;
}


function subtract (a, b){
    let total = a - b;
    return total;
}


function multiply (a, b = 1){
    let total = a * b;
    return total;
}


function divide (...arguments){
    let total = a / b;
    return total;
}


function operate (a, b, operator){
    let result
    if (operator === '+'){
        result = add(a, b);
    } else if(operator === '-'){
        result = subtract(a, b);
    } else if(operator === '*'){
        result = multiply(a, b);
    } else if(operator === '/'){
        result = divide(a, b);
    }
    return result;
}

let previousNum = '';
let currentNum = '';
let operator = '';
let currentAnswer = 0;
let clickCounter = 0;


//Event listeners for my dom elements:
for(let i = 0; i < numButtons.length; i++){
    numButtons[i].addEventListener("click", function(e){
        currentNum.length > 10 ? 
        currentNum = currentNum :
        currentNum += e.target.textContent;
        display.textContent = currentNum;
    });
}


addButton.addEventListener("click", function(e){
    operator = e.target.textContent;
    currentAnswer = (operate( +previousNum, +currentNum, operator));
    display.textContent = currentAnswer + operator;
    previousNum = currentAnswer;
    currentNum = '';
})

clearButton.addEventListener("click", function(){
    display.textContent = 0;
    currentNum = '';
    previousNum = '';
    currentAnswer = 0;
})

equalsButton.addEventListener("click", function(){
    currentAnswer = (operate(+previousNum, +currentNum, operator));
    display.textContent = currentAnswer;
    currentNum = '';
    previousNum = '';
    currentAnswer = 0;
})