let fs = require("fs");
//  nothing -> undefined;
function fn() {
    console.log("Hello");
    let frP = fs.promises.readFile("f1.txt");
    return frP
}
let rVal = fn();
console.log("rval from fn", rVal);
//  1 . async function always returns a promise
        // a.  if you return a value from a async function then  it will return a promise with that value as a resolved value
    //   b. if you return a pending promise thn it will return  that promise

console.log("Before");
async function fn() {
    console.log("Hello");
    // return 10;
    // node 
    let frP = fs.promises.readFile("f1.txt");
    console.log("file read has been started");
    return frP;
}
let rValP = fn();
console.log("rval from fn", rValP);
// attach 
rValP.then(function (PVal) {
    console.log("Pval from fn" + PVal);
})
console.log("After");

