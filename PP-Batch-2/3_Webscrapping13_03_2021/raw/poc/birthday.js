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

    // console.log(bothBatsmanTable.length);
    // let tableHtml = "";
    // for (let i = 0; i < bothBatsmanTable.length; i++) {
    //     tableHtml += selTool(bothBatsmanTable[i]).html();
    // }
    for (let i = 0; i < bothBatsmanTable.length; i++) {
        let batsmanNameElem = selTool(bothBatsmanTable[i]).find("tbody tr .batsman-cell a");
        for (let j = 0; j < batsmanNameElem.length; j++) {
            let link = selTool(batsmanNameElem[j]).attr("href");
            let name = selTool(batsmanNameElem[j]).text();
            printBirthday(link, name);
        }
        console.log("```````````````````````````````````");

    }
    // console.log(hwtname + " : " + hwickets);
    // console.log(tableHtml);
    // get the names and wickets of every player
}
function printBirthday(link, name) {
//    async 
    request(link, cb);
    function cb(error, response, html) {
        if (error) {
            console.log(err);
        } else {
            extractBirthday(html, name);
        }
    }
}
function extractBirthday(html, name) {
    let selTool = cheerio.load(html);
    let birthdayElem = selTool(".ciPlayerinformationtxt span");
    let birthday=selTool(birthdayElem[1]).text();
    console.log(name+" was born on "+birthday);
}