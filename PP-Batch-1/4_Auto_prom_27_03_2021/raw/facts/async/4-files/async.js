let fs = require("fs");
console.log("before");
// async function fs.readfile
fs.readFile("../f1.txt", cb);
fs.readFile("../f2.txt",cb);
fs.readFile("../f3.txt",cb);
function cb(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("content->" + data);
    }
}
console.log("after");
console.log("other");

