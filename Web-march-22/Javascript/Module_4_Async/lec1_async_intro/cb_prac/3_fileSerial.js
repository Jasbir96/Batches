let fs = require("fs")
let f1Path = "../f1.txt";
let f2Path = "../f2.txt";
let f3Path = "../f3.txt";
let f4Path = "../f4.txt";
console.log("before");

let outputContent = "";
// f1-> f2->f3 -> f4
fs.readFile(f1Path, f1cb);
function f1cb(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("data" + data);
        fs.readFile(f2Path, f2cb);
        outputContent += data;

    }
}
function f2cb(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("data" + data);
        outputContent += data;
        fs.readFile(f3Path, f3cb);
    }
}
function f3cb(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("data" + data);
        outputContent += data;
        // async 
        fs.writeFile(f4Path, outputContent,writecb);
    }
}

function writecb(err, data) {
    console.log("F4 created");
}
console.log("AFter");
for (let i = 1; i <= 10; i++) {
    console.log("Number is ", i);
}
