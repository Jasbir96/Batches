let path =require("path");
let fs=require("fs");
let consoleArray = process.argv;
// console.log(consoleArray);
// hello are you  "dskjfbdsb sdjfdskfhl sdkfhdjk"
let inputArray = consoleArray.slice(2);
console.log(inputArray);
let folderPath=inputArray[0];
let pathofTheFileTobeCreated=
path.join(folderPath,"abc.txt");
fs.writeFileSync(pathofTheFileTobeCreated,
    "abc Created on Desktop");
