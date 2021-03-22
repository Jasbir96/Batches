// npm -> play store
let request = require("request");
let cheerio = require("cheerio");
let path = require("path");
let allMatchobj = require("./AllMatch");
let fs = require("fs");
let folderPath = path.join(__dirname, "ipl");
dirCreater(folderPath);
// console.log("before");
// async function
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
request(url, cb);
// response is superset -> body
function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        //  console.log(html);
        extractAllMatchPageLink(html);
    }
}
console.log("Inside main");
console.log("`````````````````````````````");
function extractAllMatchPageLink(html) {
    let selTool = cheerio.load(html);
    let nextPageAnchor = selTool(".widget-items.cta-link a");
    let link = nextPageAnchor.attr("href");
    let fullLink = "https://www.espncricinfo.com" + link
    allMatchobj.pam(fullLink)
}
function dirCreater(folderPath) {
    if (fs.existsSync(folderPath) == false) {
        fs.mkdirSync(folderPath);
    }
}

