// npm i request 
let request = require("request");
// npm i cheerio 
let cheerio = require("cheerio");
// data extract-> cheerio  
console.log("Before");
request('https://www.npmjs.com/package/cheerio', cb);
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
function dataExtracter(html) {
    // serach tool
    let searchTool = cheerio.load(html);
    // css selector -> elem 
    let elemRep = searchTool("#readme>h1");
    // text 
    let moduleName = elemRep.text().trim();
    console.log("moduleName", moduleName);
}
console.log("After");