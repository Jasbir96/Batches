let fs = require("fs");
// let frP = fs.promises.readFile("f1.txt");
//  frP.then(cb);
// // cb behaves in a particular manner
// function cb(data) {
//     console.log("data" + data);
//     return fs.promises.readFile("f2.txt");
// }
console.log("Before");
// async function -> await 
(async function () {
    let frP = fs.promises.readFile("f1.txt");
    console.log("before adding await");
    let data = await frP;
    console.log("data" + data);
    console.log("After reading data");
    let f2P = fs.promises.readFile("f2.txt");
    let sFileData = await f2P;
    console.log("data" + sFileData);
})();
// async function fn() {
//     let frP = fs.promises.readFile("f1.txt");
//     console.log("before adding await");
//     frP.then(function (data) {
//         console.log("data" + data);
//         let f2P = fs.promises.readFile("f2.txt");
//         return f2P;
//     }).then(function (sFileData) {
//         console.log("data" + sFileData);

//     })
// }
console.log("After");
console.log("other");
// thenKP -> cb return value
// value -> value
// nothing-> undefined
// pending promise-> thenkP will wait for that pedning promise
// error-> then will not run 