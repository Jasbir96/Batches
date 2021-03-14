let request = require("request");
let cheerio = require("cheerio");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        // console.log(html);
        extractData(html);
    }
}
function extractData(html) {
    let selTool = cheerio.load(html);
    // get the bowling table of both the innings
    let bothBatsmanTable = selTool(".table.batsman");
    let teamNameArrelem = selTool(".Collapsible h5.header-title.label");
    let teamNameArr = [];
    for (let i = 0; i < teamNameArrelem.length; i++) {
        let teamName = selTool(teamNameArrelem[i]).text();
        teamName = teamName.split("INNINGS")[0];
        teamNameArr.push(teamName);
    }
    // console.log(bothBatsmanTable.length);
    // let tableHtml = "";
    // for (let i = 0; i < bothBatsmanTable.length; i++) {
    //     tableHtml += selTool(bothBatsmanTable[i]).html();
    // }
    for (let i = 0; i < bothBatsmanTable.length; i++) {
        let batsmanNameElem = selTool(bothBatsmanTable[i]).find("tbody tr .batsman-cell");
        for (let j = 0; j < batsmanNameElem.length; j++) {
            let playerName = selTool(batsmanNameElem[j]).text();
            console.log(playerName ,"plays for ",teamNameArr[i]);
        }
        console.log("```````````````````````````````````");
    }
    // console.log(hwtname + " : " + hwickets);
    // console.log(tableHtml);
    // get the names and wickets of every player

}