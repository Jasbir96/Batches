// 1. without return 
// // function defintion -> code
// function sayHello(name) {
//     console.log("Hello ", name);
// }
// // // function invocation ->
//  this line actual runs that code
// sayHello("Jasbir");
// // // haven't called the function -> 
// function name print
console.log(sayHello);
// // // print the function after calling it -> returned value
// let rVal = sayHello("Jasbir")
// console.log("11", rVal);

// console.log("11", sayHello("Jasbir"));
// // // if you don't pass anything to the function ->
// // // parameter undefined
sayHello();





// 2. With return value;
function sayHello(name) {
    console.log("Hello ", name);
    return "returned from a function"
}

let rVal = sayHello("Jasbir");
console.log(rVal);






