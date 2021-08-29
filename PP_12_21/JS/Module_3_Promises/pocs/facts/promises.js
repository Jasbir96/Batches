let fs = require('fs');
// call back way of doing async tasks
// fs.readFile("f1.txt", function cb(err, data) {
//     console.log("data " + data);
// })
console.log("Before");
let freadPromise = fs.promises.readFile("f1.txt");
console.log("promise", freadPromise);
// promise -> resolve -> data 
// function pass -> resolve 
freadPromise.then(function cb(data) {
    console.log("data " + data);
})
// function pass -> reject 
freadPromise.catch(function cb(err) {
    console.log("error " + err);
})

console.log("After");