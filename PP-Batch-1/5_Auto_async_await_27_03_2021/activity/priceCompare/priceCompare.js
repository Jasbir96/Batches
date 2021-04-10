let puppeteer = require("puppeteer");
let fs = require("fs");
let links = ["https://www.amazon.in",
    "https://www.flipkart.com",
    "https://paytmmall.com/"];
let pName = process.argv[2];

console.log("Before");
(async function () {
    try {
        let browserInstance = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });
        let amazonArr = await getListingFromAmazon(links[0], browserInstance, pName);
        let flipkartArr = await getListingFromFlipkart(links[1], browserInstance, pName);
        let paytmArr = await getListingFromPaytm(links[2], browserInstance, pName);
        console.table(amazonArr);
        console.table(flipkartArr);
        console.table(paytmArr);
    } catch (err) {
        console.log(err);
    }
})();
//  product Name,url of amazon home page
// output-> top 5 matching product -> price Name print 
async function getListingFromAmazon(link, browserInstance, pName) {
    let newPage = await browserInstance.newPage();
    await newPage.goto(link);
    await newPage.type("#twotabsearchtextbox", pName);
    await newPage.click("#nav-search-submit-button");
    await newPage.waitForSelector(".a-price-whole", { visible: true });
    function consoleFn(priceSelector, pNameSelector) {
        let priceArr = document.querySelectorAll(priceSelector);
        let PName = document.querySelectorAll(pNameSelector);
        let details = [];
        for (let i = 0; i < 5; i++) {
            let price = priceArr[i].innerText;
            let Name = PName[i].innerText;
            details.push({
                price, Name
            })
        }
        return details;
    }
    return newPage.evaluate(consoleFn,
        ".a-price-whole",
        ".a-size-medium.a-color-base.a-text-normal");
    // a-price-whole
    // .a-section.a-spacing-medium .a-size-medium.a-color-base.a-text-normal 
}
async function getListingFromFlipkart(link, browserInstance, pName) {
    let newPage = await browserInstance.newPage();
    await newPage.goto(link);
    await newPage.click("._2KpZ6l._2doB4z");
    await newPage.type("._3704LK", pName);
    await newPage.click("button[type='submit']");
    await newPage.waitForSelector("._30jeq3._1_WHN1", { visible: true });
    await newPage.waitForSelector("._4rR01T", { visible: true });
    function consoleFn(priceSelector, pNameSelector) {
        let priceArr = document.querySelectorAll(priceSelector);
        let PName = document.querySelectorAll(pNameSelector);
        let details = [];
        for (let i = 0; i < 5; i++) {
            let price = priceArr[i].innerText;
            let Name = PName[i].innerText;
            details.push({
                price, Name
            })
        }
        return details;
    }
    return newPage.evaluate(consoleFn,
        "._30jeq3._1_WHN1",
        "._4rR01T");
    //    ._4rR01T
    // ._30jeq3._1_WHN1

}
async function getListingFromPaytm(link, browserInstance, pName) {
    let newPage = await browserInstance.newPage();
    await newPage.goto(link);
    await newPage.type("#searchInput",pName,{ delay: 200 });
    await newPage.keyboard.press("Enter",{ delay: 200 });
    await newPage.keyboard.press("Enter");
    await newPage.waitForSelector(".UGUy", { visible: true });
    await newPage.waitForSelector("._1kMS", { visible: true });
    function consoleFn(priceSelector, pNameSelector) {
        let priceArr = document.querySelectorAll(priceSelector);
        let PName = document.querySelectorAll(pNameSelector);
        let details = [];
        for (let i = 0; i < 5; i++) {
            let price = priceArr[i].innerText;
            let Name = PName[i].innerText;
            details.push({
                price, Name
            })
        }
        return details;
    }
    return newPage.evaluate(consoleFn,
        "._1kMS",
        ".UGUy");


}