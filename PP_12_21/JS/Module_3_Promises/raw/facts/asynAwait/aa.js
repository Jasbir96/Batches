let fs = require("fs");
function myPromisiedFsReader(filePath) {
    // using this existing function
    return new Promise(function cb(resolve, reject) {
        // console.log("8")
        fs.readFile(filePath, function cb(err, data) {
            // console.log("10")
            if (err) {
                reject(err);
            }
            else {
                // console.log("15")
                resolve(data)
            }
        })
        // console.log("9");
    })

}
// promise consume older method
// let promise = myPromisiedFsReader("f1.txt");
// promise
// .then(function (data) {
//     console.log("data " + data)
// }).catch(function (err) {
//     console.log("err " + err);
// })
(async function fn() {
    try {
        let promise = myPromisiedFsReader("f1.txt");
        let data = await promise;
        console.log("data " + data);
    } catch (err) {
        console.log("err" + err);
    }
})();
