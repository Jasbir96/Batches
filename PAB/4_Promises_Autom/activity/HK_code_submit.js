
const puppeteer = require("puppeteer");
let cTab
let browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"]
})
browserOpenPromise
    .then(function (browser) {
        let alltabsArrpromise = browser.pages();
        return alltabsArrpromise;
    }).then(function (allTabsArr) {
        cTab = allTabsArr[0];
        let visitLoginpagePromise = cTab.goto("https://www.hackerrank.com/auth/login");
        return visitLoginpagePromise;
    }).then(function (visitPage) {
        console.log(visitPage)
        let emailWillTypedpromise = cTab.type("input[name='username']", "abcd", { delay: 200 });
        return emailWillTypedpromise;
    }).then(function () {
        let passwordWillTypedpromise = cTab.type("input[name='password']", "hdsgvadshvdvhs", { delay: 200 });
        return passwordWillTypedpromise;

    }).then(function () {
        console.log("Email Entered");
    })