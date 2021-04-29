// title
// total videos
// actual videos  
// view watch time
// views
const puppeteer = require("puppeteer");
let page;
let cVideos = 0;
async function fn() {
    try {
        const browser = await puppeteer
            .launch({
                headless: false,
                defaultViewport: null,
                args: ["--start-maximized"],
            })
        let pages = await browser.pages();
        page = pages[0];
        await page.goto("https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq");
        await page.waitForSelector("#stats>.style-scope.ytd-playlist-sidebar-primary-info-renderer", { visible: true });
        await page.waitForSelector("h1#title", { visible: true });
        let obj = await page.evaluate(function () {
            let allelements = document.querySelectorAll("#stats>.style-scope.ytd-playlist-sidebar-primary-info-renderer");
            let noofVideos = allelements[0].innerText;
            let noOfViews = allelements[1].innerText;
            let title = document.querySelector("h1#title").innerText;
            let obj = {
                nfVideos: noofVideos,
                nfViews: noOfViews,
                title
            }
            return obj;
        });
        //  initially all videos -> title , duration
        console.log("Title", obj.title, " videos ", obj.nfVideos, "views ", obj.nfViews);
        let noOfVideos = obj.nfVideos.split(" ")[0];
        noOfVideos = Number(noOfVideos);
        let i = 0;
        // 700
        //83
        while ((noOfVideos - cVideos) > 100) {
            await scrollDown(page);
            console.log(i);
            i++;
        }
        // await page.waitForNavigation({ waitUntil: "networkidle0" });
        // 83 
        await waitTillHTMLRendered(page);
        await scrollDown();
        console.log(cVideos);
        let videoSelector = "#video-title";
        let duration = "span.style-scope.ytd-thumbnail-overlay-time-status-renderer";
        // getTitleNDuration(videoSelector, duration);
        let titleDurArr = await page.evaluate(getTitleNDuration, videoSelector, duration);
        console.table(titleDurArr);
    } catch (err) {
        console.log(err);
    }
}
// scroll
async function scrollDown() {
    let length = await page.evaluate(function () {
        // console.log("scrolled");
        // -> time scroll
        let titleElems = document.querySelectorAll("#video-title");
        titleElems[titleElems.length - 1].scrollIntoView(true);
        return titleElems.length;
    });
    cVideos = length;
}
// duration title
function getTitleNDuration(videoSelector, duration) {
    let titleElementsArr = document.querySelectorAll(videoSelector);
    let durationElementArr = document.querySelectorAll(duration);
    // console.log("titlelength", titleElementsArr.length);
    // console.log("durationlength", durationElementArr.length);
    let titleDurArr = [];
    for (let i = 0; i < durationElementArr.length; i++) {
        let title = titleElementsArr[i].innerText;
        let duration = durationElementArr[i].innerText.trim();
        titleDurArr.push({ title, duration })
    }
    return titleDurArr;
}
//  html wait 
async function waitTillHTMLRendered(page, timeout = 30000) {
    const checkDurationMsecs = 1000;
    const maxChecks = timeout / checkDurationMsecs;
    let lastHTMLSize = 0;
    let checkCounts = 1;
    let countStableSizeIterations = 0;
    const minStableSizeIterations = 3;

    while (checkCounts++ <= maxChecks) {
        let html = await page.content();
        let currentHTMLSize = html.length;

        let bodyHTMLSize = await page.evaluate(() => document.body.innerHTML.length);

        console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, " body html size: ", bodyHTMLSize);

        if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize)
            countStableSizeIterations++;
        else
            countStableSizeIterations = 0; //reset the counter

        if (countStableSizeIterations >= minStableSizeIterations) {
            console.log("Page rendered fully..");
            break;
        }

        lastHTMLSize = currentHTMLSize;
        await page.waitForTimeout(checkDurationMsecs);
    }
};
fn();