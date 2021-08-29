// npm i puppeteer;
let puppeteer = require("puppeteer");
// creates headless browser
let browserStartPromise = puppeteer.launch({
    // visible 
    headless: false,
    // type 1sec // slowMo: 1000,
    defaultViewport: null,
    // browser setting 
    args: ["--start-maximized", "--disable-notifications"]
});
let page, browser, rTab;
browserStartPromise
    .then(function (browserObj) {
        console.log("Browser opened");
        // new tab 
        browser = browserObj
        let browserTabOpenPromise = browserObj.newPage();
        return browserTabOpenPromise;
    }).then(function (newTab) {
        page = newTab
        console.log("new tab opened ")
        let gPageOpenPromise =
            newTab.goto("https://www.google.com/");
        return gPageOpenPromise;
    }).then(function () {
        console.log("Google home page opened");
        // keyboard -> data entry 
        let waitforTypingPromise = page.type("input[title='Search']", "pepcoding");
        return waitforTypingPromise;
    }).then(function () {
        // keyboard -> specific keys
        let enterWillBeDonePromise = page.keyboard.press('Enter', { delay: 100 });
        return enterWillBeDonePromise;
    }).then(function () {
        // next page 
        //wait for element to be visible on the page-> whenver you go to a new page 
        console.log("wait for element to be visible");
        let waitForElementPromise = page.waitForSelector(".LC20lb.DKV0Md",
            { visible: true });
        return waitForElementPromise;
    }).then(function () {
        // mouse function 
        let elemClickPromise = page.click(".LC20lb.DKV0Md");
        return elemClickPromise;
    }).then(function () {
        // 30 seconds 
        let waitForModalPromise = page.waitForSelector("#lp_modal_close", { visible: true });
        return waitForModalPromise;
    })
    .then(function () {
        let clickModal = page.click("#lp_modal_close", { delay: 100 });
        return clickModal;
    }).then(function () {
        // page element -> cheerio 

        let allLisPromise = page.$$(".site-nav-li");
       
        return allLisPromise;
    }).then(function (allElem) {
        let elementWillBeclickedPromise = allElem[6].click({ delay: 100 });
        return elementWillBeclickedPromise;
    })
    // resources page is on next tab and next tab will take some time to open 
    .then(function () {
        let future2secondAfter = Date.now() + 2000;
        while (Date.now() < future2secondAfter) {
        }
        let listofOpenedTabsPromise = browser.pages();
        return listofOpenedTabsPromise;
    })
    .then(function (array) {
        rTab = array[array.length - 1];
        let waitforLevel1Promise = rTab.waitForSelector('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]',
            { visible: true });
        return waitforLevel1Promise;
    }).then(function () {
        let clickLevel1Promise = rTab.click('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]');
        return clickLevel1Promise;
    }).then(function () {
        console.log("level 1 will be opened");
    })






    // browser.pages -> array of all the open tabs

    // .then(function (array) {
    //     rTab = array[array.length - 1];
    //     let urlPromise = rTab.url();
    //     return urlPromise
    // }).then(function (url) {
    //     console.log(url)
    // })