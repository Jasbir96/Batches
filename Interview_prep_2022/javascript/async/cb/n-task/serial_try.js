let fs = require("fs");
let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt"];
fs.readFile(, cb);
function cb(err, content) {
    if (err) {
        console.log(err);
    } else {
        console.log("content->" + content);
    }
}