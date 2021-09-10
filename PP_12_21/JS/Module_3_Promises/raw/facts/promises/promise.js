// state 
// final 

let fs = require("fs");
function myPromisiedFsReader(filePath) {
    // using this existing function
    return new Promise(function cb(resolve, reject) {
        // console.log("8")
        fs.readFile(filePath, function cb(err, data) {
            // console.log("10")
            if (err) {
                reject(err);
            }
            else {
                // console.log("15")
                resolve(data)
            }
        })
        // console.log("9");
    })

}
console.log("Before");
let fileReadPromise = myPromisiedFsReader("f1.txt");
// state -> pending 
console.log("24", fileReadPromise);
// 1sec -> async (1sec)
// setTimeout(function () {
//     console.log("11", fileReadPromise);
// }, 1000);
// function call -> then is synchronous 
// this will always run async
function scb(data) {
    console.log("hello", data);
    // return new Error("This is a error");
return undefined;
}
// console.log("33");
// let thenNpromise = fileReadPromise.then(scb)
fileReadPromise.then(scb).then(scb2);
function scb2(data) {
    console.log("42", data);
}``
// setTimeout(function () {
//     console.log("41", thenNpromise)
// }, 2000);
// thenNPromise -> rules
// function fcb(err) {
//     console.log("hello", err);
// }
// fileReadPromise.catch(fcb);
// console.log("35")

console.log("after");