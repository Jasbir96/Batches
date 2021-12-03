// fs module required
let childProcess =
    require("child_process");
// functionality
// function that read a file in nodejs 
// childProcess.execSync("calc");
// childProcess.execSync("code");
// childProcess.execSync("start chrome");
// let output = fs.readFileSync("sample.txt", "utf8");
// fs.writeFileSync("output.txt", output);
// // file create -> writeFilesync 
// // file delete-> unlinkSync();
// fs.unlinkSync("sample.txt");
// // file read-> readFileSync
// // file append -> appendFile
// fs.appendFileSync("sample.txt", "added at the end");
// directory
// fs.mkdirSync("sample_dir");
let fs = require("fs");
let path = require("path");
let parentDirectory = process.argv[2];
// let name = "sample_dir";
// let toBeCreatedFOlderpath = path.join(parentDirectory, name);
// let filePath = path.join(toBeCreatedFOlderpath, "abc.txt");
// // fs.mkdirSync(toBeCreatedFOlderpath);
// // fs.writeFileSync(filePath, "File created in sample dir ")
// // console.log("FOlder created on desktop ");
// fs.unlinkSync(filePath);
// fs.rmdirSync(toBeCreatedFOlderpath);
// console.log("Folder removed");
// names of the files an the folder inside a particular directory
// fs.existSync
let names = fs.readdirSync(__dirname);
for (let i = 0; i < names.length; i++) {
    let assetFullPath = path.join(__dirname, names[i]);
    // to check whether is is file or not 
    let ans = fs.lstatSync(assetFullPath).isFile();
    if (ans == true) {
        console.log(names[i] + " is file ")
    } else {
        console.log(names[i] + " is folder")
    }
}
// console.log(names);
// fs.lstatSync().isDirectory()

