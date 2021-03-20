let fs = require("fs");
console.log("before");
// file read ,db query ,request 
// let content = fs.readFileSync("f1.txt");
console.log("f1 read sent");
fs.readFile("../f1.txt", cb);
fs.readFile("../f2.txt", cb);
fs.readFile("../f3.txt", cb);
fs.readFile("../f4.txt", cb);
function cb(err, data) {
    console.log("content " + data);
    console.log("f2 read sent");
}
console.log("After");
// console.log("other");