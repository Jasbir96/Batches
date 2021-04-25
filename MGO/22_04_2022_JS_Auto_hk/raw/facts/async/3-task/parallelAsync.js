let fs = require("fs");
// async function 
// console.log("F1 read sent");
// let f1P = fs.promises.readFile("../f1.txt");
// console.log("F2 read sent");
// let f2P = fs.promises.readFile("../f2.txt");
// console.log("F3 read sent");
// let f3P = fs.promises.readFile("../f3.txt");
// f1P.then(cb);
// f2P.then(cb);
// f3P.then(cb);
// function cb(data) {
    //     console.log("data" + data);
    // }
    
console.log("Before");
async function fn() {
    console.log("F1 read sent");
    let f1P = fs.promises.readFile("../f1.txt");
    console.log("F2 read sent");
    let f2P = fs.promises.readFile("../f2.txt");
    console.log("F3 read sent");
    let f3P = fs.promises.readFile("../f3.txt");
    console.log(f1P, f2P, f3P);
    let ans = await Promise.all([f1P, f2P, f3P]);
    console.log("25",ans);
    return "hello";
}
let fnKap = fn();
console.log(fnKap);
fnKap.then(function (ans) {
    console.log("fnkap res value",ans);
})
console.log("After");