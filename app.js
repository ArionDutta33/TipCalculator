//selecting the form and the various intput fields
const form = document.querySelector("form")
const billAmount = form.elements["billAmount"]
const tipPercent = form.elements["tipPercent"]
const tipAmount = form.elements["tipAmount"]
const totalBill = form.elements["totalBill"]
console.log(billAmount, tipPercent, tipAmount, totalBill)

//fuction to check if any of the input field is empty or not
const isEmpty = (fieldInput) => {
    if (fieldInput === "")
        return 1;
    else
        return 0;

}

//checking whether the input fields have only numbers of not
const notNumber = (userInput) => {
    if (typeof (userInput) === "string" || isNaN(userInput))
        return 1
    else
        return 0
}
//warn the user of invalid inputs
const showMsg = (input, msg) => {
    const show = input.nextElementSibling
    show.textContent = msg
}

//now checking the field of bill amount
const checkBill = () => {
    let valid = false
    const billValue = parseInt(billAmount.value)//parse int added
    if (isEmpty(billValue)) {
        showMsg(billAmount, "The bill amount cannot be empty")
        return valid
    } else if (notNumber(billValue)) {
        showMsg(billAmount, "Enter a number")
        return valid
    }
    else {
        showMsg(billAmount, "valid")
        valid = true
        return valid
    }

}

//now checking the field of the tip amount
const checkTip = () => {
    let valid = false
    const tipValue = parseInt(tipPercent.value)//parse int added
    if (isEmpty(tipValue)) {
        showMsg(tipPercent, "Kindly enter the tip %")
        return valid
    }
    else if (notNumber(tipValue)) {
        showMsg(tipPercent, "Kindly enter the %")
        return valid
    }
    else {
        showMsg(tipPercent, "valid")
        valid = true
        return valid
    }

}
//making the logic where the user can enter the bill amount and tip percentage then get the tip amount and the total bill



const totalTip = () => {
    const billUserValue = parseInt(billAmount.value)//parse int added
    const tipPercentUserValue = parseInt(tipPercent.value)//parse int added

    return (tipPercentUserValue / 100) * billUserValue
}
const sumAmount = () => {
    const userBill = parseInt(billAmount.value)//parse int added

    const calTip = totalTip();
    return calTip + userBill;
}

//adding the event listener
form.addEventListener("submit", (e) => {
    e.preventDefault()

    let isBillValid = checkBill()
    let isTipValid = checkTip()

    let isFormValid = isBillValid && isTipValid

    if (isFormValid) {

        tipAmount.value = totalTip()

        totalBill.value = sumAmount()

    }
})
