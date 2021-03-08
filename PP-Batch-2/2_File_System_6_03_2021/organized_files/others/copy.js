let fs = require("fs");
let path = require("path");
let input = process.argv.slice(2);
// nodejs -> src file path 
// dest path -> file path
fs.copyFileSync(input[0], path.join(input[1],"sample.js"));
console.log("file copied");