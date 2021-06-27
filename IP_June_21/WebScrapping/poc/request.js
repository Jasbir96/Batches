let request = require("request");
let cheerio = require("cheerio");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
console.log("before");
request(url, cb);
function cb(error, response, html) {
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', html); // Print the HTML for the Google homepage.
    if (error) {
        console.log(error);
    } else if (response && response.statusCode == 404) {
        console.log("Page not found")
    } else {
        // console.log(html);
        extractData(html);
    }
}
function extractData(html) {
    // cheerio.load parses the html 
    // and returns a function that is used to select elements form that html page using css selectors
    let $ = cheerio.load(html);
    // unique elemnt ->element&& array 
    let elem = $(".section-header.border-bottom.border-0.p-0 h5.header-title.label");
    console.log(elem.text());

}
console.log("After");