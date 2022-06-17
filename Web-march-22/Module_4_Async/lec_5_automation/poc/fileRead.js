const fs = require("fs");
// console.log("Before");
// fs.readFile("f1.txt", cb);
// function cb(err, data) {
//     if (err) {
//         console.log("err", err);
//     } else {
//         console.log("content" , data);
//     }
// }
// console.log("After");
// **********************settimout example**********************************
// async await
// function myfn() {
//     console.log("I am myfn");
// }
// console.log("before");
// setTimeout(myfn, 2000);
// console.log("after");

// **************************promise example*********************************
console.log("Before");
let promise = fs.promises.readFile("f1.txt");
console.log("Promise before", promise);
console.log("After");

function myFn() {

    console.log("line numbe 29", promise);
}
setTimeout(myFn, 2000);



