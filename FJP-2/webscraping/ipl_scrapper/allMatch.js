
// npm i request
let request = require('request');
// npm i jsdom 
// data extract 
let jsdom = require("jsdom");
let fs = require("fs");
let { JSDOM } = jsdom;
let url = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";
let {tobecalledBySomeone}=require("./match.js")
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
        // console.log(html);
        // console.log("Html data recieved");
        parseHtml(html);
    }
}
function parseHtml(html) {
    let dom = new JSDOM(html);
    let MyDocument = dom.window.document;
    let allanchors = MyDocument.querySelectorAll("a[data-hover='Scorecard']");
    console.log(allanchors.length);
    // get link of scorecard of every match
    for (let i = 0; i < allanchors.length; i++) {
        let link = allanchors[i].getAttribute("href");
        let fullLink="https://www.espncricinfo.com"+link;
        // console.log(fullLink);
        tobecalledBySomeone(fullLink)    
        //  call match.js and provide anew match link to match.js 
    
    }
}