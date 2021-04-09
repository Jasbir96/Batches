let fs = require("fs");
console.log("before");
// async function fs.readfile

function fileReader(fileName) {
    console.log("Before read file");
    fs.readFile(fileName, cb);
    console.log("After read file");
}
function cb(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("content->" + data);
    }
}

fileReader("f1.txt");

console.log("after");


