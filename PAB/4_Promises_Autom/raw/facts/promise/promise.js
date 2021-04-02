let fs = require("fs");
let frP = fs.promises.readFile("f1.txt");
console.log(frP);
// promise reperesnt furture
console.log("Before");
setTimeout(function () {
    console.log(frP);
},2000)
console.log("after");