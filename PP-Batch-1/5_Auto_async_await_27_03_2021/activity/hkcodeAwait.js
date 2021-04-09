let puppeteer = require("puppeteer");
let { password, email } = require("../../../secrets");
let { codes } = require("./code");
let fs = require("fs");
console.log("Before");
(async function () {
    let browserInstance = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized",]
    });
    let newTab = await browserInstance.newPage();
    await newTab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
    await newTab.type("#input-1", email, { delay: 200 });
    await newTab.type("#input-2", password, { delay: 200 });
    await newTab.click("button[data-analytics='LoginPassword']");
    await waitAndClick(".card-content h3[title='Interview Preparation Kit']", newTab);
    await waitAndClick("a[data-attr1='warmup']", newTab);
    let url = newTab.url();
})();
async function waitAndClick(selector, newTab) {
    await newTab.waitForSelector(selector, { visible: true });
    // we didn't wait this promise because we want  the calling perspn to await this promise based async function 
    let selectorClickPromise = newTab.click(selector);
    return selectorClickPromise;
}

