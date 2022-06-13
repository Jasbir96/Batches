const fs = require("fs");
const path = require("path");
// npm 
const xlsx = require("xlsx");
function dirCreater(inputPath) {
    let isPresent = fs.existsSync(inputPath);
    if (isPresent == false) {
        fs.mkdirSync(inputPath);
    } else {
        // console.log(inputPath, " already present ")
    }
}
function fileHandler(inputPath, dataObj) {
    let isFilePresent = fs.existsSync(inputPath);
    let arr = [];
    if (isFilePresent == false) {
        // fileCreater(inputPath, dataObj)
        arr.push(dataObj);
        excelWriter(inputPath, arr);
    } else {
        arr = excelReader(inputPath);
        arr.push(dataObj);
        excelWriter(inputPath, arr);
        // fileUpdater(inputPath, dataObj);
    }
}
// JSON.stringify -> write 
// JSON.parse-> reading
function fileCreater(playerPath, dataObj) {
    let arr = [dataObj];
    fs.writeFileSync(playerPath, JSON.stringify(arr));
}
function fileUpdater(playerPath, dataObj) {
    // file content read 
    let dataBuffer = fs.readFileSync(playerPath);
    // buffer -> JSON
    let arr = JSON.parse(dataBuffer);
    // JSON entry add
    arr.push(dataObj);
    // 
    fs.writeFileSync(playerPath, JSON.stringify(arr));
    // console.log("entry updated ", path.basename(playerPath));
}


function excelReader(filePath) {
    // file -> read -> workbook
    let wb = xlsx.readFile(filePath);
    // get a worksheet from a workbook
    let excelData = wb.Sheets["sheet1"];
    // sheet -> json
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans;
}
function excelWriter(filePath, json) {
    // console.log(xlsx.readFile(filePath));
    // empty workbook
    let newWB = xlsx.utils.book_new();
    //  worksheet   
    let newWS = xlsx.utils.json_to_sheet(json);
    // wb -> put worksheet -> worksheet name -> sheet1
    xlsx.utils.book_append_sheet(newWB, newWS, "sheet1");
    // worksheet create 
    xlsx.writeFile(newWB, filePath);
}


module.exports = {
    dirCreater: dirCreater,
    fileHandler: fileHandler
}