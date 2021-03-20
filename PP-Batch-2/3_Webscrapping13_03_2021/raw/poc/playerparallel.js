let request = require("request");
let cheerio = require("cheerio");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";
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
    // let cards = selTool(".col-md-8.col-16");
    // for (let i = 0; i < cards.length; i++) {
    // let aArr = selTool(cards[i]).find(".match-cta-container a");
    //   let link=selTool(aArr[2]).attr("href");
    // //   console.log(link);
    // let fullLink="https://www.espncricinfo.com"+link;
    // console.log(fullLink)
    // }
    let anchorArr = selTool("a[data-hover='Scorecard']");
    for (let i = 0; i < anchorArr.length; i++) {
        let link = selTool(anchorArr[i]).attr("href");
        let fullLink = "https://www.espncricinfo.com" + link;
        // console.log(fullLink);
        extractPlayerName(fullLink);
    }
}
function extractPlayerName(fullLink) {
    request(fullLink, cb);
    function cb(err, res, html) {
        if (err) {
            console.log(err);
        } else {
            printPlayerName(html);
        }
    }
}
function printPlayerName(html) {
    let selTool = cheerio.load(html);
 let playerName=  selTool(".best-player-name");
console.log(playerName.text());
}