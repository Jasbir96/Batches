let fs = require("fs")
let f1Path = "../f1.txt";
let f2Path = "../f2.txt";
let f3Path = "../f3.txt";
console.log("before");
// code to read 3 files parllely 
fs.readFile(f1Path, f1cb);
fs.readFile(f2Path, f2cb);
fs.readFile(f3Path, f3cb);
function f1cb(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("data" + data);
    }
}
function f2cb(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("data" + data);
    }
}
function f3cb(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("data" + data);
    }
}
console.log("AFter");
for (let i = 1; i <= 10; i++) {
    console.log("Number is ", i);
}
