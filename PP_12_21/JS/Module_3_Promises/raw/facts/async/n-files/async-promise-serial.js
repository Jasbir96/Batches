let fs = require("fs");
// paralley 
let files = ["f1.txt", "f2.txt", "f3.txt", "f4.txt", "f5.txt"];
console.log("before");
// function serialReader(i) {
//     if (i == files.length) {
//         return;
//     }
//     fs.readFile(files[i], function cb(err, data) {
//         console.log("data" + data);
//         serialReader(i + 1);
//     });
// }
// serialReader(0);
let intitalPromise = fs.promises.readFile(files[0]);
for (let i = 1; i < files.length; i++) {
    intitalPromise = intitalPromise.then(function cb(data) {
        console.log("data" + data);
        return fs.promises.readFile(files[i]);
    })
}
intitalPromise.then(function cb(data) {
    console.log("data" + data);

})
console.log("after");