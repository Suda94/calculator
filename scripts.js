


class Calculator {// create a template using class in built function. 
    constructor(previousOperandTextElement, currentOperandTextElement)
} {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
}

clear()
{
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;

};

delete ()
{
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
};

appendNumber(number)
{
    if (number === "." && this.currentOperand.includes('.'))
        return currentOperand = this.currentOperand.toString() + number.toString()
};

chooseOperation(operation)
{
    if (this.currentOperand === '')
        return
    if (this.previousOperand !== '') {
        this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}

compute()
{


}
updateDisplay()
{

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