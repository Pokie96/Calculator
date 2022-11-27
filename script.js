//All selectors for dom elements we need to access:
const numButtons = document.querySelectorAll(".numButton");
const operatorButtons = document.querySelectorAll(".operatorButton")
const display = document.querySelector(".display");
const equalsButton = document.querySelector(".equalsButton");
const clearButton = document.querySelector(".clearButton");


//All functions that will be used in my calculator program:
function add (...arguments){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}


function subtract (...arguments){
    let total = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        total -= arguments[i];
    }
    return total;
}


function multiply (...arguments){
    let total = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        total *= arguments[i];
    }
    return total;
}


function divide (...arguments){
    let total = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        total /= arguments[i];
    }
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


//Event listeners for my dom elements:
for(let i = 0; i < numButtons.length; i++){
    numButtons[i].addEventListener("click", function(e){
        currentNum.length > 10 ? 
        currentNum = currentNum :
        currentNum += e.target.textContent;
        display.textContent = currentNum;
    });
}


for(let i = 0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener("click", function(e){
        operator = e.target.textContent;
        previousNum = currentNum;
        currentNum = '';
    });
}

clearButton.addEventListener("click", function(){
    display.textContent = 0;
    currentNum = '';
    previousNum = '';
})

equalsButton.addEventListener("click", function(){
    display.textContent = (operate(+previousNum, +currentNum, operator));
    currentNum = '';
    previousNum = '';
})