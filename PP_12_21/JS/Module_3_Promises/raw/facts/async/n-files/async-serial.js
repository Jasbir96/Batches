let fs = require("fs");
// paralley 
let files = ["f1.txt", "f2.txt", "f3.txt", "f4.txt", "f5.txt"];
// paralley read using ans asyn function
// start the work 
// also give a cb function from which we can intimate you aftyer the work is completed 
// output 
// // first file read -> cb call 
// for (let i = 0; i < files.length;) {
//     console.log("i", i);
//     fs.readFile(files[i], function cb(err, data) {
//         console.log("data" + data);
//     i++;
//     });
// }
console.log("before");
function serialReader(i) {
    if (i == files.length) {
        return;
    }
    fs.readFile(files[i], function cb(err, data) {
        console.log("data" + data);
        serialReader(i + 1);
    });
}
serialReader(0);
console.log("after");