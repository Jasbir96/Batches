let fs = require("fs");
console.log("Before");
// let frP = fs.promises.readFile("../f1.txt");
// // callback to promise bruteforce
// frP.then(cb1);
// frP.catch(fcb);
// function cb1(content) {
//     console.log("content->" + content);
//     console.log("F2 read sent");
//     // start next task
//     let f2rp = fs.promises.readFile("../f2.txt");
//     f2rp.then(cb2);
// }
// function cb2(content) {
//     console.log("content->" + content);
//     console.log("F3 read sent");
//     // start next task
//     let f2rp = fs.promises.readFile("../f3.txt");
//     f2rp.then(cb3);
// }
// function cb3(content) {
//     console.log("content->" + content);
//     // start next task
//     console.log("All Task completed")
// }
// function fcb(err) {
//     // console.log(err)
//     console.log("i will only work for first promise");
// }



//  you only have syntax imp -> we only now need one catch for all the promises
let frP = fs.promises.readFile("../f1.txt");
// why only one is enough ??
let fThenPromise = frP.then(cb1)
let sThenPromise = fThenPromise.then(cb2)
    sThenPromise.then(cb3);
    
function cb1(content) {
    console.log("content->" + content);
    console.log("F2 read sent");
    // start next task
    let f2rp = fs.promises.readFile("../f2.txt");
    return f2rp;
}
function cb2(content) {
    console.log("content->" + content);
    console.log("F3 read sent");
    // start next task
    let f2rp = fs.promises.readFile("../f3.txt");
    return f2rp;
}
function cb3(content) {
    console.log("content->" + content);
    // start next task
    console.log("All Task completed");
}
function fcb(err) {
    // console.log(err)
    console.log(err);
}
console.log("After");
