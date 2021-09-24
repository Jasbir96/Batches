let fs = require("fs");
console.log("Before");
// start the work 
// and nodejs will provide diffrent worker to work  on these three task 
let firstFilePromise = fs.promises.readFile("f1.txt");
let secondFilePromise = fs.promises.readFile("f2.txt");
let thirdFilePromise = fs.promises.readFile("f3.txt");
firstFilePromise.then(cb);
secondFilePromise.then(cb1);
thirdFilePromise.then(cb2);
function cb( content) {
    console.log("content" + content);
}
function cb1( content) {
    console.log("content" + content);
}
function cb2( content) {
    console.log("content" + content);
}
console.log("After");