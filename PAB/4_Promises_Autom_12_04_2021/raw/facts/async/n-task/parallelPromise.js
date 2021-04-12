let fs = require("fs");
let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt"];
// parallely read
for (let i = 0; i < files.length; i++) {
   let frP = fs.promises.readFile(files[i]);
    frP.then(cb);
}

function cb(content) {
    console.log("content->" + content);
   
}