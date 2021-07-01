// const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";
// Venue date opponent result runs balls fours sixes sr
const request = require("request");
const cheerio = require("cheerio");
const path = require("path");
const fs = require("fs");
const xlsx = require("xlsx");
// home page 
function processScorecard(url) {
    // API
    request(url, cb);
}
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        // console.log(html);
        extractMatchDetails(html);
    }
}
function extractMatchDetails(html) {
    // Venue date opponent result runs balls fours sixes sr
    // ipl 
    // team 
    //     player 
    //         runs balls fours sixes sr opponent venue date  result
    // venue date 
    // .event .description
    // result ->  .event.status - text
    let $ = cheerio.load(html);
    let descElem = $(".event .description");
    let result = $(".event .status-text");
    let stringArr = descElem.text().split(",");
    let venue = stringArr[1].trim();
    let date = stringArr[2].trim();
    result = result.text();
    let innings = $(".card.content-block.match-scorecard-table>.Collapsible");
    // let htmlString = "";
    for (let i = 0; i < innings.length; i++) {
        // htmlString = $(innings[i]).html();
        // team opponent
        let teamName = $(innings[i]).find("h5").text();
        teamName = teamName.split("INNINGS")[0].trim();
        let opponentIndex = i == 0 ? 1 : 0;
        let opponentName = $(innings[opponentIndex]).find("h5").text();
        opponentName = opponentName.split("INNINGS")[0].trim();
        let cInning = $(innings[i]);
        console.log(`${venue}| ${date} |${teamName}| ${opponentName} |${result}`);
        let allRows = cInning.find(".table.batsman tbody tr");
        for (let j = 0; j < allRows.length; j++) {
            let allCols = $(allRows[j]).find("td");
            let isWorthy = $(allCols[0]).hasClass("batsman-cell");
            if (isWorthy == true) {
                // console.log(allCols.text());
                //       Player  runs balls fours sixes sr 
                let playerName = $(allCols[0]).text().trim();
                let runs = $(allCols[2]).text().trim();
                let balls = $(allCols[3]).text().trim();
                let fours = $(allCols[5]).text().trim();
                let sixes = $(allCols[6]).text().trim();
                let sr = $(allCols[7]).text().trim();
                console.log(`${playerName} ${runs} ${balls} ${fours} ${sixes} ${sr}`);
                processPlayer(teamName, playerName, runs, balls, fours, sixes, sr, opponentName, venue, date, result);
            }
        }
    }
    console.log("`````````````````````````````````````````````````");
    // console.log(htmlString);
}
function processPlayer(teamName, playerName, runs, balls, fours, sixes, sr, opponentName, venue, date, result) {
    let teamPath = path.join(__dirname, "ipl", teamName);
    // directory create if not created
    dirCreater(teamPath);
    let filePath = path.join(teamPath, playerName + ".xlsx");
    // reads the content if file exists and returns an empty array file does not exist 
    let content = excelReader(filePath, playerName);
    let playerObj = {
        teamName,
        playerName,
        runs,
        balls,
        fours,
        sixes,
        sr,
        opponentName,
        venue,
        date,
        result
    }
    content.push(playerObj);
    // excel write
    excelWriter(filePath, content, playerName);
}
function dirCreater(filePath) {

    if (fs.existsSync(filePath) == false) {
        fs.mkdirSync(filePath);
    }

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
    if (fs.existsSync(filePath) == false) {
        return [];
    }
    // player workbook
    let wb = xlsx.readFile(filePath);
    // get data from a particular sheet in that wb
    let excelData = wb.Sheets[sheetName];
    // sheet to json 
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans;
}

module.exports = {
    ps: processScorecard
}