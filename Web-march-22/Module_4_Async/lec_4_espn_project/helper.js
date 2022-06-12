const fs = require("fs");
function dirCreater(inputPath) {
    let isPresent = fs.existsSync(inputPath);
    if (isPresent == false) {
        fs.mkdirSync(inputPath);
    }else{
        console.log(inputPath," already present ")
    }
}

module.exports = {
    dirCreater: dirCreater
}