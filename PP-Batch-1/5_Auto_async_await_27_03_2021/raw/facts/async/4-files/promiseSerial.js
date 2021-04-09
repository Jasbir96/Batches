let fs = require("fs").promises;
console.log("before");
// async function fs.readfile
// con -> you need to attach catch for every then
// brute force
// let frp = fs.readFile("../f1.txt");
// frp.then(cb);
// function cb(data) {
//     console.log("content->" + data);
//     let f2rP = fs.readFile("../f2.txt");
//     f2rP.then(cb2);
// }
// function cb2(data) {
//     console.log("content->" + data);
//     let f3rP = fs.readFile("../f3.txt");
//     f3rP.then(cb3);
// }
// function cb3(data) {
//     console.log("content->" + data);
// }
// improvement
let frp = fs.readFile("../f1.txt");
frp.then(cb).then(cb2).then(cb3).catch(function (err) {
   console.log("Inside catch");
})
function cb(data) {
    console.log("content->" + data);
    let f2rP = fs.readFile("../f2.txt");
    return f2rP;
}
function cb2(data) {
    console.log("content->" + data);
    let f3rP = fs.readFile("../f3.txt");
    return f3rP;
}
function cb3(data) {
    console.log("content->" + data);
}
