let fs = require("fs");
console.log("before");
// file read ,db query ,request 
// let content = fs.readFileSync("f1.txt");
// console.log("content ->" + content);
fs.readFile("f1.txt", cb);
function cb(err, data) {
    console.log("content " + data);
}
console.log("After");
console.log("other");