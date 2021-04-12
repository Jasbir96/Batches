const { email, password } = require("../../../secrets");
const puppeteer = require("puppeteer");
let { answers } = require("./codes");
let cTab;
(async function fn() {
    try {
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
        await waitAndClick
        (".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled");
        await waitAndClick("a[data-attr1='warmup']");
        let currentPageUrl = await cTab.url();
        for (let i = 0; i < answers.length; i++) {
            let qObj = answers[i];
            await questionSolver(qObj.qName, qObj.soln, currentPageUrl);
        }
    } catch (err) {
        console.log(err);
    }
})();
// wait -> pending promise
async function waitAndClick(selector) {
    try {
        await cTab.waitForSelector(selector, { visible: true });
        await cTab.click(selector);
        console.log("done");
    }
    catch (err) {
        return new Error(err);
    }
}
async function questionSolver(qName, code, mainPageLink) {
    await cTab.goto(mainPageLink);
    await cTab.evaluate(consoleFn, ".challengecard-title", qName);
    // next page element wait that is not pesent on the previous page
    await cTab.waitForSelector("div[data-attr2='Submissions']", { visible: true });
    await waitAndClick(".checkbox-input");
    await cTab.waitForSelector(".custominput", { visible: true });
    await cTab.type(".custominput", code, { delay: 10 });
    await cTab.keyboard.down("Control");
    await cTab.keyboard.press("a");
    await cTab.keyboard.press("x");
    await cTab.click(".monaco-editor.no-user-select.vs");
    await cTab.keyboard.press("a");
    await cTab.keyboard.press("v");
    await cTab.click(".hr-monaco-submit");
    await cTab.keyboard.up("Control");
}
function consoleFn(selector, qName) {
    let qNamesElem = document.querySelectorAll(selector);
    for (let i = 0; i < qNamesElem.length; i++) {
        let cName = qNamesElem[i].innerText.split("\n")[0];
        if (cName == qName) {
            console.log(cName);
            return qNamesElem[i].click();

        }
    }
}