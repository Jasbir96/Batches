//  function 
// variable 
let a = 10;
function fn() {
    console.log("Hello I am Fn");
    return "Hello";
}
function notToBeexported() {
    console.log("I don't want to be exported");
}
// code export 
module.exports = {
    varName: a,
    fxn: fn
}