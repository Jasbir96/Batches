let fs = require("fs");
// function fn(){
// console.log("Hello");
// }
// 1. async function always returns a promise -> 
// 2. if you return a value them it will return a promise with that 
// value as it's resolved value
// 3. if you return a pending promise then it will return that promise

async function fn() {
    console.log("Hello");
    let frp = fs.promises.readFile("f1.txt");
    return frp;
}
let fnKap = fn()
console.log(fnKap);
fnKap.then(function (data) {
console.log("data "+data);
})
