let fs = require("fs");
//  folder -> content read , create ,remove
// implementation -> files / folder interact 
// /directory
// files -> read /write /update/delete   
// *********file create /delete /update /move********** 
// let content = fs.readFileSync("f1.txt");
// // buffer -> video, audio , text 
// console.log("content : ", content);
// console.log("content : "+ content);
//  write -> writeFileSync 
//  file doesn't exist -> file create , 
// content put 
//  file doesn exist ->  content override 
let filePath="abc.txt";
fs.writeFileSync(filePath,
 "Hum aaj khush kyu nhi hai");
//  append
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
let doesExist = fs.existsSync("fs1.js");

// console.log("This path exist ?", doesExist);
//  path -> belongs to a directory  or file
// let address = "C:\\Users\\Ritik Singh\\Desktop\\Batches\\PP_12_21\\JS\\Module_1_FS";
let statsOfAPath = fs.lstatSync(address);
// // console.log("stats", statsOfAPath);
// // if the path is of file or not 
// console.log("isFile? ", statsOfAPath.isFile());
// // if the path is of a directory or not 
// console.log("isDirectory? ", statsOfAPath.isDirectory());
// // directory  -> list of files or folder on that path
// let content = fs.readdirSync(address);
// console.log("directory content",content);
// copy 
// firstParam -> srcFilePath, destFilePath
// let srcFilePath = "C:\\Users\\Ritik Singh\\Desktop\\Batches\\PP_12_21\\JS\\Module_0_JS_Intro\\Lecture_2\\arrayAdvanced.js"
// let destDir = "C:\\Users\\Ritik Singh\\Desktop\\Batches\\PP_12_21\\JS\\Module_1_FS\\fs_organizer\\examples";
// // return last portion of the path 
// let tobeCopiedFileName = path.basename(srcFilePath);
// console.log(tobeCopiedFileName);
// let destPath = path.join(destDir, tobeCopiedFileName)
// fs.copyFileSync(srcFilePath, destPath);
// console.log("File copied");