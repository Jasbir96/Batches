// Q1 print the result 
// npm i request jsdom 
const request = require('request');
const fs = require("fs");
const jsdom = require("jsdom");
const scoreCardObj = require("./scorecard");
function AllMatchPageExecutor(url) {
    request(url, cb);

}
function cb(error, response, body) {
    if (error) {
        console.log('error:', error.message); // Print the error message
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log("content recieved");
        // console.log(body);
        extractData(body);
    }
}
function extractData(body) {
    const JSDOM = jsdom.JSDOM;
    // pass to newJSDOM 
    let dom = new JSDOM(body);
    // 2. // no meaning 
    // document represent the whole html page 
    let document = dom.window.document;
    let matchBoxes = document.querySelectorAll(".ds-flex.ds-mx-4.ds-pt-2.ds-pb-3.ds-space-x-4.ds-border-t.ds-border-line-default-translucent")
    for (let i = 0; i < matchBoxes.length; i++) {
        let curMatch = matchBoxes[i];
        let allAnchors = curMatch.querySelectorAll("a");
        let scoreCardAnchor = allAnchors[2];
        let link = scoreCardAnchor.getAttribute("href");
        let scoreCardLink = "https://www.espncricinfo.com" + link;
        // console.log(AllMatchPageKaLink);
        scoreCardObj.scoreCardFn(scoreCardLink);
    }
}
module.exports = {
    AllmatchFn: AllMatchPageExecutor
}
// .ds-text-ui-typo.ds-underline-offset-4.ds-block