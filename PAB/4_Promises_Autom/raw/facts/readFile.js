let fs = require("fs");
// fs.readFile("f1.txt", function cb(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("data->" + data);
//     }
// })
console.log("before");
 // file read promise
let frp = fs.promises.readFile("f1.txt");
// // then function -> fullfill 
// then -> to consume promise
// callback control control
frp
.then(function (content) {
        console.log("content->" + content);
    })
frp.catch(function (err) {
        console.log("err", err);
    })

console.log("After");