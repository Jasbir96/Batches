// /convert a callback based code into promise based code
let fs = require("fs");
console.log("Before");
// promise based creater
// return Promise -> object
// resolve -> work complete
// reject-> work error
// user
let frp = MyFilereadPromise("f1.txt");
console.log(frp)
frp
    .then(function (data) {
        console.log("data->" + data)
    })
frp
.catch(function (err) {
        console.log(err);
    })
let f1ReadP = fs.promises.readFile("f1.txt");
console.log(f1ReadP);
f1ReadP
    .then(function (data) {
        console.log("data" + data);
    })
f1ReadP
.catch(function (err) {
    console.log(err);
})

console.log("After");
 // file read promise
