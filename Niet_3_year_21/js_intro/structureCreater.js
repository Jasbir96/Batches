let fs = require("fs");
let path = require("path");
// let firstFileName = "mmt.txt";
// let scndFileName = "notes.txt";

// for (let i = 1; i <= 30; i++) {
//     //    mkdirSync
//     // create folder
//     let cFolderName = "Lecture-" + i;
//     let folderPath = path.join(__dirname, cFolderName)
//     if (fs.existsSync(folderPath) == false) {
//         fs.mkdirSync(folderPath);
//         let firstFilePath = path.join(folderPath, firstFileName);
//         let secondFilePath = path.join(folderPath, scndFileName);
//         // create files
//         fs.writeFileSync(firstFilePath, "Minutes of the meeting");
//         fs.writeFileSync(secondFilePath, "Notes");
//     } else {
//         console.log("FOlder already exist");
//     }
// }
// let orginalFilePath = path.join(__dirname, "Lecture-1", "mmt.txt")
// let copyFilePath = path.join(__dirname, "mmt", "mmt.txt")
// fs.copyFileSync(orginalFilePath, copyFilePath);
let names = fs.readdirSync(__dirname);
for (let i = 0; i < names.length; i++) {
    let assetFullPath = path.join(__dirname, names[i]);
    // to check whether is is file or not 
    let ans = fs.lstatSync(assetFullPath).isFile();
    if (ans == true) {
        console.log(names[i] + " is file ")
    } else {
        if (names[i].startsWith("Lecture")) {
            // go to your mmt file 
            // and then copy the content to mmt folder
            let orginalmmtPath = path.join(assetFullPath, "mmt.txt");
            let newName = names[i] + "_mmt.txt";
            let finalPath = path.join(__dirname, "mmt", newName);
            fs.copyFileSync(orginalmmtPath, finalPath);
        }

    }
}