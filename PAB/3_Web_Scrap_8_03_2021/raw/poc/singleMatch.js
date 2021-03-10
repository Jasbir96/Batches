// match-info match-info-MATCH
let request = require("request");
let cheerio = require("cheerio");
// input -> commentary page url 
function singlepageExtractor(url) {

    request(url, cb);
}
// intial content -> scrap 
// last ball commentry
// first ball commentary 
// automation -> browser
function cb(err, response, html) {
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
}
function printTeamStats(winTeamInning, chSelector) {
    let statsArr = []
    let allRows = chSelector(winTeamInning)
        .find(".table.batsman tbody tr");
    for (let j = 0; j < allRows.length; j++) {
        // let bolHtml = chSelector(teamBowlers[j]).text();
        let eachbatcol = chSelector(allRows[j]).find("td");
        if (eachbatcol.length == 8) {
            let playerName = chSelector(eachbatcol[0])
                .text();
            let runs = chSelector(eachbatcol[2]).text();
            statsArr.push({
                Name: playerName,
                Runs: runs
            })
            // compare
        }
        // console.log(bolHtml);
        // tr -> name ,wickets column
    }
    console.table(statsArr);
    console.log("``````````````````````````````````");
}
module.exports={
    spFn:singlepageExtractor
}