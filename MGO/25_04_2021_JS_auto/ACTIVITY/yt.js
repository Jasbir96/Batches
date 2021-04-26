// title
// total videos
// actual videos  
// view watch time
// views
const puppeteer = require("puppeteer");
let page;
let cVideos = 0;
let target = 100;
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
        let videoSelector = "#video-title";
        let duration = "span.style-scope.ytd-thumbnail-overlay-time-status-renderer";
        await page.waitForSelector(videoSelector, { visible: true });
        await page.waitForSelector(duration, { visible: true });
        await page.evaluate(function () {
            let durationElems = document.querySelectorAll("span.style-scope.ytd-thumbnail-overlay-time-status-renderer");
            durationElems[durationElems.length - 1].scrollIntoView();
            console.log("hello");
        });
        // await page.focus(reqElem);
        // console.log("Hello");
        // let i = 0;
        // while (i <= (noOfVideos / 100)) {
        //     scrollDown();
        //     i++;
        // }
        // #video-title-> video name
        // span.style-scope.ytd-thumbnail-overlay-time-status-renderer
        //  end
        // await page.waitForSelector(videoSelector, { visible: true });
        // await page.waitForSelector("span.style-scope.ytd-thumbnail-overlay-time-status-renderer", { visible: true });
        // let titleDurArr = await page.evaluate(getTitleNDuration, videoSelector, duration);
        // console.table(titleDurArr);
    } catch (err) {
        console.log(err);
    }
}



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
fn();