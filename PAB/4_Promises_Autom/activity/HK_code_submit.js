const { email, password } = require("../../../secrets");
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
    }).then(function () {
        // console.log(visitPage)
        let emailWillTypedpromise = cTab.type("input[name='username']", email, { delay: 200 });
        return emailWillTypedpromise;
    }).then(function () {
        let passwordWillTypedpromise = cTab.type("input[name='password']", password, { delay: 200 });
        return passwordWillTypedpromise;
    }).then(function () {
        let loginPromise = cTab.click("button[data-analytics='LoginPassword']");
        return loginPromise;
    })
    // .then(function () {
    //     let waitForIpKit = cTab.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled",
    //         { visible: true });
    //     return waitForIpKit;
    // })
    // .then(function () {
    //     let goToIPKit = cTab.click(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled");
    //     return goToIPKit;
    // })
    .then(function () {
        let IpKitClickePromise = waitAndClick(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled");
        return IpKitClickePromise;
    })
    // .then(function () {
    //     let waitForWarmUp = cTab.waitForSelector("a[data-attr1= 'warmup']", { visible: true });
    //     return waitForWarmUp;
    // }).then(function () {
    //     let clickOnWarmUp = cTab.click("a[data-attr1='warmup']");
    //     return clickOnWarmUp;
    // })
    .then(function () {
        let warmUpPagePromise = waitAndClick("a[data-attr1='warmup']");
        return warmUpPagePromise;
    }).then(function () {
        let waitForQuestions = cTab.waitForSelector("a[data-analytics='ChallengeListChallengeName']", { visible: true });
        return waitForQuestions;
    })
    .then(function () {
        function ConsoleWalaFn() {
            let allElem = document.querySelectorAll("a[data-analytics='ChallengeListChallengeName']")
            let linksArr = [];
            for (let i = 0; i < allElem.length; i++) {
                linksArr.push(allElem[i].getAttribute("href"));
            }
            return linksArr;
        }
        let linkArrPromise = cTab.evaluate(ConsoleWalaFn);
        return linkArrPromise;
        //link -> of all questions
        // serially question -> question solver -> question solve
    }).then(function (linksArr) {
        console.log(linksArr);
    })



// create 
function waitAndClick(selector) {
    // wait +click-> promise
    return new Promise(function (resolve, reject) {
        // P1
        let waitForElementPromise = cTab.waitForSelector(selector, { visible: true });
        waitForElementPromise
            .then(function () {
                let clickPromise = cTab.click(selector);
                return clickPromise
            }).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            })

    })
}
    // dynamic site -> id change

    // create new promise -> wait ->
