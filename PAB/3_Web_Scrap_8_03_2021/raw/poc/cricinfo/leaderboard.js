// npm -> play store
let request = require("request");
let cheerio = require("cheerio");

// let singlemathFileObj = require("./singleMatch");
let statsArr = [];
let gCount;
let count = 1;
// console.log("before");
// async function
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard
// /series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results", cb);
// response is superset -> body
function cb(error, response, html) {
    // console.log(response);
    // console.log("error",error);
    let cheerioSelector = cheerio.load(html);
    // element select 
    let matchcard = cheerioSelector(".col-md-8.col-16");
    console.log(matchcard.length);
    gCount = matchcard.length;
    for (let i = 0; i < matchcard.length; i++) {
        // sublock anchors
        let allanchorsofAMatch = cheerioSelector(matchcard[i])
            .find(".match-cta-container .btn.btn-sm.btn-outline-dark.match-cta");
        let link = cheerioSelector(allanchorsofAMatch[2]).attr("href");
        let fullLink = "https://www.espncricinfo.com" + link;
        // console.log(fullLink);
        request(fullLink, cbsingle);

    }
    //   let AllAnchors = cheerioSelector('.match-cta-container .btn.btn-sm.btn-outline-dark.match-cta ');
    // console.log(element.length);
    // console.log(element.html());
    // html 
    // console.log(element.html());
    // text
    // console.log(element.text());
}
function cbsingle(err, response, html) {
    if(err){
        console.log(err);
        return
    }
    let chSelector = cheerio.load(html);
    let bothMatches = chSelector(".event .teams>.team");
    // console.log(bothMatches);
    // console.log(bothMatches.length);
    let myTeam;
    for (let i = 0; i < bothMatches.length; i++) {
        let isLossing = chSelector(bothMatches[i]).hasClass("team-gray");
        if (isLossing == false) {
            let myTeamElem = chSelector(bothMatches[i]).find(".name-detail a");
            myTeam = myTeamElem.text();
        }
    }
    // both block [MI block,DC block]
    let colInnings = chSelector(".Collapsible");
    // team Name [MI,DC]
    let bothInningsTeamName = chSelector
        (".Collapsible .header-title.label");
    for (let j = 0; j < bothInningsTeamName.length; j++) {
        let teamName = chSelector(bothInningsTeamName[j]).text();
        let teamFirstName = teamName.split("INNINGS")[0];
        teamFirstName = teamFirstName.trim();
        if (teamFirstName == myTeam) {
            console.log(myTeam);
            let winTeamInning = chSelector(colInnings[j]);
            printTeamStats(winTeamInning, chSelector)
            // block get batsman table
            // rows stats
            // console.log(winTeamInning);
        }
    }
    // after the last line of the cb
    if (gCount == count) {
        console.table(statsArr);
        // self sort 
    } else {
        count++;
    }
}
function printTeamStats(winTeamInning, chSelector) {

    let allRows = chSelector(winTeamInning)
        .find(".table.batsman tbody tr");
    for (let j = 0; j < allRows.length; j++) {
        // let bolHtml = chSelector(teamBowlers[j]).text();
        let eachbatcol = chSelector(allRows[j]).find("td");
        if (eachbatcol.length == 8) {
            let playerName = chSelector(eachbatcol[0])
                .text();
            let runs = chSelector(eachbatcol[2]).text();

            addtoLeaderBoard(playerName, runs);
            // compare
        }
        // console.log(bolHtml);
        // tr -> name ,wickets column
    }
    console.log("``````````````````````````````````");
}
function addtoLeaderBoard(playerName, cruns) {
    // check -> 
    let doesExist = false;
    for (let i = 0; i < statsArr.length; i++) {
        if (statsArr[i].name == playerName) {
            statsArr[i].runs += Number(cruns);
            doesExist = true;
            break;
        }
    }
    if (doesExist == false) {
        let playerObject = {
            name: playerName,
            runs: Number(cruns)
        }
        statsArr.push(playerObject);
    }


}




//
// console.log("After");