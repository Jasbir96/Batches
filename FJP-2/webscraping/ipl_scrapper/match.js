// npm i request
let request = require('request');
// npm i jsdom 
// data extract 
let jsdom = require("jsdom");
let fs = require("fs");
let path = require("path");
let { JSDOM } = jsdom;
// let url = "https://www.espncricinfo.com/series/afghanistan-in-bangladesh-2021-22-1299826/bangladesh-vs-afghanistan-1st-t20i-1299832/full-scorecard";
// callback -> request -> data get
function tobecalledBySomeone(url) {
    request(url, cb);


}
// cb is called by your request 
// html -> data 
function cb(err, httpResponse, html) {
    // console.log(url);
    if (err) {
        console.log(err);
    } else if (httpResponse.statusCode == 404) {
        console.log("Page not found");
    } else {
        // console.log(html);
        // console.log("````````````````````````````````````````````")
        // console.log("````````````````````````````````````````````")
        // console.log("````````````````````````````````````````````")
        // console.log("Html data recieved");
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

    let losingTeam = MyDocument.querySelector
        (".match-header-container .team-gray");
    if (losingTeam == null) {
        console.log("Match tied and no winner as such");
        return;
    }
    let bothTheTeams = MyDocument.querySelectorAll(".match-header-container .name-link");
    let WinningTeamName;
    for (let i = 0; i < bothTheTeams.length; i++) {
        if (losingTeam.textContent != bothTheTeams[i].textContent) {
            WinningTeamName = bothTheTeams[i].textContent;
        }
    }
    // tag -> property get 
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
                    let name = tds[0].textContent;
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
                    if (i == 0) {
                        // i=1-> opponent 

                        opponent = team2
                    } else {
                        // i = 0 -> opponent
                        opponent = team1
                    }
                    // result 
                    // let result = title;
                    console.log(name + " " + runs + " " + balls + " " + fours + " " + sixes + " " + sr + " " + opponent + " " +  " " + venue+" "+teamName)
                    saveToFiles(name, runs, balls, fours, sixes, sr, opponent, venue, teamName);
                // console.log(teamName);
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


function saveToFiles(name, runs, balls, fours, sixes, sr, opponent, venue, teamName) {

    let dataObj = {
        name, runs, balls, fours, sixes, sr, opponent, venue, teamName
    }
    // check whether the folder exist or not
    let doesTeamExist = fs.existsSync(teamName);
    // console.log(teamName+" "+doesTeamExist);
    if (doesTeamExist == false) {
        fs.mkdirSync(teamName);
    }

    let pathofPlayerFile = path.join(teamName, name + ".json");
    let doesPlayerExist = fs.existsSync(pathofPlayerFile);
    // ram 
    let entries = [];
    if (doesPlayerExist == false) {
        // -> data put 
        entries = [];
        entries.push(dataObj);
    } else {
        // data update
        let binaryData = fs.readFileSync(pathofPlayerFile);
        entries = JSON.parse(binaryData);
        entries.push(dataObj);
    }
    // save file  -> file system 
    fs.writeFileSync(pathofPlayerFile, JSON.stringify(entries));

}
module.exports = {
    tobecalledBySomeone: tobecalledBySomeone
}