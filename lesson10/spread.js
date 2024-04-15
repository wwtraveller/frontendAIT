const fruits = ["apple", "orange", "mango"];
const fruits2 = fruits;
fruits [0] = "banana";
console.log (fruits);
console.log (fruits2);

let str1 = "hello";
let str2 = str1;
str1 = "Goodbye";
console.log (str1);
console.log (str2);

const cars = ["BMW", "Mercedes", "Audi"]
//spread
const carsCopy = [...cars];
carsCopy[0]= "Opel";
console.log (cars);
console.log (carsCopy); //здесь разные ссылки, поэтому даже если мы поменяем данные в первом массиве, во втором они не поменяются. И у каждого массива свои данные

const cities1 = ["Berlin", "Paris"];
const cities2 = ["London", "Budapest"];
const joinedCities = [...cities1, ...cities2];
console.log(joinedCities);

const vegitables = ["cucumber", "tomato"];
const newVegitables = [...vegitables, "carrot"];
console.log(newVegitables);

// make alone
const countries1= ["Germany", "Russia", "Spain"];
const countries2= ["Italy", "Greece"];
const countries3= ["France", "Belarus"];
const joinedCountries = [...countries1, ...countries2, ...countries3];
console.log (joinedCountries);

const animals = ["cat", "dog", "birds"]
const animalsCopy = [...animals];
carsCopy[0]= "hamster";
console.log (animals);
console.log (animalsCopy);