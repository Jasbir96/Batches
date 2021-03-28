let fs = require("fs");
console.log("before");
// callback is an older way to do async programming
fs.readFile("f1.txt", function cb(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("data->" + data);
    }
});
// promise return intial state is always pending
let Obj = fs.promises.readFile("f11.txt");
console.log("Initial state", promise);
console.log("After");
// comsumer function it will be called when a promise is fullfilled
// async functions
Obj.then(function (data) {
        console.log(data);
    })
// reject 
Obj.catch(function (err) {
        console.log("err", err);
    })
// setTimeout(function () {
//     console.log("final state", promise);
// }, 2000);
console.log("Hello");