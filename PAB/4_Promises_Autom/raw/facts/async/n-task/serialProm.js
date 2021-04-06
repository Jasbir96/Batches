let fs = require("fs");
let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt"];
// parallely read
console.log("before");
let frP = fs.promises.readFile(files[0]);
for (let i = 1; i < files.length; i++) {
    frP = frP.then(function (data) {
        console.log("data" + data);
        return fs.promises.readFile(files[i]);
    })
}
 return frp;

