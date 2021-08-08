let fs = require("fs");
console.log("before");
// you don't know when it will be completely read 
// file read , network request  -> sync way 
// let content = fs.readFileSync("cyberpunk.txt");
// console.log("content " + content);
// console.log("after");
// nodejs -> async function
// function callback function 
// async function -> created by the enviornment 
// 1 It will be given by nodejs , library
fs.readFile("cyberpunk.txt", abc);
// cb will be called by fs module of node js 
function abc(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log("content " + data);
    }
}
console.log("after");
// for (let i = 0; i < 10; i++) {
// console.log("Number is ",i);
// }