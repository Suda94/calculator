


class Calculator {// create a template using class in built function. 
    constructor(previousOperandTextElement, currentOperandTextElement)
} {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clearInterval();
}

clear()
{
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;

};
delete ()
{

};

appendNumber(number){

};

chooseOperation(operation){

}

compute() {

}
updateDisplay(){

}


//button operations:

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('data-current-operand');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);