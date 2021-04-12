let fs = require("fs");
console.log("Before");
// async function 
// let content = fs.readFileSync("f1.txt");
// callback hell
console.log("F1 read sent");
fs.readFile("../f1.txt", cb1);
// your work is completed
function cb1(err, content) {
    if (err) {
        console.log(err);
    } else {
        console.log("content->" + content);
        console.log("F3 read sent");
        // start next task
        fs.readFile("../f3.txt", cb2);
    }
}
function cb2(err, content) {
    if (err) {
        console.log(err);
    } else {
        console.log("content->" + content);
        console.log("F4 read sent");
        fs.readFile("../f4.txt", cb3);
    }
}
function cb3(err, content) {
    if (err) {
        console.log(err);
    } else {
        console.log("content->" + content);
    }
}
console.log("After");