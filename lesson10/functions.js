//Function Declaration
function sum (a,b){
    return a+b;
}
//вызов
let result = sum (50,30)
console.log(result);

function print (){
    console.log("hello");
}
let res2 = print ()
console.log(res2);

// Function Expression
const devide = function (a,b){
    return a/b;
}
console.log(devide(10,2));

print2();
function print2(){
    console.log("Print-2");
}