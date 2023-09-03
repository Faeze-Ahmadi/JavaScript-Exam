"use strict";
const inputNumber = document.querySelector("#inputNumber");
const firstButton = document.querySelector("#firstButton");
const secondButton = document.querySelector("#secondButton");
const thirdButton = document.querySelector("#thirdButton");
const checkButton = document.querySelector("#checkButton");
// import {
//     inputNumber,
//     firstButton,
//     secondButton,
//     thirdButton,
//     checkButton
// } from "./src/importer.js"
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
const checkBox = () => {
    if (checkButton) {
        checkButton.addEventListener("click", () => {
            for (var i = 0; i < numberList.length; i++) {
                var itemType = typeof numberList[i];
                if (itemType === "number") {
                    alert("all items are number.");
                }
                else {
                    alert("there is an item that it is not number!");
                }
                ;
            }
            ;
        });
    }
    ;
};
generateRandomNumber();
displayNumberList();
clearInput();
checkBox();
//# sourceMappingURL=index.js.map