let fs = require("fs");
console.log("Before");
fs.readFile("f1.txt", cb1);
// function cb1(err, content) {
//     console.log("content"+ content);
//     fs.readFile("f2.txt", cb2);
// }
// function cb2(err, content) {
//     console.log("content"+ content);
//     fs.readFile("f3.txt", cb3);
// }
// function cb3(err, content) {
//     console.log("content"+ content);
// }
console.log("After");