// все элементы находим
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const resultImt = document.querySelector('#resultImt');
const getResultButton = document.querySelector('#resultButton');
const resultElement = document.querySelector('#result');

getResultButton.addEventListener('click', showResult);

function showResult(){
    let resultOfAdding;
    resultOfAdding = +heightInput.value + +weightInput.value;
    resultImt.innerText = resultOfAdding;
}