// file system 

// folders and files deal 
let fs = require("fs");
console.log("before");
// file -> read,write,create,delete,append,copy
// read
// let content = fs.readFileSync("readme.txt", "utf8");
// // console.log(content)
// // // creation
// fs.writeFileSync("newFile.txt", "");
// // // write -> create a file write the content into it / 
// // // if file already exist -> replace content
// // fs.writeFileSync("newFile.txt", "I have done something");
// fs.writeFileSync("newFile.txt", "I have done something more");
// // // append
// fs.appendFileSync("newFile.txt", " I have added some content later");
// // // delete
// fs.unlinkSync("readme.txt");
// // *************************directory***************************************
// // console.log("After");
// // create 
// fs.mkdirSync("newFolder");
// // delete
// fs.rmdirSync("toberemoveFolder");

// let listofThingsInCurrentFolder = fs.readdirSync(__dirname);
// // __dirname: path of the folder in which js file exist 
// console.log(listofThingsInCurrentFolder);
// files and folder -> get
// let content = fs.readdirSync
//     ("../L2_Objects_arrays");
// console.log(content);
let randomPath = "C:\\Users\\mrjas\\OneDrive\\Desktop\\Batches\\Web-march-22\\Module_1\\L3_App_with_JS\\newFolder"
let isFile = fs.lstatSync(randomPath).isFile();
let isDirectory = fs.lstatSync(randomPath).isDirectory();
console.log("path belongs to file: ",isFile," folder : ",isDirectory);
let srcFilePath = "C:\\Users\\mrjas\\OneDrive\\Desktop\\Batches\\Web-march-22\\Module_1\\L3_App_with_JS\\path.js";
let destFilePath = "C:\\Users\\mrjas\\OneDrive\\Desktop\\Batches\\Web-march-22\\Module_1\\L4_File_organizer\\path1.js";

fs.copyFileSync(srcFilePath, destFilePath);
// console.log("file  content from src copied to dest");








