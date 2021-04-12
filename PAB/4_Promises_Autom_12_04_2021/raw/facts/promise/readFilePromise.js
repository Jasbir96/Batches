let fs = require("fs");
// console.log("2", "before");
// node fs.readFile -> create new Promise
function MyFilereadPromise(filePath) {
    return new Promise(cb);
    function cb(resolve, reject) {
        // console.log("8", "Hello");
        fs.readFile(filePath, function cb(err, data) {
            if (err) {
                reject(err);
            } else {
                // console.log("12");
                resolve(data);
            }
        })
        // console.log("15", "Hello after");
    }
}
// let frp = fs.promises.readFile("f1.txt");
// console.log("20")
// let frp = MyFilereadPromise("f1.txt");
// console.log("22", frp);
// // setTimeout(function () {
// //     console.log("22",frp)
// // }, 1000);
// console.log("26");

//  frp.then(scb);
// function scb(data) {
//     console.log("28 inside then" + data);
// }
// console.log("30");
// frp.catch(fcb)
// function fcb(err) {
//     console.log("32 inside catch", err);
// }
// console.log("34 After")
console.log("Before");
let frp = MyFilereadPromise("f1.txt");
console.log("frp", frp);
let thenKaPromise = frp.then(scb);
function scb(data) {
    console.log("frp ka data", data);
    return true;
}
console.log("then ka promise", thenKaPromise);
setTimeout(function () {
    console.log("frp", frp);
    console.log("then ka promise", thenKaPromise);
}, 1000);

console.log("After");