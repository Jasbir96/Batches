// input -> url 
// output-> all url print
let request = require("request")
let cheerio = require("cheerio")
let scorecardObj = require("./scorecard");
console.log("Inside All Match");
function processAllmatch(url) {
    // request link extract
    request(url, cb);
    function cb(err, res, html) {
        if (err) {
            console.log(err);
        }
        else {
            extractAllScorecardLink(html);
        }
    }

}
function extractAllScorecardLink(html) {
    let seltool = cheerio.load(html);
    let scorecardlinkArr = seltool("a[data-hover='Scorecard']");
    console.log(scorecardlinkArr.length);
    for (let i = 0; i < scorecardlinkArr.length; i++) {
        let link = seltool(scorecardlinkArr[i]).attr("href");
        let fullLink = "https://www.espncricinfo.com" + link;
        console.log(fullLink);

        scorecardObj.processSingleMatch(fullLink);
    }



}
module.exports = {
    pam: processAllmatch
}