let defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput(){
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor.js
}

// Generates and writes log entries object to console
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        previousResult: prevResult,
        number: operationNumber,
        result: newResult,
    };

    logEntries.push(logEntry); 
    console.log(logEntries);
}

function add() { 

    const enteredNumber = getUserNumberInput();

    const defaultResult = currentResult;
    
    currentResult += enteredNumber;
    
    createAndWriteOutput('+', defaultResult, enteredNumber);

    writeToLog('ADD', defaultResult, enteredNumber, currentResult);

}

function subtract() { 

    const enteredNumber = getUserNumberInput();

    const defaultResult = currentResult;
    
    currentResult -= enteredNumber;
    
    createAndWriteOutput('-', defaultResult, enteredNumber);

    writeToLog('SUBTRACT', defaultResult, enteredNumber, currentResult);
}

function multiply() {
    
    const enteredNumber = getUserNumberInput();

    const defaultResult = currentResult;

    currentResult *= enteredNumber;
    
    createAndWriteOutput('*', defaultResult, enteredNumber);

    writeToLog('MULTIPLY', defaultResult, enteredNumber, currentResult);
}

function divide() {
    
    const enteredNumber = getUserNumberInput();

    const defaultResult = currentResult;
    
    currentResult /= enteredNumber;
    
    createAndWriteOutput('/', defaultResult, enteredNumber); 

    writeToLog('DIVIDE', defaultResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

