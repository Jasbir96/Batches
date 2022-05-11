// "C:\\Users\\mrjas\\OneDrive"; -> absolute path

// ../../Module0/lecture3.2/boXSizing -> relative path

// "toberemoveFolder" ->(file name) when you are in the same folder  
// path module 
let path = require("path");
// console.log("dirname",__dirname); // current folder in which we have our js file absolute path
// console.log("`````````````````````````````````````````");
// console.log("filename",__filename);  // current file ka path
// console.log("`````````````````````````````````````````");
// // abhi ye script app me convert hone ke baad ki path pe chal rahi hai 
// file kis folder me execute kar  rahi hai 
console.log(process.cwd());

// let folderName = "C:";
let nextFolderName = "Movies";
let childFolder = "bollywood";
let actualFile = "Rang De Basanti.mp4";
// path join 
let address = path.join(folderName, nextFolderName, childFolder, actualFile);
console.log("`````````````````````````````````````````");
console.log(address);
// .js
path.extname();
path.basename();



