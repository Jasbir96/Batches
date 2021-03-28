let fs = require("fs");
// console.log("Before");
// callback 
// asyncFn(data ,cb)
fs.readFile("f1.txt", function cb(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("data->", data)
    }
})
// console.log("After");
console.log("before");
// promises
let token = fs.promises.readFile("f11.txt");
console.log(token);
// consume 
token
    .then(function (data) {
        console.log(data);
    })
token
    .catch(function (err) {
        console.log(err)
    })
// setTimeout(function () {
//     console.log(token);
// }, 3000);
console.log("After");