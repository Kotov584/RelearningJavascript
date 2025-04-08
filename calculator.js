const calculateButton = document.getElementById('calculate');

function doCalculation () {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    const operator = document.getElementById('operator').value;
    const resultParagraph = document.getElementById('result');

    switch (operator) {
        case "+": 
            result = firstNumber + secondNumber
            break;
        case "-": 
            result = firstNumber - secondNumber
            break;
        case "*": 
            result = firstNumber * secondNumber
            break;
        case "/": 
            if (firstNumber || secondNumber === 0) {
                return resultParagraph.textContent = "Division by zero is not acceptable";
            }
            result = firstNumber / secondNumber
            break;
        default:
            result = "Invalid operator";
    }
  
    resultParagraph.textContent = result;
}

calculateButton.addEventListener('click',  doCalculation);
