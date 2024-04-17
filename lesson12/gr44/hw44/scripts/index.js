// все элементы находим
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const resultImt = document.querySelector('#resultImt');
const getResultButton = document.querySelector('#resultButton');
const resultElement = document.querySelector('#result');

getResultButton.addEventListener('click', showResult);

// для человека с весом 73 кг и ростом 172 см: ИМТ = 73 : (1,72 х 1,72) = 24,68 кг/м2.
function showResult(){
    let resultOfAdding;
    resultOfAdding = Math.round(+weightInput.value / Math.pow((+heightInput.value/100),2));
    resultImt.innerText = resultOfAdding;
}

const getImtDescription = function(imt, description){
    return description (imt)
}
const description = function(imt){
    switch (imt) {
        case "ИМТ < 18": return "Ниже нормального веса";
        case "ИМТ >= 19 И < 25": return "Нормальный вес";
        case "ИМТ >= 25 И < 30": return "Избыточный вес";
        case "ИМТ >= 30 И < 35": return "Ожирение I степени";
        case "ИМТ >= 35 И < 40": return "Ожирение II степени";
        case "ИМТ >= 40": return "Ожирение III степени";
        default: return "no such imt";
    }
}
const res1 = getImtDescription("ИМТ >= 19 И < 25", description);
console.log(res1);
// console.log(getImtDescription("ИМТ < 18", description));
// console.log(getImtDescription("ИМТ < 18", description));
// console.log(description("ИМТ < 18"));