let fs = require("fs");
// write
// let arr = [];
// arr.push({
//     name: "Jasbir",
//     age: 24
// })
// // let contentinfile = JSON.stringify(arr);
// // fs.writeFileSync("abc.json",contentinfile);
// update 
let content = fs.readFileSync("abc.json");
let arr = JSON.parse(content);
arr.push({
    name: "sid",
    age: 24
})
let contentinfile = JSON.stringify(arr);
fs.writeFileSync("abc.json", contentinfile);

