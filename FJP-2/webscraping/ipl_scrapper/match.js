// npm i request
let request = require('request');
// npm i jsdom 
// data extract 
let jsdom = require("jsdom");
let fs = require("fs");
let { JSDOM } = jsdom;
// let url = "https://www.espncricinfo.com/series/afghanistan-in-bangladesh-2021-22-1299826/bangladesh-vs-afghanistan-1st-t20i-1299832/full-scorecard";
// callback -> request -> data get
function tobecalledBySomeone(url) {

    request(url, cb);
}
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
    // -> my document -> whole page
    let venueSelector = MyDocument.querySelector(".match-header-info.match-info-MATCH  .description");
    let venue = venueSelector.textContent;
    // 2. filtering from scoercard of indiviudal team  
    // all collapsibles  -> team -> team details
    let bothInningHtml = MyDocument
        .querySelectorAll(".Collapsible");
    let team1;
    let team2;
    for (let i = 0; i < bothInningHtml.length; i++) {
        let singleInning = bothInningHtml[i];
        //inning ke andar html 
        let teamName = getnameOfTheTeam(singleInning);
        if (i == 0) {
            team1 = teamName;
        } else {
            team2 = teamName;
        }
        if (WinningTeamName == teamName) {
            let rows = singleInning.querySelectorAll(".table.batsman tbody tr");
            for (let j = 0; j < rows.length; j++) {
                let tds = rows[j].querySelectorAll("td");
                if (tds.length > 4) {
                    // columns they belong to a valid row-> player 
                    //  Name
                    let Name = tds[0].textContent;
                    // runs
                    let runs = tds[2].textContent;
                    // balls
                    let balls = tds[3].textContent;
                    // 4s 
                    let fours = tds[5].textContent;
                    // 6s
                    let sixes = tds[6].textContent;
                    // sr
                    let sr = tds[7].textContent;
                    // opponent team name
                    let opponent;
                    if (i = 0) {
                        // i=1-> opponent 

                        opponent = team2
                    } else {
                        // i = 0 -> opponent
                        opponent = team1
                    }
                    // result 
                    let result = title;
                    console.log
                        (Name + " " + runs + " " + balls + " " + fours + " " + sixes + " " + sr + " " + opponent + " " + result + " " + venue)
                }
            }

        }
    }
}
function getnameOfTheTeam(singleInning) {
    let teamNameHtml = singleInning.querySelector("h5");
    //    fs.writeFileSync(`inning${i+1}.html`,inningHtml);
    // name correct -> name compare -> 
    let teamNameRaw = teamNameHtml.textContent;
    let teamNameArr = teamNameRaw.split("INNINGS");
    let teamName = teamNameArr[0].trim();
    return teamName;
}

module.exports = {
    tobecalledBySomeone: tobecalledBySomeone
}