// promise -> return promise
// Js -> browser control 
//  Promise -> promise 
const puppeteer = require("puppeteer");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";
let gPage;
let browseropenP = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized", "--incognito"]
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
        gPage = tabs[0];
        let cricinfoPromise = gPage.goto(url);
        return cricinfoPromise;
    })
    .then(function () {
        function fn() {
            // first entry 
            // innerText
            // value
            console.log("hello");
            return document.querySelector(".best-player-name").innerText;
        }
        let Playernamepromise = gPage.evaluate(fn);
        return Playernamepromise;
    }).then(function (playerName) {
        console.log(playerName);
    })


