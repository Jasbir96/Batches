let fs = require("fs");
let path=require("path");
let input = process.argv.slice(2);
let srcFilePath = input[0];
let destFolderPath = input[1];
console.log("I ran");
// src -> file -> content
// dest -> new file create -> content copy
// fs.createReadStream(srcFilePath).pipe(fs.createWriteStream(destFolderPath));
let orgFileName=path.basename(srcFilePath);
fs.copyFileSync(srcFilePath, path.join(destFolderPath,orgFileName));
console.log("I ran");