const answerDisplay = document.getElementById("answer");
const figuresBox = document.getElementById("text-display")
const backButton = document.querySelector(".back-btn")
const buttons = document.querySelectorAll("button")
const operators = ["%", "/","*","-","+","="]
let output = "";

const calculate = (value) =>{
    // console.log("i clicked ", value)
    if (value === "=" && output !== ""){   // using this function method instead of the eval method
        output = Function(`return (${output.replace("%", "/100")})`)();
        // saving my anaswer in the answer box sheet
        answerDisplay.textContent = output
    }else if (value === "AC"){
        output = "";
        answerDisplay.textContent = output
    }else {
        if (output === "" && operators.includes(value)) return;
        output += value
    }
    figuresBox.textContent = output
}


// listening for button clicks

buttons.forEach((button =>{
    button.addEventListener("click", (e) => calculate(e.target.textContent))
}))

// heres an event listener for the back button
backButton.addEventListener("click",()=>{
    output = output.toString().slice(0, -1)
    figuresBox.textContent = output;
})