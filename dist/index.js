"use strict";
const inputNumber = document.querySelector("#inputNumber");
const firstButton = document.querySelector("#firstButton");
const secondButton = document.querySelector("#secondButton");
const thirdButton = document.querySelector("#thirdButton");
const numberList = [];
const generateRandomNumber = () => {
    if (firstButton && inputNumber) {
        firstButton.addEventListener("click", () => {
            const randomNumber = Math.floor(Math.random() * 90000) + 10000;
            inputNumber.value = randomNumber.toString();
            const numberValue = parseInt(inputNumber.value);
            numberList.push(numberValue);
            console.log(numberValue);
        });
    }
};
const displayNumberList = () => {
    if (secondButton) {
        secondButton.addEventListener("click", () => {
            console.log(numberList);
        });
    }
};
const clearInput = () => {
    if (thirdButton && inputNumber) {
        thirdButton.addEventListener("click", () => {
            inputNumber.value = "";
        });
    }
};
const error = () => {
    if (thirdButton && inputNumber) {
        thirdButton.addEventListener("click", () => {
            if (isNaN(parseInt(inputNumber.value))) {
                alert("لطفاً فقط عدد وارد کنید.");
            }
            else {
                inputNumber.value = "";
            }
        });
    }
};
generateRandomNumber();
displayNumberList();
clearInput();
error();
//# sourceMappingURL=index.js.map