let fs = require("fs");
console.log("before");
fs.readFile("function.js", cb);
function cb(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("content->" + data);
    }
}
console.log("after");
while (true) { }
// tostring
// 
