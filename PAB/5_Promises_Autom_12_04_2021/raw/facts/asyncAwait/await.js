// function fn(){
// console.log("Hello");
let fs = require("fs");
// }
// 1. await is only valid inside  async function
// 2. await will wait for a promise to resolve and give it's resolved value 
// 3. await suspends the execution of currently executing  async funtion but
//  async function returns a promise that will be resolved when the whole async 
//  fn is executed
console.log("Before");
async function fn() {
    console.log(" 10 Hello");
    let frp = fs.promises.readFile("f1.txt");
    let data = await frp;
    console.log("12" + data);
    return 10;
    
}
let fnKap = fn();
console.log(fnKap);

fnKap.then(function (data) {
    console.log("19 data " + data);
})
console.log("After");
