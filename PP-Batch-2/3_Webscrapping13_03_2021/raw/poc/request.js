// npm init -y
// npm install request 
let request = require("request");
let cheerio = require("cheerio");
console.log("Before");
request("https://www.google.com", cb);
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
    let elem = selTool("#SIvCob");
    console.log(elem.text());
    console.log(elem.html());
}
console.log("After");
