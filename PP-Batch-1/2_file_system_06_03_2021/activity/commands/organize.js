let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
function dirCreator(dirpath) {
    if (fs.existsSync(dirpath) == false) {
        fs.mkdirSync(dirpath);
    }
}
function getDirectoryName(dirpath) {
    let strArr = dirpath.split(".");
    let ext = strArr.pop();
    for (let key in types) {
        // types[type].includes(ext);
        for (let i = 0; i < types[key].length; i++) {
            if (types[key][i] == ext) {
                return key;
            }
        }
    }
    return "others";
}
function isFileorNOt(dirpath) {
    return fs.lstatSync(dirpath).isFile();
}
function listContent(dirpath) {
    return fs.readdirSync(dirpath);
}
function copyFiletoFolder(dirpath, destFolder) {
    let orgFileName = path.basename(dirpath);
    let destFilePath = path.join(destFolder, orgFileName);

    fs.copyFileSync(dirpath, destFilePath);
}
function OrganizeDir(dirpath) {
    // console.log(dirpath);
    let isFile = isFileorNOt(dirpath);
    if (isFile == true) {
        // identify -> dest directory 
        // copy 
        let folderName = getDirectoryName(dirpath);
        // console.log(dirpath, "->", folderName);
        // other
        let destFolder = path.join(orgFilePath, folderName);
        copyFiletoFolder(dirpath, destFolder);
        // dirpath
    } else {
        
        let content = listContent(dirpath);
        for (let i = 0; i < content.length; i++) {
            // f10/f1.txt
            // let childPath = dirpath + "\\" + content[i];
            let childPath = path.join(dirpath, content[i]);
            OrganizeDir(childPath);
        }
    }
}
function OrganizeFn(dirpath) {
    let orgFilePath = path.join(dirpath, "organized_files")
    dirCreator(orgFilePath);
    for (let key in types) {
        let innerdirPath = path.join(orgFilePath, key);
        dirCreator(innerdirPath)
    }
    // others 
    let otherPath = path.join(orgFilePath, "others");

    dirCreator(otherPath);

    OrganizeDir(dirpath);
}
module.exports = {
    organizeFn: OrganizeFn
}