
// browser control
// controls a headless browser -> browser that is by default not visible 
// npm i puppeteer
const puppeteer = require("puppeteer");
// nearly every function of puppeteer returns a promise
const credObj = require("./secrets");
// module.exports = {
//     password: "",
//     email: ""
// }
async function fn() {
    // ***************************************Login********************************************
    const browserRepresentativeObj = await puppeteer.launch({
        headless: false,
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        defaultViewport: null,
        args: ["--start-maximized", "--start-in-incognito"],
        slowMo: 50
    });
    //new  tab open  
    const tab = await browserRepresentativeObj.newPage();
    // // to go google's home page 
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("input[type='text']", credObj.email, { delay: 20 });
    await tab.type("input[type='password']", credObj.password, { delay: 20 });
    await tab.keyboard.press("Enter");
    //    promises compose 
    await waitAndClickTopic("Java", tab);
    await waitAndClickQuestion("Java Stdin and Stdout I", tab)
    // choose a topic  -> ?? Java
    // select questions -> ??  Java Stdin and Stdout I
    // write the code ->  -> code read type   
    // submit the code  -> button click

}
fn();
// keyboard ,mouse ,scroll
async function waitAndClickTopic(name, tab) {
    await tab.waitForSelector(".topics-list", { visible: true });
    // let elems = await tab.$$(".topics-list .topic-card a"); -> document.querySelectorAll
    // let elems = await tab.$(".topics-list .topic-card a"); 
    // console.log(elems.length);
    await tab.evaluate(findAndClick, name);
    console.log(idx);
    function findAndClick(name) {
        let alltopics = document.querySelectorAll(".topics-list .topic-card a");
        // return idx
        let idx;
        for (idx = 0; idx < alltopics.length; idx++) {
            let cTopic = alltopics[idx].textContent.trim();
            console.log(cTopic);
            if (cTopic == name) {
                break;
            }
        }
        //document  -> elem 
        alltopics[idx].click();
        // return idx;
    }

    // await tab.click(selector);
}





