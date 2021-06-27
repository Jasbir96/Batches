const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const fs = require("fs");
const path = require("path");
// Venue date opponent result runs balls fours sixes sr
const request = require("request");
const cheerio = require("cheerio");
const AllMatcgObj = require("./Allmatch");
// home page 
const iplPath = path.join(__dirname, "ipl");
dirCreater(iplPath);
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        // console.log(html);
        extractLink(html);
    }
}
function extractLink(html) {
    let $ = cheerio.load(html);
    let anchorElem = $("a[data-hover='View All Results']");
    // 
    let link = anchorElem.attr("href");
    // console.log(link);
    let fullLink = "https://www.espncricinfo.com" + link;
    console.log(fullLink);
    AllMatcgObj.gAlmatches(fullLink);
}

function dirCreater(filePath) {
    if (fs.existsSync(filePath) == false) {
        fs.mkdirSync(filePath);
    }

}