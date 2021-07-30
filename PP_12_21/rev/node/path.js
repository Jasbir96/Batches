// // path -> paths -> platform independent
let path = require("path");
let fs = require("fs");
// // current directory in which the command is executing
// let currentpath = process.cwd();
// console.log("currentPath", currentpath);
// let joinedPath = path.join(currentpath, "abc", "def", "efg", "f1.txt");

// console.log("joinedPath", joinedPath);
// // last portion
// let lastportion = path.basename(joinedPath);
// console.log("last portion", lastportion);
// // path -> extension 
// let ext = path.extname(joinedPath);
// console.log(ext);
let srcPath = "C:\\Users\\Ritik Singh\\Desktop\\Batches\\PP_12_21\\rev\\JS\\typeof.js";
// task ->  copy typeof file from js directory to node directory;
let destFolderPath = "C:\\Users\\Ritik Singh\\Desktop\\Batches\\PP_12_21\\rev\\JS\\node";
let fileName = path.basename(srcPath);
let destPath = path.join(destFolderPath, fileName);
// let destFolderPath = "C:\\Users\\Ritik Singh\\Desktop\\Batches\\PP_12_21\\rev\\JS\\node\\typeof.js";
fs.copyFileSync(srcPath,destPath)