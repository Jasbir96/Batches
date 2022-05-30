
// 1. npm i request -> npm 
const request = require('request');
const fs = require("fs");
const jsdom = require("jsdom");

let url = 'http://www.google.com';
// request working-> 
// 1. request to the given url;
// 2.  response -> request function -> cb call -> data put 
request(url, cb);
// params
// error ->if there is any error while executing the request 
// response -> header + body 
// body -> html
console.log('Before')
function cb(error, response, body) {
    if (error) {
        console.log('error:', error.message); // Print the error message
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        // console.log('body:', body); // Print the HTML for the 
        console.log("content recieved");
        // Google homepage.
        // fs.writeFileSync("index.html", body);
        extractData(body);
    }
}
function extractData(html) {
    const JSDOM = jsdom.JSDOM; // no meaning 
    //1.  string form me -> html content provide
    // pass to newJSDOM 
    let dom = new JSDOM(html);
    // 2. // no meaning 
    let document = dom.window.document;
    // let firstButton = document.querySelectorAll(".lsb");
    // // input -> value 
    // let content = firstButton[0].value;
    // console.log("content: ", content);
    // rest -> textContent
    let allAnchors = document.querySelectorAll("#SIvCob a");
    console.log("Google search is offered in these languages");
    for (let i = 0; i < allAnchors.length; i++) {
        let content = allAnchors[i].textContent;
        console.log("languages: ", content);
    }

}
console.log('After');