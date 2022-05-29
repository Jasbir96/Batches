const fs = require("fs");
// asyn enviornment 
// let a=10;
// console.log("Before");
// // file read 
// let ans = fs.readFileSync("f1.txt", "utf8");
// console.log("output", ans);
// console.log("After");
// for(let i=1; i<=10; i++){
//     console.log("Number is ", i);
// }












// async function -> nodejs -> confirmation -> cb -> first parameter resserved for error
console.log("Before");
// data confirmation function
// 27
fs.readFile("f1.txt", frConf);
// console.log("Mujhe wait nhi karna");
// parameters of the function that is passed to our async function is already pre-determined
function frConf(err, data) {
    if (err) {
        console.log("err", err);
    } else {
        console.log("data " + data); //string -> utf8
    }
}
// 37
console.log("AFter");
for (let i = 1; i <= 10; i++) {
    console.log("Number is ", i);
}

