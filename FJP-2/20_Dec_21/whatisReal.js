// memory for the functions are allocated before the code is executed
//  functions are created in heap
//  and there address are stored in stack
// no function overloading in JS
console.log("script started");
iamReal();
// 1
function iamReal() {
    console.log("I am real");
}
// 2
function iamReal(sdmfbdsjf) {
    console.log("He isn't -> I am the real one");
}
iamReal();