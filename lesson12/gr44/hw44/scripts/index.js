// все элементы находим
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const resultImt = document.querySelector('#resultImt');
const getResultButton = document.querySelector('#resultButton');
const resultElement = document.querySelector('#result');

getResultButton.addEventListener('click', showResult);
getResultButton.addEventListener('click', showDescription);

// для человека с весом 73 кг и ростом 172 см: ИМТ = 73 : (1,72 х 1,72) = 24,68 кг/м2.
function showResult(){
    let resultOfAdding;
    resultOfAdding = Math.round(+weightInput.value / Math.pow((+heightInput.value/100),2));
    resultImt.innerText = resultOfAdding;
}

const getImtDescription = function(imt, description){
     return description (imt)
 }
// const description = function(imt){
//     if (showResult<18){
//         return "Ниже нормального веса"
//     }else if (showResult>=18 && showResult<25){
//         return "Нормальный вес"
//     }else if (showResult>=25 && showResult<30){
//         return "Избыточный вес"
//     } else if (showResult>=30 && showResult<35){
//         return "Ожирение I степени"
//     } else if (showResult>=35 && showResult<40){
//         return "Ожирение II степени"
//     }else if (showResult>=40) {
//         return "Ожирение III степени"
//     }
// }
const description = function(imt){
    //function showDescription(imt){
    switch (imt) {
        case showResult<18: return "Ниже нормального веса";
        case showResult=18:
        case showResult=19: 
        case showResult=20: 
        case showResult=21: 
        case showResult=22: 
        case showResult=23: 
        case showResult=24: return "Нормальный вес";
        case showResult=25:
        case showResult=26:
        case showResult=27:
        case showResult=28:
        case showResult=29: return "Избыточный вес";
        case showResult=30:
        case showResult=31:
        case showResult=32:
        case showResult=33:
        case showResult=34:
        case showResult=35: return "Ожирение I степени";
        case showResult>35: return "Ожирение II степени";
        default: return "no such imt";
    }
}

function showDescription(){
    
    let resultOfAdding1;
    if (showResult<18){
        resultOfAdding1 = getImtDescription(showResult<18, description);
            }else if (showResult>=18 && showResult<25){
                resultOfAdding1 = getImtDescription(showResult>=18 && showResult<25, description);
            }else if (showResult>=25 && showResult<30){
                resultOfAdding1 = getImtDescription(showResult>=25 && showResult<30, description);
            } else if (showResult>=30 && showResult<35){
                resultOfAdding1 = getImtDescription(showResult>=30 && showResult<35, description);
            }else if (showResult>=35) {
                resultOfAdding1 = getImtDescription(showResult>=35, description);
            } //return resultOfAdding1;
    //let resultOfAdding1 = getImtDescription(showResult<18, description);
    resultElement.innerText = resultOfAdding1;
}

//const res1 = getImtDescription(showResult>=18 && showResult<25, description);
//console.log(showResult>=18 && showResult<25);
console.log(getImtDescription(showResult=25, description));
// console.log(getImtDescription("ИМТ < 18", description));
// console.log(description("ИМТ < 18"));