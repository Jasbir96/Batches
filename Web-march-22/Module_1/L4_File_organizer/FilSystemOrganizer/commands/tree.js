let fs = require("fs");
let path = require("path");
function treeFn(dirPath) {
    dirPath = dirPath != undefined ? dirPath : process.cwd();
    let folderKaContent = fs.readdirSync(dirPath);
    console.log(path.basename(dirPath));
    for (let i = 0; i < folderKaContent.length; i++) {
        console.log("\t" + folderKaContent[i]);
    }
}
module.exports = {
    treeFn: treeFn
}