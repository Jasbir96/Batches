// function statement
fn();
function fn() {
    console.log("I am a statement");
}

// // function expressions
let fnAddressHolder = function () {
    console.log("I am a function expression")
}
fnAddressHolder();

// arrow -> function expression (syntax sugar)
// react
let arrFn = () => {
    console.log("I am an arrow fn");
}
arrFn();







// you can't acces the IFFEE Function outside  

// IIFE-> immediately invoke function expression -> 
// library -> IIFEE -> Jquery
(function IIFEE() {
    console.log("I am IFEE");
})()

