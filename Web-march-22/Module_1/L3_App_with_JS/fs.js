// file system 

// folders and files deal 
let fs = require("fs");
console.log("before");
// file -> read,write,create,delete,append,copy
// create -> crud
// read
// update 
// delete
// let content = fs.readFileSync("readme.txt", "utf8");
// console.log(content)
// // creation
// fs.writeFileSync("newFile.txt", "");
// // write -> create a file write the content into it / 
// // if file already exist -> replace content
// // fs.writeFileSync("newFile.txt", "I have done something");
// fs.writeFileSync("newFile.txt", "I have done something more");
// // append
// fs.appendFileSync("newFile.txt", " I have added some content later")
// // delete
// fs.unlinkSync("readme.txt");
// *************************directory***************************************
// console.log("After");
// create 
// fs.existSync -> files/directories
// fs.mkdirSync("newFolder");
// delete
// fs.rmdirSync("toberemoveFolder");
let listofThingsInCurrentFolder = fs.readdirSync(__dirname);
console.log(listofThingsInCurrentFolder);
// files and folder -> get
let content = fs.readdirSync
    ("../L2_Objects_arrays");
console.log(content);
