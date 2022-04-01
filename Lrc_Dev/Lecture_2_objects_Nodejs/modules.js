// important -> core modules -> fs,os ,path,http,childprocess
// file system 
let fs = require("fs");
// ************************File*************************
// functions-> define implement -> call use 
// no never -> refer -> documentation 
let content = fs.readFileSync("profilelookup.js");
// // buffer -> hexadecimal form
// console.log(content);
// // string me convert ho jaata hai 
// // console.log(content + "");
// // file write
// // /content write 
fs.writeFileSync("myfile.txt", "Hello from node");
// // append
fs.appendFileSync("myfile.txt", "content appended");
// //delete
fs.unlinkSync("toDelete.txt");
// copy and cut -> file
// copycontent 
fs.copyFileSync("C:/Users/mrjas/OneDrive/Desktop/Batches/Lrc_Dev/Lecture_1_GettingStarted/arrayAsAnobj.js",
    "C:/Users/mrjas/OneDrive/Desktop/Batches/Lrc_Dev/Lecture_2_objects_Nodejs/arrayAsAnobj-copy.js");
// cut -> x
// copy original content new path
// original file remove
// ***************************Folder
// how to create a folder in nodejs -> folder /file hai ya nahi hai
// let doesPathExist = fs.existsSync("myfolder");
// if (doesPathExist == false) {
    // fs.mkdirSync("myfolder");
// } else {
//     console.log("Folder already exists");
// }
// // how to delete content a folder in nodejs
// fs.rmdirSync("myFolder");
// console.log("Folder deleted");
// how to read content of  a folder in nodejs
// folder -> content
// how to check whether the path belong to a folder or a file 
let isFile = fs.lstatSync("myfolder").isFile();
console.log(isFile);
let isDirectory = fs.lstatSync("myfolder").isDirectory();
console.log(isDirectory);