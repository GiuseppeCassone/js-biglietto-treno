const firstNumber = Number(prompt("Indica il primo numero"));
const secondNumber = Number(prompt("Indica il secondo numero"));
const thirdNumber = Number(prompt("Indica il terzo numero"));

const average = (firstNumber + secondNumber + thirdNumber) / 3;


document.getElementById(`average-number`).innerHTML = `La media è di ${average.toFixed(2)}`;

