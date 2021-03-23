// promise -> return promise
// Js -> browser control 
//  Promise -> promise 
const puppeteer = require("puppeteer");

let browseropenP = puppeteer
.launch({
    headless: false
})
// full fill -> then -> 
// let browserclosepromise =browser.close();
        // browserclosepromise
        // .then(
        //     function () {
        //     console.log("Browser closed");
        // })
        
browseropenP
    .then(function (browser) {
        console.log("browser opened");
        let alltabsPromise = browser.pages();
        
        return alltabsPromise;
    })
    .then(function (tabs) {
        let page = tabs[0];
        let googlehomePageOpenPromise = page.goto("https://www.google.com");
       return  googlehomePageOpenPromise

    }).then(function () {
        console.log("google home page opened");
    })

