const fs = require("fs");
let filePath = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt"];
console.log("Before");
// for (let i = 0;  i < filePath.length;) {
//     fs.readFile(filePath[i], cb);
//     function cb(err, data) {
//         if (err) {
//             console.log(error);
//         } else {
//             console.log(data + "");
//         }
//         i++;
//         fs.readFile(filePath[i], cb);
//     }
// console.log("for loop is running",i);
// }
function serialfileReader(filePath, n) {
    if (filePath.length == n) {
        return;
    }
    fs.readFile(filePath[n], cb);
    function cb(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data + "");
        }
        serialfileReader(filePath, n + 1);
    }
}

serialfileReader(filePath, 0);



