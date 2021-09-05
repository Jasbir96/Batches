// state 
// final 

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
let fileReadPromise = myPromisiedFsReader("f1.txt");
// state -> pending 
console.log("Before");
console.log("7", fileReadPromise);

// 1sec -> async (1sec)
setTimeout(function () {
    console.log("11", fileReadPromise);
}, 1000);
console.log("after");