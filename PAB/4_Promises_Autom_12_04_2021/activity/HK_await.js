const { email, password } = require("../../../secrets");
const puppeteer = require("puppeteer");
let { answers } = require("./codes");
let cTab;


(async function fn() {
    let browserOpenPromise = puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"]
    });
    let browser = await browserOpenPromise;
    let allTabsArr = await browser.pages();
    cTab = allTabsArr[0];
    await cTab.goto("https://www.hackerrank.com/auth/login");
    await cTab.type("input[name='username']", email, { delay: 200 });
    await cTab.type("input[name='password']", password, { delay: 200 });
    await cTab.click("button[data-analytics='LoginPassword']");
    await waitAndClick(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled");

})();
// wait -> pending promise
async function waitAndClick(selector) {
    // wait +click-> promise
    // P1
    // P1
    try {
        await cTab.waitForSelector(selector, { visible: true });
        await cTab.click(selector);
        console.log("done");
    }
    catch (err) {
        return  new Error(err);
    }
}