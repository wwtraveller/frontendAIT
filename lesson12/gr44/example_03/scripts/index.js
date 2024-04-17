// все элементы находим
const firstInput = document.querySelector('#firstNumber');
const secondInput = document.querySelector('#secondNumber');
const resultField = document.querySelector('#result');
const getResultButton = document.querySelector('#resultButton');

getResultButton.addEventListener('click', showResult);

function showResult(){
    let resultOfAdding;
    //resultOfAdding = Number(firstInput.value) + Number(secondInput.value); можно так, но проще как ниже с + 
    resultOfAdding = +firstInput.value + +secondInput.value;
    resultField.innerText = resultOfAdding;
}