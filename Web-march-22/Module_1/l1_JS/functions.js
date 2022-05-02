// function name 
// function definition -< code 
function fn() {
    console.log("I am a function");
    // optional return type

}

// function invocation -> call
// let rVal = fn();
// when you don't return anything from a fn 
// then it will return undefined
// console.log("rval from fn", rVal);

// with  parameters
function fnwithPar(a, b) {
    console.log(a, " ", b);
    return "return value";
}
fnwithPar(10, 20);
let rVal = fnwithPar("Hello", 20);
console.log(rVal);

