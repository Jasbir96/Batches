// implementation -> files / folder interact 
// /directory
// files -> read /write /update/delete   
let fs = require("fs");
let path = require("path");
// let content = fs.readFileSync("f1.txt");
// // buffer -> video, audio , text 
// // console.log("content : ", content);
// // +-> concatinate -> string => text 
// console.log("content : " + content);
// //  write -> writeFileSync 
// //  file doesn't exist -> file create , content put 
// //  file doesn exist ->  content override 
// fs.writeFileSync("abc.txt", "Hum aaj khush nhi hai");
// // update
// fs.appendFileSync("abc.txt", "Bhai khush kyu nhi hai");
// // delete a file by passing it's path 
// fs.unlinkSync("abc.txt");
// console.log("File removed");
// ************************directory****************
// create
// fs.mkdirSync("myDirectory");
// delete
// fs.rmdirSync("myDirectory");
// path -> check does it exist or not 
// let doesExist = fs.existsSync("fs1.js");
// console.log("This path exist ?", doesExist);
//  path -> belongs to a directory  or file
// let statsOfAPath = fs.lstatSync("dir1");
// console.log("stats", statsOfAPath);
// console.log("isFile? ", statsOfAPath.isFile());
// console.log("isDirectory? ", statsOfAPath.isDirectory());
// // directory  -> content
// let address = "C:\\Users\\Ritik Singh\\Desktop\\Batches\\PP_12_21\\JS\\Module_1_FS";
// let content = fs.readdirSync(address);
// console.log("directroy content",content);
// copy 
// firstParam -> srcFilePath, destFilePath
let srcFilePath = "C:\\Users\\Ritik Singh\\Desktop\\Batches\\PP_12_21\\JS\\Module_0_JS_Intro\\Lecture_2\\arrayAdvanced.js"
let destDir = "C:\\Users\\Ritik Singh\\Desktop\\Batches\\PP_12_21\\JS\\Module_1_FS\\fs_organizer\\examples";
// return last portion of the path 
let tobeCopiedFileName = path.basename(srcFilePath);
console.log(tobeCopiedFileName);
let destPath = path.join(destDir, tobeCopiedFileName)
fs.copyFileSync(srcFilePath, destPath);
console.log("File copied");