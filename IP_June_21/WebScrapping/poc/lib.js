let a = 10;
console.log("I will be executed")
function fn(param) {
    console.log(" I want to be exported", param);
}
function fn1() {
    console.log("Kindly don't export me ")
}
// nodejs
module.exports = {
    varname: a,
    fnFunction: fn
}