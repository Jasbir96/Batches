
// function are variable 
function outer() {
    let outerVar = 10;
    console.log("Outer function called ");
    return function inner(secondNum) {
        console.log("Inner function called");
        return outerVar + secondNum;
    }
}
let innerFnRef = outer();
console.log("Between");
let rVal = innerFnRef(20);
console.log("rVal", rVal);