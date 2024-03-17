//selecting the things first
const form = document.querySelector("form")
const billAmount = form.elements["billAmount"]//user
const tipPercentage = form.elements["tipPercent"]//user
const tipAmount = form.elements["tipAmount"]//calculate
const totalBill = form.elements["totalBill"]//calculate

//!logging the bill amount to check whether it is referring to the correct field
// console.log(billAmount)

//calculate the tip amount
const tipAmountCal = (billInput, tipInput) => {
    return (tipInput / 100) * billInput
}
const amount = () => {
    const billAmountValue = billAmount.value
    const tipPercentageValue = tipPercentage.value
    const sum = tipAmountCal(billAmountValue, tipPercentageValue)
    return sum
}

//calculate the total bill amount


const totalAmount = () => {
    const billAmountValue = parseInt(billAmount.value)
    const tipAmount = amount()
    const total = tipAmount + billAmountValue
    return total
}
//check if the inputs are empty..if yes return 1 else 0 // !added later
const isEmpty = (userInput) => {

    if (userInput === "")
        return 1
    else
        return 0

}

//check if the input is a number if yes return 1 else return 0 //*! added later
const isNumber = (userInput) => {
    if (typeof (userInput) === "number")
        return 1
    else
        return 0

}
//check the bill amount whether it is empty or not Or whether it is a number or not //*! added later
const checkUserInput = () => {
    const userInput = parseInt(billAmount.value) //!check parse int
    //!logging the user input value
    // console.log(userInput)
    if (isEmpty(userInput)) {
        const msgBox = document.querySelector("#bill")
        msgBox.textContent = "Bill amount cannot be empty"
    } else if (!isNumber(userInput)) {
        const msgBox = document.querySelector("#bill")
        msgBox.textContent = "Please enter a number"
    } else {
        const msgBox = document.querySelector("#bill")
        msgBox.textContent = "Valid"
    }
}

//now check the tip percentage field//*! added later
const checkTipPercent = () => {
    const userInput = parseInt(tipPercentage.value)
    if (isEmpty(userInput)) {
        const msgBox = document.querySelector("#tip")
        msgBox.textContent = "Tip % cannot be empty"
    } else if (!isNumber(userInput)) {
        const msgBox = document.querySelector("#tip")
        msgBox.textContent = "Please enter a number"
    }
    else {
        const msgBox = document.querySelector("#tip")
        msgBox.textContent = "Valid"
    }
}
//add the event listenerundefined



form.addEventListener("submit", (e) => {
    e.preventDefault()
    checkUserInput()
    checkTipPercent()
    tipAmount.value = amount()
    totalBill.value = totalAmount()
})
//to be continued
//working
