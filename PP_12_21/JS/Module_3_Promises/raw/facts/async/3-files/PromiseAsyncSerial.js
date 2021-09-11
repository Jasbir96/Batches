let fs = require("fs");
console.log("Before");
let ffReadPromise = fs.promises.readFile("f1.txt");
ffReadPromise
    .then(cb1);
ffReadPromise.catch(fcb);
function cb1(content) {
    console.log("content" + content);
    let SfReadPromise = fs.promises.readFile("f2.txt");
    SfReadPromise.then(cb2);
    SfReadPromise.catch(fcb);
}
function cb2(content) {
    console.log("content" + content);
    let thfReadPromise = fs.promises.readFile("f3.txt");
    thfReadPromise.then(cb3);
    thfReadPromise.catch(fcb);
}
function cb3(content) {
    console.log("content" + content);
}
console.log("After");
//  instead giving a cb function to an async function you attach
// the callback to the promise retruned by that function
function fcb(err) {
    console.log("err", err);
}