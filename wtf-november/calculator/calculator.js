const answerDisplay = document.getElementById("answer");
const figuresBox = document.getElementById("text-display")
const buttons = document.querySelectorAll("button")

// initializing data i want to use like

let currentvalue = "";
let firstNumber = "";
let operator = "";
let secondNumber = ""; 

// i want my button to be responsive to clicks, so i will loop through each button and make it listen to the event 

buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        const value = button.textContent;
        handleInput (value);
    });
});

function handleInput (value){
    console.log("i clicked", value)
    if ('0123456789.'.includes(value)){
        currentvalue += value
        figuresBox.textContent = currentvalue;
    }
    else if (
        ['+','-','*','/','%'].includes(value)
        
    ){
         firstNumber = currentvalue
         operator = value;
         currentvalue = "";
         figuresBox.textContent = `${firstNumber} ${operator} ${secondNumber} `
          console.log('stored first number',firstNumber, 'and operator', operator), 'and second number:', secondNumber;
    }else if(value === '='){
           secondNumber = answerDisplay.textContent;

           let result = ""
           if (operator === '+') result = Number(firstNumber) + Number(secondNumber)
           if (operator === '-') result = Number(firstNumber) - Number(secondNumber)
           if (operator === '*') result = Number(firstNumber) * Number(secondNumber)
           if (operator === '/') result = Number(firstNumber) / Number(secondNumber)
           if (operator === '%') result = Number(firstNumber) % Number(secondNumber)
            answerDisplay.textContent = result
    } else if (value === 'AC'){
        firstNumber = "";
        operator = "";
        secondNumber = "";
        figuresBox.textContent = "";
        answerDisplay.textContent = "";

    }
}

