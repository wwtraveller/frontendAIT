console.log('test');
//const plusBtnElement = document.getElementById('plus');

// меняем
const ourTitle = document.querySelector('.title')
console.log(ourTitle);
ourTitle.innerText = 'Header';
ourTitle.classList.add('font-red');

// создаем новые ноды
const ourSpan = document.createElement('span');
ourSpan.innerText = ' Text in span';
ourSpan.classList.add('span-style');

//созданную ноду вставляем куда-то
ourTitle.append(ourSpan);

// слушаем события
// создаем кнопку
const ourButton = document.createElement('button');
ourButton.innerText = 'lets go';

// найдем элемент div и в переменную его запихнем и размещаем кнопку в div
const divForButton = document.querySelector('.button');
divForButton.append(ourButton);

// вешаем слушатель на кнопку
ourButton.addEventListener('click', functionB);

// вспомогательная функция колбек (callback) 
function functionB() {
    console.log('Я функция functionB выполнилась');
}