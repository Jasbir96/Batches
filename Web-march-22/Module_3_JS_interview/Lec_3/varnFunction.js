// assign
let a = 10;
let b = 20;
a = b;
// console.log("a", a);

// reference copy 
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 7, 8];
arr1 = arr2;
// console.log("arr1", arr1);

// assignment
// function are also  treated as a variable in js -> //
//  functions are first class citizen in js 

// function fn() {
//     console.log("fn is a function");
//     return 10;
// }
// // you have put address of fn in variable anotheFn
// let anotherFn = fn;
// let anotheReturnValue = fn();
// console.log("anotheReturnValue ",anotheReturnValue);
// anotherFn();









//  pass to function as a parameter
// function fn(param) {
//     // what does param contains here ?? -> param has reference  of arr1
//     console.log("param", param);
// }
// fn(arr1);
function getAfunction(param) {
    console.log("I am getAfunction");
    console.log("param", param);
    param();
}
getAfunction(chotaFn);

function chotaFn() {
    console.log("I am chota fn")
}


//  return  from a function
// function fn1() {
//     let obj =
//      { name: "Jasbir" };
//     return obj;
// }
// // this rval also contains the reference of obj object
// let rVal = fn1();
// console.log("rVal", rVal);

// Behaviour of a variable 
    // assignment
    //  pass to function as a parameter
    //  return  from a function
