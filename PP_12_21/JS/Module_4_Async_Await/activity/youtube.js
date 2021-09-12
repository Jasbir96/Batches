// a. Name of Playlist,view
// b. Total No of videos : 792
// c. actual No of videos :783
// d. Total length of playlist : 12 hours, 9 minutes, 12 seconds
// At 1.25x : 9 hours, 43 minutes, 21 seconds

// At 1.50x : 8 hours, 6 minutes, 8 seconds
// At 1.75x : 6 hours, 56 minutes, 41 seconds
// At 2.00x : 6 hours, 4 minutes, 36 seconds
// Average length of video : 29 minutes, 10 seconds

// e. console.table of video number,name,time



// Current Task : name of playlist ,views,total videos, 

const puppeteer = require("puppeteer");
let page;
(async function fn() {
    let browser = await puppeteer.launch({
        headless: false, defaultViewport: null,
        args: ["--start-maximized"],
    })
    page = await browser.newPage();
    await page.goto("https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq");
})();


