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
    let anchorArr = selTool("a[data-hover='Scorecard']");
    for (let i = 0; i < anchorArr.length; i++) {
        let link = selTool(anchorArr[i]).attr("href");
        let fullLink = "https://www.espncricinfo.com" + link;
        // console.log(fullLink);
        extractPlayername(fullLink);
    }
    // extractPlayernameSerially(linksArr, 0);
}
function extractPlayername(fullLink) {

    request(fullLink, cb);
    function cb(err, request, html) {
        if (err) {
            console.log(err);

        } else {
            printPlayerName(html);
        }
    }
}
function printPlayerName(html) {
    let selTool = cheerio.load(html);
    let playerName = selTool(".best-player-name");
    console.log(playerName.text());
}