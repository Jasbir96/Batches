function fn(param) {
    console.log("param is ", param);
    console.log("```````````````````````````");
}
// // value pass
// fn(10);
// fn("dsjfbd");
// // reference type value
// let a = [1, 2, 3, 4, 5];
// fn(a);
// fn({ name: "jasbir" });
//  function statement
// function fn() {
//     console.log("I am a fn statement");
// }
// statement
// fn();
// in js functions are treated as a variable
// variable -> assign value /address
// function address -> variable assign
// let b = a;
// console.log("b", b);
// a.pop();
// console.log("b", b);
// function expression;
let exp = function () {
    console.log("I am a function expression");
}
// // ivokation
exp();


// IIFE-> immediately invoke function expression
//  immediately 
(function fn() {
    console.log("I am an IFEE i will called immediately")
})();

// arrow function -> React 
let arrowFN = () => {
    console.log(" I am arrow  function");
}
arrowFN();
