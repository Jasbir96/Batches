let puppeteer = require("puppeteer");
let { password, email } = require("../../../secrets");
let fs = require("fs");
let gtab;
console.log("Before");
let browserPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized",]
})
// /pages
browserPromise
    .then(function (browserInstance) {
        let newTabPromise = browserInstance.newPage();
        return newTabPromise;
    })
    .then(function (newTab) {
        // console.log(newTab);
        let loginPageWillBeopenedPromise = newTab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
        gtab = newTab;
        return loginPageWillBeopenedPromise;
    })
    .then(function () {
        // console.log("login Page opened");
        let emailWillBeTypedPromise = gtab.type("#input-1", email, { delay: 200 });
        return emailWillBeTypedPromise;
    }).then(function () {
        let passwordWillBeTypedPromise = gtab.type("#input-2",
            password, { delay: 200 });
        return passwordWillBeTypedPromise;
    }).then(function () {
        let loginPageWillBeClickedpromise = gtab.click("button[data-analytics='LoginPassword']");
        let IPKitChallenge = gtab.waitForSelector(".card-content h3[title='Interview Preparation Kit']", { visible: true });
        let combinedPromise = Promise.all([loginPageWillBeClickedpromise, gtab.waitForNavigation({ waitUntil: "networkidle0" }), IPKitChallenge]);
        return combinedPromise;
    })
    .then(function () {
        let clickpromise = gtab.click(".card-content h3[title='Interview Preparation Kit']");
        let warmupChallengeElementPromise = gtab.waitForSelector("a[data-attr1='warmup']", { visible: true });
        let combinedPromise = Promise.all([clickpromise, gtab.waitForNavigation({ waitUntil: "networkidle0" }),
            warmupChallengeElementPromise]);
        return combinedPromise;
    })
    .then(function () {
        let clickpromise = gtab.click("a[data-attr1='warmup']");
        let sockMerchantPromise = gtab.waitForSelector("a[data-attr1='sock-merchant']", { visible: true });
        let combinedPromise = Promise.all([clickpromise, gtab.waitForNavigation({ waitUntil: "networkidle0" }), sockMerchantPromise]);
        return combinedPromise;
    })
    .then(function () {
        let clickpromise = gtab.click("a[data-attr1='sock-merchant']");
        let combinedPromise = Promise.all([clickpromise, gtab.waitForNavigation({ waitUntil: "networkidle0" })]);
        return combinedPromise;
    }).then(function () {
        let questionWillSolvedpromise = questionSolver();
        return questionWillSolvedpromise;
    })
    .catch(function (err) {
        console.log(err);
    })
// function questionSolver() {
//     return new Promise(function (resolve, reject) {
//         fs.readFile("")


//     })
// }



console.log("After");





