//All selectors for dom elements we need to access:
const numButtons = document.querySelectorAll(".numButton");
const operatorButton = document.querySelectorAll(".operatorButton")
console.log(numButtons)


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


//Event listeners for my dom elements:
for(let i = 0; i < numButtons.length; i++){
    numButtons[i].addEventListener("click", function(){
        console.log("working")
    });
}
