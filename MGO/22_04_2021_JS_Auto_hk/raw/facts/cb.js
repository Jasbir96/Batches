let fs = require("fs");
console.log("Before");
//  function cb
fs.readFile("f1.txt", cb);
function cb(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("data " + data);
    }
}
// let data = fs.readFileSync("f1.txt");
// console.log("data" + data);
console.log("After");
