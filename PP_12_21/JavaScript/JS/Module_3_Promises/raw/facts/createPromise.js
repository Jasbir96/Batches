// /implement -> polyfill 
// fs.promises.readFile -> polyfill
let fs = require("fs");
function myPromisiedFsReader(filePath) {
    // using this existing function
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, function cb(err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data)
            }
        })

    })

}

// consumer 
console.log("Before");
let freadPromise = myPromisiedFsReader("f1.txt");
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