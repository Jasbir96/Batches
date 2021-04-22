let fs = require("fs");
// 1. await is only valid inside  async function
// 2. await will wait for a promise to resolve and give it's 
// resolved value 
// 3. await suspends the execution of currently executing  
//async funtion but  async function returns a promise 
// that will be resolved  when the whole async  fn is executed
console.log("Before");
async function fn() {
    try {
        console.log("Hello");
        let frP = fs.promises
        .readFile("f1.txt");
    console.log("file read has been started");
    console.log(frP);
    let data = await frP;
    console.log("data " + data);
    return 10;
    } catch (err) {
        console.log(err);
    }
}
// let rValP = fn();
// console.log("rval from fn", rValP);
let rVal = fn();
console.log("rVal", rVal)
console.log("After");
rVal.then(function (data) {
    console.log("then ka" + data)
})
