const request = require("request");
const cheerio = require("cheerio");
const scoreCardObj = require("./scorecard");
function getAllMatchesLink(url) {
    request(url, function (err, response, html) {
        if (err) {
            console.log(err);
        }
        else {
            extractAllLinks(html);
        }
    })
}
function extractAllLinks(html) {
    let $ = cheerio.load(html);
    // cheerio -> access index wrap 
    let scorecardElems = $("a[data-hover='Scorecard']");
    for (let i = 0; i < scorecardElems.length; i++) {
        let link = $(scorecardElems[i]).attr("href");
        let fullLink = "https://www.espncricinfo.com" + link;
        // console.log(fullLink);
        scoreCardObj.ps(fullLink);
        // 
    }
}
// inbuilt feature
module.exports = {
    gAlmatches: getAllMatchesLink
}