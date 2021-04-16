let fs = require("fs");
let xlsx = require("xlsx");
let content = excelReader("records.xlsx", "First");
content.push({ Name: "Rohit", LastName: "Sharma" });
excelWriter("records.xlsx",content,"First");
function excelReader(filePath, sheetName) {
    if (!fs.existsSync(filePath)) {
        return [];
    } else {
        // workbook => excel
        let wt = xlsx.readFile(filePath);
        // csk -> msd
        // get data from workbook
        let excelData = wt.Sheets[sheetName];
        // convert excel format to json => array of obj
        let ans = xlsx.utils.sheet_to_json(excelData);
        // console.log(ans);
        return ans;
    }
}
function excelWriter(filePath, content, sheetName) {
    let newWB = xlsx.utils.book_new();
    // console.log(json);
    let newWS = xlsx.utils.json_to_sheet(content);
    // msd.xlsx-> msd
    //workbook name as param
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    //   file => create , replace
    //    replace
    xlsx.writeFile(newWB, filePath);
}