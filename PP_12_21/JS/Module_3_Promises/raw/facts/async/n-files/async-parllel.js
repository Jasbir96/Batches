let fs = require("fs");
// paralley 
let files = ["f1.txt", "f2.txt", "f3.txt", "f4.txt", "f5.txt"];
// paralley read using ans asyn function
// start the work 
// also give a cb function from which we can intimate you aftyer the work is completed 
console.log("before")
let count = 0;
for (let i = 0; i < files.length; i++) {
    // call
    fs.readFile(files[i], cb);
}
function cb(err, data) {
    count++;
    console.log(data.byteLength);
    console.log("content: " + data);
    
}

console.log("after");