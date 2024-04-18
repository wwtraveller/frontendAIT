// все элементы находим
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const resultImt = document.querySelector('#resultImt');
const getResultButton = document.querySelector('#resultButton');
const resultElement = document.querySelector('#result');

getResultButton.addEventListener('click', showResult);
//getResultButton.addEventListener('click', determineBMICategory);

function showResult() {
    let resultOfAdding;
    resultOfAdding = Math.round(+weightInput.value / Math.pow((+heightInput.value/100), 2));
    resultImt.innerText = resultOfAdding;

    let resultCategory = determineBMICategory(resultOfAdding);
    resultElement.innerText = resultCategory;
    function determineBMICategory(bmi) {
        if (bmi < 18) {
            return "Недостаточный вес";
        } else if (bmi < 25) {
            return "Нормальный вес";
        } else if (bmi < 30) {
            return "Избыточный вес";
        } else {
            return "Ожирение";
        }
    }
}
