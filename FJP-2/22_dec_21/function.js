// function are variable 

// function outer(param) {
//     console.log(param);
//     param();

// }
// function chotaFn() {
//     console.log("Hello I am a chota fn");
// }
// // 1. function can be passed as a parameter to another function -> higher Order functions
// outer(chotaFn);


// // 2. function's reference can be stored in another variable -> function expression
// let a = [1, 2, 3, 4, 5];
// let b = a;
// // function expression
// let anotherName = function () {
//     console.log("I am an expression");
// }
// anotherName();

// 3. function  return from  a function 
// function fn() {
//     return "Hello";
// }
// let rval = fn();
// console.log(rval);
function outer() {
    console.log("Hello i am outer and i am returning Inner");
    return function inner() {
        console.log(" I am Inner");
    }
}
let rVal = outer();
console.log(rVal);
rVal();

