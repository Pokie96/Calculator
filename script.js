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

console.log(operate(10, 10, '*'));