// player entry -> teamName
// ,player Name,
// a. Runs, balls, sixes , fours, sr for that match
// b. date ,venue ,result and opponent name for that match

// npm -> play store
let request = require("request");
let cheerio = require("cheerio");
let path = require("path");
let fs = require("fs");
let xlsx = require("xlsx");
// console.log("before");
// async function
function processSingleMatch(url) {
    request(url, cb)
}
// response is superset -> body
function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        //  console.log(html);
        extractPlayerDetails(html);
    }
}

// opponent team Name -> player -> team
// Runs, balls, sixes , fours, sr
// date ,venue ,result


function extractPlayerDetails(html) {
    // date ,venue ,result
    let selTool = cheerio.load(html);
    let detailsElem = selTool(".event .match-info.match-info-MATCH .description");
    let detailText = detailsElem.text();
    let detailsArr = detailText.split(",");
    let venue = detailsArr[1].trim();
    let date = detailsArr[2].trim();
    // console.log(venue);
    // console.log(date);
    let resultElem = selTool(".event .match-info.match-info-MATCH .status-text");
    let result = resultElem.text();
    // console.log(result);
    //    [IND,AUS]
    let NameoFTeams = selTool(".Collapsible h5");
    // []
    let BatsmanTableoFTeams = selTool(".Collapsible .table.batsman");
    for (let i = 0; i < NameoFTeams.length; i++) {
        let allRowsOfCurrentTeam = selTool(BatsmanTableoFTeams[i]).find("tbody tr");
        for (let j = 0; j < allRowsOfCurrentTeam.length; j++) {
            let allcols = selTool(allRowsOfCurrentTeam[j]).find("td");
            if (allcols.length == 8) {
                // valid row
                // opponent team Name -> player -> team.team,
                // Runs, balls, sixes , fours, sr,name
                // date ,venue ,result
                // teamName
                let myTeamName = selTool(NameoFTeams[i]).text().split("INNINGS")[0].trim();
                console.log(myTeamName);
                myTeamName = myTeamName.trim();
                let opponentTeamName = i == 0 ? selTool(NameoFTeams[1]).text() : selTool(NameoFTeams[0]).text();
                opponentTeamName = opponentTeamName.split("INNINGS")[0].trim();
                let name = selTool(allcols[0]).text();
                let runs = selTool(allcols[2]).text();
                let balls = selTool(allcols[3]).text();
                let fours = selTool(allcols[5]).text();
                let sixes = selTool(allcols[6]).text();
                let sr = selTool(allcols[7]).text();
                console.log(`teamName ${myTeamName} playerName ${name} venue ${venue} Date ${date} 
                opponent ${opponentTeamName} result ${result} runs ${runs} balls ${balls} fours ${fours} 
                sixes ${sixes} sr ${sr}`);
                console.log("``````````````````````````````````````````````````````````");
                processPlayer(myTeamName, name, venue, date, opponentTeamName, result, runs, balls, fours, sixes, sr);
            }
        }
    }
}
function processPlayer(myTeamName, name, venue, date, opponentTeamName, result, runs, balls, fours, sixes, sr) {
    // team folder -> exist
    // does not exist   
    let folderPath = path.join(__dirname, "ipl", myTeamName);
    dirCreater(folderPath);
    // file -> read data update -> write
    // create -> write
    // let filePath = path.join(folderPath, name + ".json");
    let filePath = path.join(folderPath, name + ".xlsx");
    // [],[{},{}]
    let content = excelReader(filePath, name);
    let matchobj = {
        myTeamName, name, venue, date,
        opponentTeamName, result, runs, balls, fours, sixes, sr
    }

    content.push(matchobj);
    excelWriter(filePath, content, name);
    // if (fs.existsSync(filePath)) {
    //     let buffer = fs.readFileSync(filePath);
    //     content = JSON.parse(buffer);
    // }
    // content.push(matchobj);
    // fs.writeFileSync(filePath, JSON.stringify(content));
}

function excelReader(filePath, name) {
    if (!fs.existsSync(filePath)) {
        return [];
    } else {
        // workbook => excel
        let wt = xlsx.readFile(filePath);
        // csk -> msd
        // get data from workbook
        let excelData = wt.Sheets[name];
        // convert excel format to json => array of obj
        let ans = xlsx.utils.sheet_to_json(excelData);
        // console.log(ans);
        return ans;
    }
}
function excelWriter(filePath, json, name) {
    // console.log(xlsx.readFile(filePath));
    let newWB = xlsx.utils.book_new();
    // console.log(json);
    let newWS = xlsx.utils.json_to_sheet(json);
    // msd.xlsx-> msd
    //workbook name as param
    xlsx.utils.book_append_sheet(newWB, newWS, name);
    //   file => create , replace
    //    replace
    xlsx.writeFile(newWB, filePath);
}

function dirCreater(folderPath) {
    if (fs.existsSync(folderPath) == false) {
        fs.mkdirSync(folderPath);
    }
}
module.exports = {
    processSingleMatch
}