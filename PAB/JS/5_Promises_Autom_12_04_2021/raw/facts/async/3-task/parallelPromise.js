let fs = require("fs");
console.log("Before");
// async function 
// let content = fs.readFileSync("f1.txt");
console.log("F1 read sent");
let f1P = fs.promises.readFile("../f1.txt");
console.log("F2 read sent");
let f2P = fs.promises.readFile("../f2.txt");
console.log("F3 read sent");
let f3P = fs.promises.readFile("../f3.txt");
f1P.then(cb);
f2P.then(cb);
f3P.then(cb);
function cb(data){
    console.log("data"+data);
}
console.log("After");