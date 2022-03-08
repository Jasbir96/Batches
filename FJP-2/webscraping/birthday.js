// npm i request
let request = require('request');
// npm i jsdom 
// data extract 
let jsdom = require("jsdom");
let fs = require("fs");
let { JSDOM } = jsdom;
let url = "https://www.espncricinfo.com/series/afghanistan-in-bangladesh-2021-22-1299826/bangladesh-vs-afghanistan-1st-t20i-1299832/full-scorecard";
// callback -> request -> data get
request(url, cb);
// cb is called by your request 
// html -> data 
function cb(err, httpResponse, html) {
    if (err) {
        console.log(err);
    } else if (httpResponse.statusCode == 404) {
        console.log("Page not found");
    } else {
        // console.log(html);
        console.log("Html data recieved");
        parseHtml(html);
    }
}
function parseHtml(html) {
    let dom = new JSDOM(html);
    let MyDocument = dom.window.document;
    // first result 
    // queryselector
    // multiple array -> querysSelectorAll
    // , textContext, getAttribute
    // 1. winning team name 
    let teamName = MyDocument.querySelector
        (".match-info.match-info-MATCH.match-info-MATCH-half-width .status-text");
    // tag -> property get 
    let title = teamName.textContent;
    let teamNameArr = title.split("won");
    let WinningTeamName = teamNameArr[0].trim();
    // 2. filtering from scoercard of indiviudal team  
    // all collapsibles  -> team -> team details 
    // -> my document -> whole page
    let bothInningHtml = MyDocument.querySelectorAll(".Collapsible");
    for (let i = 0; i < bothInningHtml.length; i++) {
        let singleInning = bothInningHtml[i];
        //inning ke andar html 
        let teamNameHtml = singleInning.querySelector("h5");
        //    fs.writeFileSync(`inning${i+1}.html`,inningHtml);
        // name correct -> name compare -> 
        let teamNameRaw = teamNameHtml.textContent;
        let teamNameArr = teamNameRaw.split("INNINGS");
        let teamName = teamNameArr[0].trim();
        if (WinningTeamName == teamName) {
            // singleInnings[i] -> bowlers task complete 
            // console.log("Winnning team is " + finalTeamName);
            // code -> single inning
            let rows = singleInning.querySelectorAll(".table.batsman tbody tr");
            // -> jo rows belong karti kisko -> bowler 
            // loop -> tr bolwers -> use 
            for (let i = 0; i < rows.length; i++) {
                let tdlength = rows[i].querySelectorAll("td").length;
                // remove commentry columns 
                if (tdlength > 4) {
                    // valid row -> belong kisi player ko 
                    let bowlerRows = rows[i];
                    let tds = bowlerRows.querySelectorAll("td");
                    let name = tds[0].textContent;
                    // console.log(name);
                    let href = tds[0].querySelector("a").getAttribute("href");
                    // half -> complete 
                    let fullLink = "https://www.espncricinfo.com" + href;
                    console.log(fullLink);
                    printBirthday(fullLink, name);
                    // details 

                }
            }
            console.log("`````````````````````````````");
        }
    }
}
function printBirthday(fullLink, name) {
    request(fullLink, function (err, httpResponse, html) {
        if (err) {
            console.log(err);
        } else if (httpResponse.statusCode == 404) {
            console.log("Page not found");
        } else {
            // console.log(html);
            // console.log("Html data recieved for " + name);
            parseBirthdayHtml(html, name);
        }
    })
}
function parseBirthdayHtml(html, name) {
    let dom = new JSDOM(html);
    let MyDocument = dom.window.document;
    let allDataMetrics = MyDocument.querySelectorAll(".player-card-description.gray-900");
    let bornOn = allDataMetrics[1].textContent;
    console.log(name + " was born on " + bornOn)
}