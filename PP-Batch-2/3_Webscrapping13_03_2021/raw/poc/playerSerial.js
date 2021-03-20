let request = require("request");
let cheerio = require("cheerio");
let url =
    "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        // console.log(html);
        extractData(html);
    }
}
// let cards = selTool(".col-md-8.col-16");
// for (let i = 0; i < cards.length; i++) {
// let aArr = selTool(cards[i]).find(".match-cta-container a");
//   let link=selTool(aArr[2]).attr("href");
// //   console.log(link);
// let fullLink="https://www.espncricinfo.com"+link;
// console.log(fullLink)
// }
function extractData(html) {
    let selTool = cheerio.load(html);
    let linksArr = [];
    let anchorArr = selTool("a[data-hover='Scorecard']");
    for (let i = 0; i < anchorArr.length; i++) {
        let link = selTool(anchorArr[i]).attr("href");
        let fullLink = "https://www.espncricinfo.com" + link;
        // console.log(fullLink);
        linksArr.push(fullLink);
    }
    extractPlayernameSerially(linksArr, 0);
}
function extractPlayernameSerially(linksArr, n) {
    if (n == linksArr.length) {
        return;
    }
    request(linksArr[n], cb);
    function cb(err, request, html) {
        if (err) {
            console.log(err);
        } else {
            printPlayerName(html);
            extractPlayernameSerially(linksArr, n + 1);
        }
    }
}
function printPlayerName(html) {
    let selTool = cheerio.load(html);
    let playerName = selTool(".best-player-name");
    console.log(playerName.text());
}