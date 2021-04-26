let fs = require("fs");
let path = require("path");
console.log(process.argv[2]);
console.log(process.argv[3]);
fs.copyFileSync(process.argv[2], path.join(process.argv[3], "f1.js"));
console.log("file copied")

