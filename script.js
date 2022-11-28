//All selectors for dom elements we need to access:
const numButtons = document.querySelectorAll(".numButton");
const previousDisplay = document.querySelector("#previous-display")
const currentDisplay = document.querySelector("#current-display");
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
    if(subtractClickCounter === 0 && a === 0){
        total = b;
        subtractClickCounter++;
    } else{
        total = a - b;
    }
    return total;
}


function multiply (a, b){
    if(b === 0){
        b = 1;
    } else if(a === 0){
        a = 1;
    }
    let total = a * b;
    return total;
}


function divide (a, b){
    total = a / b;
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
let currentOperator = '';
let previousOperator = '';
let subtractClickCounter = 0;
let divideClickCounter = 0;


//Event listeners for my dom elements:
for(let i = 0; i < numButtons.length; i++){
    numButtons[i].addEventListener("click", function(e){
        currentNum.length > 10 ? 
        currentNum = currentNum :
        currentNum += e.target.textContent;
        currentDisplay.textContent = currentNum;
    });
}


addButton.addEventListener("click", function(e){
    currentOperator = e.target.textContent;
    currentNum = operate(+previousNum, +currentNum, currentOperator);
    previousNum = currentNum;
    previousDisplay.textContent = previousNum + ' ' + currentOperator;
    currentDisplay.textContent = currentNum;
    currentNum = '';
    previousOperator = currentOperator;
    
})

subtractButton.addEventListener("click", function(e){
    currentOperator = e.target.textContent;
    currentNum = operate(+previousNum, +currentNum, currentOperator);
    previousDisplay.textContent = previousNum + ' ' + currentOperator;
    currentDisplay.textContent = currentNum;
    previousNum = currentNum;
    currentNum = '';
    previousOperator = currentOperator;
    
})

multiplyButton.addEventListener("click", function(e){
    currentOperator = e.target.textContent;
    currentNum = operate(+previousNum, +currentNum, currentOperator);
    previousDisplay.textContent = previousNum + ' ' + currentOperator;
    currentDisplay.textContent = currentNum;
    previousNum = currentNum;
    currentNum = '';
    previousOperator = currentOperator;
    
})

divideButton.addEventListener("click", function(e){
    currentOperator = e.target.textContent;
    currentNum = operate(+previousNum, +currentNum, currentOperator);
    previousDisplay.textContent = previousNum + ' ' + currentOperator;
    currentDisplay.textContent = currentNum;
    previousNum = currentNum;
    currentNum = '';
    previousOperator = currentOperator;
    
})

clearButton.addEventListener("click", function(){
    previousDisplay.textContent = '';
    currentDisplay.textContent = '';
    currentNum = '';
    previousNum = '';
    currentOperator = '';
    previousOperator = '';
})

equalsButton.addEventListener("click", function(){
    previousDisplay.textContent = previousNum + " " + currentOperator + " " + currentNum;
    currentNum = (operate(+previousNum, +currentNum, currentOperator));
    currentDisplay.textContent = currentNum;
    previousNum = currentNum;
    currentNum = '';
    previousOperator = '';
    currentOperator = '';
    console.log(previousNum);
})