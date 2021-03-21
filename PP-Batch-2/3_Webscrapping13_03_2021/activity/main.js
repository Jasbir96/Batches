// npm init -y
// npm install request 
// npm install cheerio
let request = require("request");
let cheerio = require("cheerio");
console.log("Before");
request("https://github.com/topics", cb);
function cb(error, response, html) {
    if (error) {
        console.log(error)
    } else {
        extractHtml(html);
    }
}
function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let topicsArr = selectorTool(".col-12.col-sm-6.col-md-4.mb-4 a");
    for (let i = 0; i < topicsArr.length; i++) {
        let link = selectorTool(topicsArr[i]).attr("href");
        let fullLink = "https://github.com" + link;
        processrepoPage(fullLink);
    }
}
function processrepoPage(fullLink) {
    request(fullLink, cb);
    function cb(err, resp, html) {
        if (err) {
            console.log(err);
        } else {
            getRepoLinks(html);
        }
    }
}
function getRepoLinks(html) {
    let selTool = cheerio.load(html);
    let topicElem = selTool(".h1-mktg");
    console.log(topicElem.text());
    let arr = selTool("a.text-bold");
    for (let i = 0; i < 8; i++) {
        let link = selTool(arr[i]).attr("href");
        console.log(link);
    }
    console.log("`````````````````````````````")
}
console.log("after");