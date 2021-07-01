// you can't install js
// js is alway wrapped inside an enviornment
// js doesn't have main-> global execution context 
// execute line by line
// 
let fs = require("fs");
// sync example
// serial
// console.log("before");
// let content = fs.readFileSync("f1.txt");
// console.log("content " + content);
// console.log("After");
// // async version 
console.log("before");
// async function ??
// -> you can't create async functions
// nodejs an async function cannot block the main stack 
fs.readFile("f1.txt", function (err, content) {
    if (err) {
        console.log(err);
    } else {
        console.log("content " + content);

    }
});
console.log("After");
for (let i = 1; i <= 10; i++) {
    console.log("Number is ", i);
}
// while (true);