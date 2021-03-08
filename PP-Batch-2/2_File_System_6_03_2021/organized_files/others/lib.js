// variable 
// function
let a = "hello";
function libFn(param) {
    console.log("Inside libFn");
}
function libfn2() {
    console.log("Inside libFn, I am libFn2");
}


module.exports = {
    varName: a,
    fn: libFn
}
