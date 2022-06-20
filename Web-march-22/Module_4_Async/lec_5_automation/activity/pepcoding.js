// browser control
// controls a headless browser -> browser that is by default not visible 
// npm i puppeteer
const puppeteer = require("puppeteer");
// nearly every function of puppeteer returns a promise
async function fn() {
    const browserRepresentativeObj = await puppeteer.launch({
        headless: false,
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        defaultViewport: null,
        args: ["--start-maximized", "--start-in-incognito"],
        slowMo: 100
    });
    //new  tab open  
    const tab = await browserRepresentativeObj.newPage();
    // // to go google's home page 
    await tab.goto("https://www.google.com");
    // // text type 
    await tab.type("input[type='text']", "pepcoding", { delay: 200 });
    // // /to press a specific key
    await tab.keyboard.press("Enter");
    // results 
    // // // page change error prevent  -> to wait for selector that is present on the second page  
    await tab.waitForSelector(".LC20lb.MBeuO.DKV0Md", { visible: true });
    // // click 
    await tab.click(".LC20lb.MBeuO.DKV0Md", { delay: 200 });

    await tab.waitForSelector(".site-nav-li", { visible: true });
    await tab.click(".site-nav-li");
    await tab.waitForSelector(".card", { visible: true });
    let coursedetails = await tab.evaluate(browserMeChalneWalafn);
    console.table(coursedetails);
    // represent -> in good format 
    function browserMeChalneWalafn() {
        let elemArr = document.
            querySelectorAll("#courses .card.course-tile.card-cs.rounded-border");
        // 1st course 
        let detailsArr = [];
        for (let i = 0; i < elemArr.length; i++) {
            let singleCourse = elemArr[i];
            let courseNameElem = singleCourse.querySelector("h3");
            let dateElem = singleCourse.querySelector(".date");
            let featuresArr = singleCourse.querySelectorAll("h5");

            let courseName = courseNameElem.textContent.trim();
            let date = dateElem.textContent.trim();
            let features = "";
            for (let j = 0; j < featuresArr.length; j++) {
                let cFeature = featuresArr[j].textContent.trim();
                features += cFeature + "\n";
            }
            // console.log(courseName, " ", date, " ", features);
            let priceArr = singleCourse.querySelectorAll(".cart-sec h4");
            let price = priceArr.length == 1 ? priceArr[0] : priceArr[1];
            price = price.textContent.trim();
            console.log(courseName, " ", date,)
            console.log(features)
            let courseObj = {
                features, courseName, date,price
            }

            detailsArr.push(courseObj);
        }
        return detailsArr;
    }
}
fn();
// keyboard ,mouse ,scroll
