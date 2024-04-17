const plusBtnElement = document.getElementById("plus");
const minusBtnElement = document.getElementById("minus");
const plus10BtnElement = document.getElementById("plus10");
const minus10BtnElement = document.getElementById("minus10");
const counterElement = document.getElementById("counter");

let counter = 0;

const plusHandler = () => {
    counter++;
    counterElement.innerText=counter // увеличиваем значение счетчика на +1
}
const plus10Handler = () => {
    //counter = counter +10;
    counter+=10;
    counterElement.innerText=counter // увеличиваем значение счетчика на +10
}

const minusHandler = () => {
    counterElement.innerText= --counter // уменьшаем значение счетчика на -1
}
const minus10Handler = () => {
    //counter = counter - 10;
    counter-=10;
    counterElement.innerText=counter // уменьшаем значение счетчика на -10
}

// чтобы теперь это работало, надо повесить слушатель событий на кнопки
plusBtnElement.addEventListener('click',plusHandler);
plus10BtnElement.addEventListener('click',plus10Handler);
minusBtnElement.addEventListener('click',minusHandler);
minus10BtnElement.addEventListener('click',minus10Handler);