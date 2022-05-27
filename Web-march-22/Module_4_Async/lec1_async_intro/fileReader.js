const fs = require("fs");
// asyn enviornment 
// let a=10;
console.log("Before");
// let ans = fs.readFileSync("f1.txt", "utf8");
// console.log("output", ans);
// async function -> nodejs -> confirmation -> cb -> first parameter resserved for error
fs.readFile("f1.txt", frConf);
console.log("Mujhe wait nhi karna");
console.log("After");

function frConf(err, data) {
    if (err) {
        console.log("err", err);
    } else {
        console.log("data "+ data); //string -> utf8
    }
}


