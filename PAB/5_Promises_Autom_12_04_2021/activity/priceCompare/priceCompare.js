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
        console.table(list);
         list = await getListingFromFlipkart(links[1], pName);
        console.table(list);
         list = await getListingFromPaytm(links[2], pName);
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
    return cTab.evaluate(consoleFn,
        ".s-include-content-margin.s-border-bottom.s-latency-cf-section",
        ".aok-inline-block.s-sponsored-label-info-icon",
        ".a-size-medium.a-color-base.a-text-normal",
        ".a-price-whole");
}
function consoleFn(blockSelector, sponsoredIdentifier, nameSelector, priceSelector) {
    // .s-include-content-margin.s-border-bottom.s-latency-cf-section .aok-inline-block.s-sponsored-label-info-icon
    // let nameElems = document.querySelectorAll(nameSelector);
    // let priceElems = document.querySelectorAll(priceSelector);
    // let listings = [];
    // for (let i = 0; i < 5; i++) {
    //     let name = nameElems[i].innerText;
    //     let price = priceElems[i].innerText;
    //     listings.push({
    //         name, price
    //     })
    // }
    // return listings;
    let allBlocks = document.querySelectorAll(blockSelector);
    let list = [];
    for (let i = 0; i < allBlocks.length; i++) {
        let isSponsored = allBlocks[i].querySelector(sponsoredIdentifier);
        if (isSponsored == null) {
            let nameElem = allBlocks[i].querySelector(nameSelector);
            let priceElem = allBlocks[i].querySelector(priceSelector);
            list.push({
                name: nameElem.innerText,
                price: priceElem.innerText
            }
            )
        }
        if (list.length == 5) {
            return list;
        }
    }
    return list;
}
async function getListingFromFlipkart(link, pName) {
    await cTab.goto(link);
    await cTab.type("input[type='text']", pName, { delay: 200 });
    await cTab.click("._2KpZ6l._2doB4z");
    await cTab.click(".L0Z3Pu");
    await cTab.waitForSelector("._4rR01T", { visible: true });
    await cTab.waitForSelector("._30jeq3._1_WHN1", { visible: true });
    return cTab.evaluate(fConsoleFn, "._4rR01T", "._30jeq3._1_WHN1")
    // _4rR01T-> pname
    // ._30jeq3._1_WHN1-> price
}
function fConsoleFn(pNameSelector, priceSelector) {
    let pNameElems = document.querySelectorAll(pNameSelector);
    let priceElems = document.querySelectorAll(priceSelector);
    let list = [];
    for (let i = 0; i < 5; i++) {
        let pName = pNameElems[i].innerText;
        let price = priceElems[i].innerText;
        list.push({ pName, price });
    }
    return list;
}
async function getListingFromPaytm(link, pName) {
    await cTab.goto(link);
    await cTab.type("input[type='search']", pName,{delay:200});
    await cTab.keyboard.press("Enter");
    await cTab.waitForSelector(".UGUy", { visible: true });
    await cTab.waitForSelector("._1kMS", { visible: true });
    return  cTab.evaluate(fConsoleFn, ".UGUy", "._1kMS");

    // .UGUy-> pname
    // ._1kMS-> price
}