// forEach
// const ff =(a)=>{
//     console.log(a);
// }

const ff = (a,b,c) => {
    console.log(`${a} + ${b} + ${c}`);
}

const arrF = [1,2,3,5,4,10,6];
arrF.forEach(ff); // 7 раз запускает функцию ff

//--------------------


// let sum = 0;
// const number = (sum) => {
// sum = sum + number;
// } 
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(number);

// console.log("Сумма всех элементов массива: " + sum);

let sum = 0;

const addNumberToSum = (number) => {
    sum += number;
};

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(addNumberToSum);

console.log("Сумма всех элементов массива: " + sum);



// const numbers1 = [1, 2, 3, 4, 5];

// numbers1.forEach((number1, index, array) => {
//     array[index] += 3;
// });

// console.log("Массив после увеличения каждого элемента на 3: " + numbers1);

const numbers1 = [1, 2, 3, 4, 5];
const increasedNumbers = [];

numbers.forEach((number) => {
    increasedNumbers.push(number + 3);
});
console.log("Массив после увеличения каждого элемента на 3: " + numbers1);

//----------
const numbers2 = [4, 7, 10, 13, 16]; // Пример массива, полученного после увеличения на 3

const squaredNumbers = numbers2.map((number) => {
    return number * number;
});

console.log("Массив после возведения каждого элемента в квадрат:", squaredNumbers);

// const squared = numbers2[i];
// squared = numbers2[i]+squared;
// console.log(squared);


// map !!!
const callBackForMap = (element) => {
    return element + 4;
}

const arrAMap = arrF.map(callBackForMap);
console.log(arrAMap);


// filter
const callBackForFiler = (element) => {
    // if (element > 4) {
    //     return true
    // } else {
    //     return false
    // }
    return element > 4 ? true : false;
}

const arrAFilter = arrF.filter(callBackForFiler);
console.log(arrAFilter); // [ 5, 10, 6 ]

// slice - возвращает кусочек массива
const arrASliceResult = arrF.slice(0,3);
console.log(arrASliceResult); // [ 1, 2, 3 ]
console.log(arrF);

// sort
const callBackForSort = (a,b) => {
    // if(a>b){
    //     return -1;
    // } else {
    //     return 1
    // }
    //return a > b ? -1 : 1;
    return b - a;
}
const arrFcopy = [...arrF];
arrFcopy.sort(callBackForSort);
console.log(arrFcopy);

const array = 
[
    {"name": "John", "surname": "Doe", "height": 198, "effectiveness": 15.6},
    {"name": "Jane", "surname": "Smith", "height": 183, "effectiveness": 12.3},
    {"name": "Mike", "surname": "Brown", "height": 202, "effectiveness": 18.4},
    {"name": "Emily", "surname": "Davis", "height": 190, "effectiveness": 14.8},
    {"name": "Chris", "surname": "Wilson", "height": 205, "effectiveness": 20.1}
  ];
  const callBackForSort1 = (a,b) => {
//   const callBackForSort = (height) => {
//     // if(a>b){
//     //     return -1;
//     // } else {
//     //     return 1
//     // }
     return a.height > b.height ? -1 : 1;

}
array.sort(callBackForSort1);
console.log(array);

