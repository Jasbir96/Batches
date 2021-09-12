let fs = require("fs");
// console.log("Before");
// // let data = fs.readFileSync("f1.txt");
// // /
// // db queries,file read , request ,image processing
fs.readFile("f11.txt", cb);
function cb(err, data) {
    console.log(err);
    if (err) {
        console.log(err);
    } else {
        console.log("content->" + data)
    }
}
// console.log("After");
// console.log("other work");
// // while (true) {

// // }






