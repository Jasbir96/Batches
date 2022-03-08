// npm i request
let request = require('request');
// data extract 
let jsdom = require("jsdom");
let { JSDOM } = jsdom;
let url = "https://www.espncricinfo.com/series/afghanistan-in-bangladesh-2021-22-1299826/bangladesh-vs-afghanistan-1st-t20i-1299832/full-scorecard";
// callback -> request -> data get
request(url, cb);
// cb is called by your request 
// html -> data 
function cb(err, httpResponse, html) {
    if (err) {
        console.log(err);
    } else if (httpResponse.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log(html);
        console.log("Html data recieved");
        parseHtml(html);
    }
}
function parseHtml(html) {
    let dom = new JSDOM(html);
    let MyDocument = dom.window.document;
    // first result 
    // queryselector
    // multiple array -> querysSelectorAll
    // , textContext, getAttribute
    let mom=MyDocument
    .querySelector(".playerofthematch-name");
    // tag -> property get 
    let title = mom.textContent;
    console.log(title);
}