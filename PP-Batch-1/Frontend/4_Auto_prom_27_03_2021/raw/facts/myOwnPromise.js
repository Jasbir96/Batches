// cb -> promise
// cb -> promise
//  node js -> fs.promises.readline
// resolve -> work complete
// reject -> work fail
let fs = require("fs");
function promisifiedReadFile(filePath) {
    //  pending state promise
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, function cb(err, data) {
            if (err) {
                // reject -> work fail
                reject(err);
            } else {
                // resolve -> work complete
                resolve(data)
                // console.log("data->" + );
            }
        });
    });
}
// achieve-> user
let fReadPromise = promisifiedReadFile("f1.txt");
console.log(fReadPromise)
fReadPromise
    .then(function (data) {
        console.log("content->" + data);
    })

fReadPromise
    .catch(function (err) {
        console.log(err)
    })