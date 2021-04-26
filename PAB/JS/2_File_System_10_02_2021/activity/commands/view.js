let fs = require("fs");
let path = require("path");
function viewHelper(dirName, mode) {
    if (mode == "tree") {
        viewTree(dirName, "");
    } else if (mode == "flat") {
        viewFlat(dirName);
    } else {
        console.log("wrong mode  type help for commands");
    }
}

module.exports = {
    fn: viewHelper
}

function viewFlat(src) {
    // how to find if given path is file or directory 
    let isFile = isFileOrNot(src);
    if (isFile == true) {
        console.log(src + "*");
    }
    else {
        // print
        console.log(src);
        // content read from os
        let fDirnames = readContent(src);
        // recursion 
        // console.log(fDirnames);
        for (let i = 0; i < fDirnames.length; i++) {
            let child = fDirnames[i];
            //    good practice??
            // let dirNamepath = src + "\\" + child;
            let dirNamepath = path.join(src, child);
            viewFlat(dirNamepath)
        }
    }
}
function viewTree(src, indent) {
    let isFile = isFileOrNot(src);
    if (isFile == true) {
        console.log(indent, path.basename(src), "*");
    }
    else {
        // print
        console.log(indent, path.basename(src));
        // content read from os
        let fDirnames = readContent(src);
        // recursion 
        // console.log(fDirnames);
        for (let i = 0; i < fDirnames.length; i++) {
            let child = fDirnames[i];
            //    good practice??
            // let dirNamepath = src + "\\" + child;
            let dirNamepath = path.join(src, child);
            viewTree(dirNamepath, indent + "\t");
        }
    }
}


function isFileOrNot(src) {
    return fs.lstatSync(src).isFile();
}
function readContent(src) {
    return fs.readdirSync(src);
}

// folder
        // activity
            // commands
                // * help.js
                // * view.js
                // * organize.js
            // * mycli.js
        // raw
            // poc
            // facts