// no of videos,views
// Average length of videos
//  Detail of each video -> {name,duration}
//  average watch time
// -> pdf fill
// https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq
const puppeteer = require("puppeteer");
const PDFDocument = require("pdfkit");
const fs = require("fs");
// let links = ["https://www.amazon.in", "https://www.flipkart.com/", "https://paytmmall.com"];
let pName = process.argv[2];
let cTab;
(async function fn() {
    try {
        let browserOpenPromise = puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });
        let browser = await browserOpenPromise;
        let allTabsArr = await browser.pages();
        cTab = allTabsArr[0];
        await cTab.goto("https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq");
        await cTab.waitForSelector("h1#title");
        let name = await cTab.evaluate(function (selct) { return document.querySelector(selct).innerText },
            "h1#title");
        // #stats  .style-scope.ytd-playlist-sidebar-primary-info-renderer
        let obj = await cTab.evaluate(consoleFn,
            "#stats .style-scope.ytd-playlist-sidebar-primary-info-renderer");
        // 793
        console.log(name, obj.noOfVideos, obj.noOfviews);
        let noOfSupposedVideos = obj.noOfVideos.split(" ")[0];
        // // scroll
        let cvideosLength = await getCVideosLength();
        while (noOfSupposedVideos - cvideosLength >= 20) {
            // console.log(cvideosLength);   
            await scrollToBottom();
            cvideosLength = await getCVideosLength();
        }
        let list = await getStats();
        let pdfDoc = new PDFDocument;
        pdfDoc.pipe(fs.createWriteStream('playlist.pdf'));
        pdfDoc.text(JSON.stringify(list));
        pdfDoc.end();
        // // #video-title
        // playlist Name
        //  -> 100 videos ->load
        // Total videos
        // views
    } catch (err) {
        console.log(err);
    }
})();
function consoleFn(selector) {
    let allElems = document.querySelectorAll(selector);
    let noOfVideos = allElems[0].innerText;
    let noOfviews = allElems[1].innerText;
    return {
        noOfVideos,
        noOfviews
    }
}
async function getStats() {
    let list = await cTab.evaluate(consoleGetNameAndtime, "#video-title", "#container>#thumbnail span.style-scope.ytd-thumbnail-overlay-time-status-renderer");
    return list;
}
async function getCVideosLength() {
    let length = await cTab.evaluate(consoleGetlength, "#container>#thumbnail span.style-scope.ytd-thumbnail-overlay-time-status-renderer");
    return length;

}
async function scrollToBottom() {
    await cTab.evaluate(goToBottom);
    function goToBottom() {
        window.scrollBy(0, window.innerHeight);
        // console.log(window.innerHeight);
        // console.log("scrolled");
    }
}

function consoleGetNameAndtime(videoNameSelect, durationSelect) {
    let allNamesElem = document.querySelectorAll(videoNameSelect);
    let durationElem = document.querySelectorAll(durationSelect);
    let currentVideoList = []
    for (let i = 0; i < durationElem.length; i++) {
        let videoTitle = allNamesElem[i].innerText;
        let duration = durationElem[i].innerText;
        currentVideoList.push({ videoTitle, duration });
    }
    return currentVideoList;
}



function consoleGetlength(durationSelect) {
    let durationElem = document.querySelectorAll(durationSelect);
    return durationElem.length;
}
