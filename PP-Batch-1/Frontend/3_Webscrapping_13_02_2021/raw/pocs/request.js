// npm init -y
// npm install request 
// npm install cheerio
let request = require("request");
let cheerio = require("cheerio");
console.log("Before");
request("https://www.google.com", cb);
function cb(error, response, html) {
    if (error) {
        console.log(error)
    } else {
        extractHtml(html);
    }
}
function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let selectElem = selectorTool("#SIvCob");
    // console.log(selectElem.text());
    console.log(selectElem.html());

    // selectorTool
}
console.log("after");