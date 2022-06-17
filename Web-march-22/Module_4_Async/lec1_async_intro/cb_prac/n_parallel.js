const fs = require("fs");
let filePath = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt"];

for (let i = 0; i < filePath.length; i++) {
    fs.readFile(filePath[i], cb);
}

function cb(err, data) {
    if (err) {
        console.log(error);
    } else {
        console.log(data+"");
    }
}
