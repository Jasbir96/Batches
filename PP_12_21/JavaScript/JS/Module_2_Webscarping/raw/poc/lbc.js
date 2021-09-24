// npm i request 
let request = require("request");
// npm i cheerio 
let cheerio = require("cheerio");
// data extract-> cheerio  
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";
console.log("Before");
request(url, cb);
function cb(error, response, html) {
    // console.error('error:', error); // Print the error if one occurred
    // console.log('body:', html); // Print the HTML for the Google homepage.
    if (error) {
        console.log(error); // Print the error if one occurred
    } else if (response.statusCode == 404) {
        console.log("Page Not Found")
    }
    else {
        // console.log(html); // Print the HTML for the request made 
        dataExtracter(html);
    }
}
// insights -> You don't get all the  data initially  
function dataExtracter(html) {
    // search tool
    let searchTool = cheerio.load(html);
    // selector
    // you always can't get unique selectors
    let elemRepArr = searchTool(".match-comment-wrapper .match-comment-long-text");
    // console.log(elemRepArr.length);
    // cram this -> this 
    let lbc = searchTool(elemRepArr[0]).text();
    console.log("lbc", lbc);
}
console.log("After");