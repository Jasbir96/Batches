// "C:\\Users\\mrjas\\OneDrive"; -> absolute path

// ../../Module0/lecture3.2/boXSizing -> relative path

// "toberemoveFolder" ->(file name) when you are in the same folder  
// path module 
let path = require("path");
// console.log("dirname",__dirname); // current folder in which we have our js file absolute path
// console.log("cwd",process.cwd());
// console.log("`````````````````````````````````````````");
// console.log("filename",__filename); // current file ka path
// console.log("`````````````````````````````````````````");
let folderName = "C:";
let nextFolderName = "Movies";
let childFolder = "bollywood";
let actualFile = "Rang De Basanti.mp4";
// // path join 
let address = path.join(folderName, nextFolderName, childFolder, actualFile);
let smallerPath = path.join(folderName, nextFolderName, childFolder);
console.log("address",address); 
console.log("smallerPath",smallerPath);
console.log("`````````````````````````````````````````");
// // .js
// let extname = path.extname(address);
// console.log("extname", extname);
let basename = path.basename(address);
console.log("basename", basename);
basename = path.basename(smallerPath)
console.log("basename", basename);



