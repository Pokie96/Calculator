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
    return Math.round(total * 100) / 100;
}


function subtract (a, b){
    if(subtractClickCounter === 0 && a === 0){
        total = b;
        subtractClickCounter++;
    } else{
        total = a - b;
    }
    return Math.round(total * 100) / 100;
}


function multiply (a, b){
    if(b === 0){
        b = 1;
    } else if(a === 0){
        a = 1;
    }
    let total = a * b;
    return Math.round(total * 100) / 100;
}


function divide (a, b){
    if(a === 0){
        total = b;
        divideClickCounter++;
    } else if(b === 0){
        total = a;
    } else{
        total = a / b;
    }
    return Math.round(total * 100) / 100;
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
let addClickCounter = 0;
let multiplyClickCounter = 0;
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
    if(addClickCounter === 0){
        if(!previousOperator){
            currentNum = operate(+previousNum, +currentNum, currentOperator);
        } else {
            currentNum = operate(+previousNum, +currentNum, previousOperator)
        };
    } else{
        currentNum = operate(+previousNum, +currentNum, currentOperator);
    }
    previousNum = currentNum;
    previousDisplay.textContent = previousNum + ' ' + currentOperator;
    currentDisplay.textContent = currentNum;
    currentNum = '';
    previousOperator = currentOperator;
    subtractClickCounter = 0;
    multiplyClickCounter = 0;
    divideClickCounter = 0;
})

subtractButton.addEventListener("click", function(e){
    currentOperator = e.target.textContent;
    if(subtractClickCounter === 0){
        if(!previousOperator){
            currentNum = operate(+previousNum, +currentNum, currentOperator);
        } else {
            currentNum = operate(+previousNum, +currentNum, previousOperator)
        };
    } else{
        currentNum = operate(+previousNum, +currentNum, currentOperator);
    }
    previousNum = currentNum;
    previousDisplay.textContent = previousNum + ' ' + currentOperator;
    currentDisplay.textContent = currentNum;
    currentNum = '';
    previousOperator = currentOperator;
    addClickCounter = 0;
    multiplyClickCounter = 0;
    divideClickCounter = 0;
})

multiplyButton.addEventListener("click", function(e){
    currentOperator = e.target.textContent;
    if(multiplyClickCounter === 0){
        if(!previousOperator){
            currentNum = operate(+previousNum, +currentNum, currentOperator);
        } else {
            currentNum = operate(+previousNum, +currentNum, previousOperator)
        };
    } else{
        currentNum = operate(+previousNum, +currentNum, currentOperator);
    }
    previousNum = currentNum;
    previousDisplay.textContent = previousNum + ' ' + currentOperator;
    currentDisplay.textContent = currentNum;
    currentNum = '';
    previousOperator = currentOperator;
    subtractClickCounter = 0;
    addClickCounter = 0;
    divideClickCounter = 0;
})

divideButton.addEventListener("click", function(e){
    currentOperator = e.target.textContent;
    if(divideClickCounter === 0){
        if(!previousOperator){
            currentNum = operate(+previousNum, +currentNum, currentOperator);
        } else {
            currentNum = operate(+previousNum, +currentNum, previousOperator)
        };
    } else{
        currentNum = operate(+previousNum, +currentNum, currentOperator);
    }
    previousNum = currentNum;
    previousDisplay.textContent = previousNum + ' ' + currentOperator;
    currentDisplay.textContent = currentNum;
    currentNum = '';
    previousOperator = currentOperator;
    subtractClickCounter = 0;
    multiplyClickCounter = 0;
    addClickCounter = 0;
})

clearButton.addEventListener("click", function(){
    previousDisplay.textContent = '';
    currentDisplay.textContent = '';
    currentNum = '';
    previousNum = '';
    currentOperator = '';
    previousOperator = '';
    subtractClickCounter = 0;
    addClickCounter = 0;
    multiplyClickCounter = 0;
    divideClickCounter = 0;
})

equalsButton.addEventListener("click", function(){
    previousDisplay.textContent = previousNum + " " + currentOperator + " " + currentNum;
    currentNum = (operate(+previousNum, +currentNum, currentOperator));
    currentDisplay.textContent = currentNum;
    previousNum = currentNum;
    currentNum = '';
    previousOperator = '';
    currentOperator = '';
    subtractClickCounter = 0;
    addClickCounter = 0;
    multiplyClickCounter = 0;
    divideClickCounter = 0;
})