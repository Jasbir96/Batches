let url = "https://www.hackerrank.com/auth/login";
let { password, email } = require("../../../secrets");
const puppeteer = require("puppeteer");
let tab;
let browserPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--incognito", "--start-maximized"]
})
browserPromise
    .then(function (browser) {
        let tabsArrpromise = browser.pages();
        return tabsArrpromise;
    })
    .then(function (tabArr) {
        tab = tabArr[0];
        let gotoHkPagePromise = tab.goto(url);
        return gotoHkPagePromise;
    }).then(function () {
        let emailWillBeTypedPromise = tab.type("#input-1", email, { delay: 100 });
        return emailWillBeTypedPromise;
    }).then(function () {
        let passwordWillBeTypedPromise = tab.type("#input-2", password, { delay: 100 });
        return passwordWillBeTypedPromise;
    }).then(function () {
        let loginButtonClickPromise = tab.click("button[data-analytics='LoginPassword']");
        let combinedPromise = Promise.all([loginButtonClickPromise, tab.waitForNavigation({ waitUntil: "networkidle0" })]);
        return combinedPromise;
    }).then(function () {
        let ipkitpromise = tab.click("h3[title='Interview Preparation Kit']");
        return ipkitpromise;
    }).then(function () {
    })