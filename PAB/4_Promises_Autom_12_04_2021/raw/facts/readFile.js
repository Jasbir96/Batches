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

//  frp
// .then(function (content) {
//         console.log("content->" + content);
//     })
// frp.catch(function (err) {
//         console.log("err", err);
//     })
// there is just difference in syntax 
async function fn() {
    console.log("Before in fn ");
    let content = await frp;
    // console.log("content->" + content);
    return content;

}

let ans = fn();
console.log(ans);
console.log("After");
//  await 
ans.then(function (data) {
    console.log("data" + data);
})
