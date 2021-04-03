let puppeteer = require("puppeteer");
let { password, email } = require("../../../secrets");
let { codes } = require("./code");
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
        let passwordWillBeTypedPromise = gtab.type("#input-2", password, { delay: 200 });
        return passwordWillBeTypedPromise;
    }).then(function () {
        let loginPageWillBeClickedpromise = gtab.
        click("button[data-analytics='LoginPassword']");
        return loginPageWillBeClickedpromise;
    }).then(function () {
        let clickIPKIt = waitAndClick
        (".card-content h3[title='Interview Preparation Kit']");
        return clickIPKIt;
    }).then(function () {
        let warmupClick = 
        waitAndClick("a[data-attr1='warmup']");
        return warmupClick;
    }).then(function () {
        return gtab.url();
    }).then(function (url) {
        console.log(url);
        let questionObj = codes[0];
        questionSolver(url, questionObj.soln,questionObj.qName);

    })
    .catch(function (err) {
        console.log(err);
    })
// promise based function -> wait and click
function waitAndClick(selector) {
    return new Promise(function (resolve, reject) {
        let selectorWaitPromise = gtab.waitForSelector(selector, 
            { visible: true });
        selectorWaitPromise
            .then(function () {
                let selectorClickPromise = gtab.click(selector);
                return selectorClickPromise;
            }).then(function () {
                resolve();
            }).catch(function () {
                reject(err);
            })
    })
}
function questionSolver(modulepageUrl, code, questionName) {
    return new Promise(function (resolve, reject) {
        // page visit 
        let reachedPageUrlPromise = gtab.goto(modulepageUrl);
        reachedPageUrlPromise
            .then(function () {
                //  page h4 -> mathcing h4 -> click
                // function will exceute inside the browser
                function browserconsolerunFn(questionName) {
                    let allH4Elem = document.querySelectorAll("h4");
                    let textArr = [];
                    for (let i = 0; i < allH4Elem.length; i++) {
                        let myQuestion = allH4Elem[i]
                        .innerText.split("\n")[0];
                        textArr.push(myQuestion);
                    }
                    let idx = textArr.indexOf(questionName);
                    // console.log(idx);
                    // console.log("hello");
                    allH4Elem[idx].click();
                }
                let pageClickPromise = 
                gtab.evaluate(browserconsolerunFn, questionName);
                return pageClickPromise;
            }).then(function(){
                resolve();
            }) 
        // questionName-> appear -> click
        // read 
        // copy
        // paste
        // submit 
    })
}




console.log("After");





