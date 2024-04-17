const formElement = document.getElementById('form');
const listElement = document.getElementById('persons-list');
const clearBtnElement = document.getElementById('clear');
const clearOneBtnElement = document.getElementById('clear-one');


// Сперва получаем данные из формы с помощью метода getElementById
// formElement - это объект формы c идентификатором "form"
// listElement - это объект списка с идентификатором "persons-list"
// clearBtnElement - это объект кнопки с идентификатором "clear" - очистить весь список
// clearOneBtnElement - это объект кнопки с идентификатором "clear-one" - очистить один элемент списка

const persons = [];

const clearList = function(){
    while (listElement.hasChildNodes()){ // пока есть дочерние элементы списка
        listElement.firstChild.remove(); // удаляем первый элемент списка
    }
}

const clearOne = function(){
    if(listElement.hasChildNodes()){
        listElement.firstChild.remove()
    }
}

function clearInputs(event){
    event.target.nickname.value = "";
    event.target.place.value = "";
}
// Функция clearInputs срабатывает при нажатии на кнопку добавить в список

function changeStatus(event){
    if(event.target.style.textDecoration === "line-through"){
        event.target.style.textDecoration ="none"
    }else{
        event.target.style.textDecoration = "line-through"
    }
}
// Функция changeStatus срабатывает при нажатии на элемент списка и добавляет либо убирает подчеркивание


clearBtnElement.addEventListener('click',clearList);
clearOneBtnElement.addEventListener('click',clearOne);


formElement.addEventListener('submit',(event)=>{
    event.preventDefault();// предотвращает переход на другую страницу
    const person = {
        name:event.target.nickname.value,
        place:event.target.place.value
    };
    persons.push(person)
    //Объект person добавляется в массив persons
    // Данные из формы извлекаются с помощью свойства target и сохраняются в объект person
    // Объект имеет два свойства name и place которые содержат данные из формы

    const liElement = document.createElement("li");// создали тег li
    liElement.textContent = `${person.name} ${person.place}`;// добавили текст в li
    liElement.onclick = changeStatus;// добавили обработчик события на li

    listElement.append(liElement); // добавили li в конец списка
    clearInputs(event);// очистили форму


})