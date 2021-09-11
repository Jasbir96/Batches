let fs = require("fs");
console.log("Before");
// brute force 
let ffReadPromise = fs.promises.readFile("f1.txt");
ffReadPromise
    .then(cb1);

function cb1(content) {
    console.log("content" + content);
    let SfReadPromise = fs.promises.readFile("f2.txt");
    SfReadPromise.then(cb2);
}
function cb2(content) {
    console.log("content" + content);
    let thfReadPromise = fs.promises.readFile("f3.txt");
    thfReadPromise.then(cb3);
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

let ffReadPromise = fs.promises.readFile("f1.txt");
// initially there is a promise chain that is formed  those intrenally linked and later on there cbs are executed
ffReadPromise.then(cb1).then(cb2).then(cb3).catch(fcb);
function cb1(content) {
    console.log("content" + content);
    let SfReadPromise = fs.promises.readFile("f2.txt");
    return SfReadPromise;

}
function cb2(content) {
    console.log("content" + content);
    let thfReadPromise = fs.promises.readFile("f3.txt");
    return thfReadPromise
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
