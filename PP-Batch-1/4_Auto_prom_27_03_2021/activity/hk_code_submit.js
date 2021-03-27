let puppeteer = require("puppeteer");
let { password, email } = require("../../../secrets");
let gtab;
console.log("Before");
let browserPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized","--incognito"]
})
// /pages
browserPromise
    .then(function (browserInstance) {
       
        let newTabPromise = browserInstance.pages();
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
        let loginPageWillBeClickedpromise = gtab.click("button[data-analytics='LoginPassword']");
        return loginPageWillBeClickedpromise;
    })
    .then(function () {
        console.log("Login done");
    }).catch(function (err) {
        console.log(err);
    })
console.log("After");





