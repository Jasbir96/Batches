// sync serially file read
let fs = require("fs");
console.log("Before");
let content = fs.readFileSync("f1.txt");
console.log("content" + content);
content = fs.readFileSync("f2.txt");
console.log("content" + content);
content = fs.readFileSync("f3.txt");
console.log("content" + content);
console.log("After");
