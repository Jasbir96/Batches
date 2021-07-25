let fs = require("fs");
let path = require("path");
let inputArr = process.argv.slice(2);
console.log(inputArr);
let inputDir = inputArr[0];
// content read 
let allentities = fs.readdirSync(inputDir);
let content = "";
for (let i = 0; i < allentities.length; i++) {
    let enitityName = allentities[i];
    // console.log(enitityName);
    let fullPath = path.join(inputDir, enitityName);
    let statsOfAPath = fs.lstatSync(fullPath);
    if (statsOfAPath.isFile()) {
        // console.log(fullPath)
        let ext = path.extname(fullPath);
        console.log(ext);
        if (ext == ".txt") {
            content += fs.readFileSync(fullPath);

        }
    }
}
let filePath = path.join(inputDir, "summary.txt");
fs.writeFileSync(filePath, content);
console.log("summary file created");