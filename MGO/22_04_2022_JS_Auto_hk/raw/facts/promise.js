// promise is just another way of doing async task
let fs = require("fs");
console.log("before");
//  
let promise = 
fs.promises.readFile("f1.txt");
promise.then(function (data) {
    console.log("data " + data);
})
promise.catch(function (err) {
    console.log(err);
})

console.log("after");