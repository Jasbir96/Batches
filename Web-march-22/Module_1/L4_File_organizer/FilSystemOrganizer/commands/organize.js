let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
function organizeFn(dirPath) {
    dirPath = dirPath != undefined ? dirPath : process.cwd()
    organizeHelper(dirPath);
}
function organizeHelper(dirPath) {
    // create an organized_dir in dirPath
    let organizeddirPath = path.join(dirPath, "organized_dir");
    let doesorganizedFolderExist = fs.existsSync(organizeddirPath);
    if (doesorganizedFolderExist == false) {
        fs.mkdirSync(organizeddirPath)
    }
    let names = fs.readdirSync(dirPath);
    for (let i = 0; i < names.length; i++) {
        let assetPath = path.join(dirPath, names[i]);
        let ans = isFile(assetPath);
        if (ans == true) {
            let type = getType(assetPath);
            copytothatType(assetPath, type, organizeddirPath);
        }
    }
}
function isFile(assetPath) {
    // file or folder
    // console.log(assetPath);
    let ans = fs.lstatSync(assetPath).isFile();
    return ans;
}
function getType(assetPath) {
    let extname = path.extname(assetPath);
    extname = extname.slice(1);
    for (let key in types) {
        let totalExtension = types[key];
        for (let i = 0; i < totalExtension.length; i++) {
            if (totalExtension[i] == extname) {
                return key;
            }
        }
    }
    return "others";
}

function copytothatType(assetPath, type, organizeddirPath) {
    // organized_dir -> type wala folder create
    let destFolderPath = path.join(organizeddirPath, type);
    if (fs.existsSync(destFolderPath) == false) {
        fs.mkdirSync(destFolderPath)
    }
    let originalName = path.basename(assetPath);
    let destFilePath = path.join(destFolderPath, originalName);
    fs.copyFileSync(assetPath, destFilePath);
    // content copy
    console.log(originalName, "file copied to ", type);

}
module.exports = {
    organizeFn: organizeFn
}