let fs = require("fs");
let p = require("path");
function view(dirpath, mode) {
    if (mode == "tree") {
        // console.log("Tree is working")
        viewTree(dirpath, "");
    } else if (mode == "flat") {
        viewFlat(dirpath);
        // console.log("Flat is working")
    } else {
        console.log("Wrong mode");
    }
}
function isFilorNot(dirpath) {
    // check extension
    return fs.lstatSync(dirpath).isFile();
}
function getContent(dirpath) {
    // content
    return fs.readdirSync(dirpath);
}
function viewFlat(dirpath) {
    let isFile = isFilorNot(dirpath);
    if (isFile == true) {
        console.log(dirpath + "*");
    } else {
        console.log(dirpath);
        // recursion
        let content = getContent(dirpath);
        // console.log(content);
        for (let i = 0; i < content.length; i++) {
            let childPath = p.join(dirpath, content[i]);
            viewFlat(childPath)
        }
    }
}
function viewTree(dirpath, indent) {
    let isFile = isFilorNot(dirpath);
    if (isFile == true) {
        // let stArr = dirpath.split("\\");
        // let toPrint = stArr.pop();
        console.log(indent, p.basename(dirpath) + "*");
    } else {
        // let stArr = dirpath.split("\\");
        // let toPrint = stArr.pop();
        console.log(indent, p.basename(dirpath));
        // recursion
        let content = getContent(dirpath);
        // console.log(content);
        for (let i = 0; i < content.length; i++) {
            // /good practice
            let childPath = p.join(dirpath, content[i])
            //  dirpath + "\\" + content[i];
            viewTree(childPath, indent + "\t");
        }
    }
}
module.exports = {
    viewFun: view
}