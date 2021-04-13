const puppeteer = require("puppeteer");
let links = ["https://www.amazon.in", "https://www.flipkart.com/", "https://paytmmall.com"];
let pName = process.argv[2];
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
        let list = await getListingFromAmazon(links[0], pName);
        list 
        console.table(list);
    } catch (err) {
        console.log(err);
    }
})();
async function getListingFromAmazon(link, pName) {
    // console.log(pName)
    // #twotabsearchtextbox
    // #nav-search-submit-button
    // span>div>div.rush-component
    // s-include-content-margin s-border-bottom s-latency-cf-section
    await cTab.goto(link);
    // await cTab.waitForSelector("#twotabsearchtextbox",{visible :true});
    await cTab.type("#twotabsearchtextbox", pName, { delay: 200 });
    await cTab.click("#nav-search-submit-button");
    await cTab.waitForSelector(".a-size-medium.a-color-base.a-text-normal", { visible: true });
    return cTab.evaluate(consoleFn, ".a-size-medium.a-color-base.a-text-normal", ".a-price-whole");
}
function consoleFn(nameSelector, priceSelector) {
    let nameElems = document.querySelectorAll(nameSelector);
    let priceElems = document.querySelectorAll(priceSelector);
    let listings = [];
    for (let i = 0; i < 5; i++) {
        let name = nameElems[i].innerText;
        let price = priceElems[i].innerText;
        listings.push({
            name, price
        })
    }
    return listings;
}