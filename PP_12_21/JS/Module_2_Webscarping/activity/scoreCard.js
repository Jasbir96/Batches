// let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";
let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
let path = require("path");
let xlsx = require("xlsx");
function processSinglematch(url) {

    request(url, cb);
}
function cb(error, response, html) {

    if (error) {
        console.log(error); // Print the error if one occurred
    } else if (response.statusCode == 404) {
        console.log("Page Not Found")
    }
    else {
        // console.log(html); // Print the HTML for the request made 
        dataExtracter(html);
    }
}
function dataExtracter(html) {
    let searchTool = cheerio.load(html)
    // team name
    let bothInningArr = searchTool(".Collapsible");
    for (let i = 0; i < bothInningArr.length; i++) {
        // scoreCard = searchTool(bothInningArr[i]).html();
        let teamNameElem = searchTool(bothInningArr[i]).find("h5");
        let teamName = teamNameElem.text();
        // console.log(teamName);
        teamName = teamName.split("INNINGS")[0];
        // console.log(teamName);
        teamName = teamName.trim();
        // console.log(teamName);
        let batsManTableBodyAllRows = searchTool(bothInningArr[i]).find(".table.batsman tbody tr");
        console.log(batsManTableBodyAllRows.length)
        // type cohersion loops -> 
        for (let j = 0; j < batsManTableBodyAllRows.length; j++) {
            let numberofTds = searchTool(batsManTableBodyAllRows[j]).find("td");
            // console.log(numberofTds.length);
            if (numberofTds.length == 8) {
                // console.log("You are valid")
                let playerName = searchTool(numberofTds[0]).text();
                let runs = searchTool(numberofTds[2]).text();
                let balls = searchTool(numberofTds[3]).text();
                let fours = searchTool(numberofTds[5]).text();
                let sixes = searchTool(numberofTds[6]).text();
                // myTeamName	name	venue	date opponentTeamName	result	runs	balls	fours	sixes	sr
                console.log(playerName, "played for", teamName, "scored", runs, "in", balls, "with ", fours, "fours and ", sixes, "sixes");
                processPlayer(playerName, teamName, runs, balls, fours, sixes);
            }
        }
        console.log("``````````````````````````````````````")
        // fs.writeFileSync(`innning${i+1}.html`,scoreCard);
    }
    // players name
}
function processPlayer(playerName, teamName, runs, balls, fours, sixes) {
    let obj = {
        playerName,
        teamName,
        runs,
        balls,
        fours,
        sixes
    }
    let dirPath = path.join(__dirname, teamName);
    //    folder 
    if (fs.existsSync(dirPath) == false) {
        fs.mkdirSync(dirPath)
    }
    // playerfile 
    let playerFilePath = path.join(dirPath, playerName + ".xlsx");
    let playerArray = [];
    if (fs.existsSync(playerFilePath) == false) {
        playerArray.push(obj);
    } else {
        // append
        playerArray = excelReader(playerFilePath, playerName);
        playerArray.push(obj);
    }
    // write in the files
    // writeContent(playerFilePath, playerArray);
    excelWriter(playerFilePath, playerArray, playerName);
}
// function getContent(playerFilePath) {
//     let content = fs.readFileSync(playerFilePath);
//     return JSON.parse(content);
// }
function writeContent(playerFilePath, content) {
    let jsonData = JSON.stringify(content)
    fs.writeFileSync(playerFilePath, jsonData);
}
module.exports = {
    processSinglematch
}

function excelWriter(filePath, json, sheetName) {
    // workbook create
    let newWB = xlsx.utils.book_new();
    // worksheet
    let newWS = xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    // excel file create 
    xlsx.writeFile(newWB, filePath);
}
// // json data -> excel format convert
// // -> newwb , ws , sheet name
// // filePath
// read 
//  workbook get
function excelReader(filePath, sheetName) {
    // player workbook
    let wb = xlsx.readFile(filePath);
    // get data from a particular sheet in that wb
    let excelData = wb.Sheets[sheetName];
    // sheet to json 
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans;
}