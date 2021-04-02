let fs = require("fs");
// console.log("before");
// callback is an older way to do async programming
// fs.readFile("f1.txt", function cb(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("data->" + data);
//     }
// });
// data -> promise function
//  cb -> then 
// promise -> file read 
// node 
// polyfill
// let frP = fs.promises.readFile("f1.txt");

// input -> file path
// output -> promise -> file read 

//  wrap it inside a Promise object
// call resolve where you think work is completed-> pass data
// call reject  where you think work is err-> pass data
// resolve function ->  
function promisewalareadFile(filepath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filepath, function cb(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
// promise based
let frP = promisewalareadFile("f1.txt");
// cb
console.log("frp", frP);
// setTimeout(function () {
//     console.log(frP+"");
// }, 1000);
// why >
function promisifiedSetTimeout() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(10);
        }, 2000)

    })
}
function scb(data) {
    console.log(3);
    console.log("frP data->" + data);
    // 
    return promisifiedSetTimeout();
}
function fcb(err) {
    console.log("err->" + err);
}
console.log(1);
let thenKaPromise = frP.then(scb)
console.log("53 then ka promise", thenKaPromise);
thenKaPromise
    .then(function (data) {
        console.log("inside thenKaPromise", data);
    })
// setTimeout(function () {
//     console.log("55 then ka promise", thenKaPromise);
// }, 1000);
// console.log(2);
frP.catch(fcb);
console.log("after");