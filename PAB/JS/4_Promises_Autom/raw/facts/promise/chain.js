let fs = require("fs");
let frp = fs.promises.readFile("f1.txt");
console.log("before");
let thenKaPromise = frp.then(scb);
function scb(data) {
    console.log("inside scb");
    let f2P = fs.promises.readFile("f2.txt");
    return f2P;
}
thenKaPromise.then(
function (data) {
console.log("data"+data);
})

console.log("then ka promise", thenKaPromise)
setTimeout(function () {
    console.log("frp", frp);
    console.log("then ka promise", thenKaPromise);
}, 1000);
console.log("After");