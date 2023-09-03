const inputNumber = document.querySelector<HTMLInputElement>("#inputNumber");
const firstButton = document.querySelector<HTMLButtonElement>("#firstButton");
const secondButton = document.querySelector<HTMLButtonElement>("#secondButton");
const thirdButton = document.querySelector<HTMLButtonElement>("#thirdButton");


const generateRandomNumber = () => {
    if (firstButton && inputNumber) {
        firstButton.addEventListener("click", () => {
            const randomNumber = Math.floor(Math.random() * 90000) + 10000;
            inputNumber.value = randomNumber.toString();
            const numberValue = parseInt(inputNumber.value);
            console.log(numberValue);
        });
    }
};

generateRandomNumber();