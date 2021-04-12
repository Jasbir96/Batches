// file read
// network request
const axios = require("axios");
let fs = require("fs");
// what is the future value
let frP = fs.promises.readFile("f1.txt");
// console.log(frP);
// // future file read 
// frP
//     .then(function (data) {
//         console.log(data + "");
//     })
// // error 
// frP
//     .catch(function (err) {
//         console.log(err);
//     })
// console.log("After");
// promise future ??
let dataPromise = axios.get("https://www.google.com");
console.log(dataPromise);
dataPromise
    .then(function (res) {
        console.log(res.data);
    })
dataPromise.catch(function (err) {
    console.log(err)
})

console.log("after");