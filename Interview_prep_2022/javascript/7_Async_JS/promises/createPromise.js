const fs = require("fs");
// let p1 = fs.promises.readFile("f1.txt");
//  convert cb -> promise based function


function pFiedReadFile(pathOfFile) {

    return new Promise(function fn(resolve, reject) {
        fs.readFile(pathOfFile, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    });



}

// promisified fn
const p1 = pFiedReadFile("f1.txt");


p1.then(function (data) {
    console.log("then")
    console.log("data" + data);
});
p1.catch(function (err) {
    console.log("err", err);
});