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
// function getAfunction(param) {
//     console.log("I am getAfunction");
//     console.log("param", param);
//     param();
// }
// getAfunction(chotaFn);

// function chotaFn() {
//     console.log("I am chota fn")
// }

//  return  from a function
// function fn1() {
//     let obj =
//      { name: "Jasbir" };
//     return obj;
// }
// // this rval also contains the reference of obj object
// let rVal = fn1();
// console.log("rVal", rVal);


function outer() {
    console.log("I am outer returning inner");
    return function inner() {
        console.log("I am inner fn and i will run when you will call me ");
    }
}

let rFn = outer();
// console.log("After this line i will call inner");
rfn();



// closure
function getFirstName(firstName) {
    console.log("firstName", firstName);
    return function getLastName(lastName) {
        console.log("lastName", lastName);
        return function printFullName() {
            console.log("My Name is ", firstName, lastName);
        }
    }
}
let getLastName = getFirstName("Jasbir");
console.log("get firstName stack hat gya hai")
let printFullName = getLastName("Singh");
console.log("getLastName stack hat gya hai")
printFullName();


// Behaviour of a variable
    // assignment
    //  pass to function as a parameter
    //  return  from a function
