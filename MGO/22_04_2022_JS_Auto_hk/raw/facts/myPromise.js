let fs = require("fs");
console.log("Before");
//  function cb
//  i want to convert a callback
//  based async function into a promise based function
function myFsPromiseRF(filePath) {
    return new Promise(function fn(resolve, reject) {
        console.log("Hello");
        fs.readFile(filePath, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });


}

let promise = myFsPromiseRF("f1.txt");
promise.then(function (data) {
    console.log("data " + data);
})
promise.catch(function (err) {
    console.log(err);
})

// let data = fs.readFileSync("f1.txt");
// console.log("data" + data);
console.log("After");
