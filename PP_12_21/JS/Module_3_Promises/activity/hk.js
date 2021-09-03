const loginLink = "https://www.hackerrank.com/auth/login";
const emailpassObj = require("./secrets");
const { answers } = require("./codes");
const puppeteer = require("puppeteer");
// creates headless browser
let browserStartPromise = puppeteer.launch({
    // visible 
    headless: false,
    // type 1sec // slowMo: 1000,
    defaultViewport: null,
    // browser setting 
    args: ["--start-maximized", "--disable-notifications"]
});
let page, browser;
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
        let gPageOpenPromise = newTab.goto(loginLink);
        return gPageOpenPromise;
    }).then(function () {
        let emailWillBeEnteredPromise = page.type("input[id='input-1']", emailpassObj.email, { delay: 50 });
        return emailWillBeEnteredPromise;
    }).then(function () {
        let passwordWillBeEnteredPromise = page.type("input[type='password']", emailpassObj.password, { delay: 50 });
        return passwordWillBeEnteredPromise;
    }).then(function () {
        let loginWillBeDOnepromise = page.click('button[data-analytics="LoginPassword"]', { delay: 100 });
        return loginWillBeDOnepromise;
    })
    .then(function () {
        let clickedOnAlgoPromise = waitAndClick(".track-card a[data-attr2='algorithms']", page);
        return clickedOnAlgoPromise;
    }).then(function () {
        let getToWarmUp = waitAndClick("input[value='warmup']", page);
        return getToWarmUp;
    }).then(function () {
        let waitFor3SecondsPromise = page.waitFor(3000);
        return waitFor3SecondsPromise;
    }).then(function () {
        let challengeClickPromise = page.click(".challenge-submit-btn", { delay: 100 });
        return challengeClickPromise;``

    })
function waitAndClick(selector, cPage) {
    return new Promise(function (resolve, reject) {
        let waitForModalPromise = cPage.waitForSelector(selector, { visible: true });
        waitForModalPromise
            .then(function () {
                let clickModal =
                    cPage.click(selector, { delay: 100 });
                return clickModal;
            }).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err)
            })
    }
    )
}