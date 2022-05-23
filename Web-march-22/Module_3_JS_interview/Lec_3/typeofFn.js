// function statement
function fn() {
    console.log("I am a statement");
}
fn();

// function expressions
let fnAddressHolder = function () {
    console.log("I am a function expression")
}
fnAddressHolder();

// IIFE-> immediately invoke function expression
(function IIFEE() {
    console.log("I am IFEE");
})()

// arrow -> function expression (syntax sugar)
// react
let arrFn = () => {
    console.log("I am an arrow fn");
}
arrFn();