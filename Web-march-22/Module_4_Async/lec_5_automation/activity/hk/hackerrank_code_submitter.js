
// browser control
// controls a headless browser -> browser that is by default not visible 
// npm i puppeteer
const puppeteer = require("puppeteer");
// nearly every function of puppeteer returns a promise
const credObj = require("./secrets");
const fs=require("fs");
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
        slowMo: 20
    });
    //new  tab open  
    const tab = await browserRepresentativeObj.newPage();
    // // to go google's home page 
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("input[type='text']", credObj.email, { delay: 20 });
    await tab.type("input[type='password']", credObj.password, { delay: 20 });
    await tab.keyboard.press("Enter");
    //    promises compose 
    // choose a topic  -> ?? Java ✔ 
    await waitAndClickTopic("Java", tab);

    // select questions -> ??  Java Stdin and Stdout I ✔
    await waitAndClickQuestion("Java Stdin and Stdout I", tab)
    // write the code ->  -> code read type 
    // code -> input 
    // read -> question ko pass
    let code = await fs.promises.readFile("code.java","utf-8");
    await copyPasteQuestion(code, tab);
    // submit the code  -> button click n-> easy -> 
    await submitCode();

}
fn();
// keyboard ,mouse ,scroll
async function waitAndClickTopic(name, tab) {
    await tab.waitForSelector(".topics-list", { visible: true });
    // let elems = await tab.$$(".topics-list .topic-card a"); -> document.querySelectorAll
    // let elems = await tab.$(".topics-list .topic-card a"); 
    // console.log(elems.length);
    await tab.evaluate(findAndClick, name);
    // console.log(idx);
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


}

async function waitAndClickQuestion(name, tab) {
    await tab.waitForSelector(".challenges-list", { visible: true });
    // let elems = await tab.$$(".topics-list .topic-card a"); -> document.querySelectorAll
    // text get match and click
    // let elems = await tab.$(".topics-list .topic-card a"); 
    // console.log(elems.length);
    let questions = await tab.evaluate(findAndClick, name);
    console.log(questions);
    // console.log(idx);
    function findAndClick(name) {
        let allQuestions = document.querySelectorAll(".challenges-list .challengecard-title");
        // return idx
        let idx;
        let textContent = []
        for (idx = 0; idx < allQuestions.length; idx++) {
            let cTopic = allQuestions[idx].textContent.trim();
            textContent.push(cTopic);
            // console.log(cTopic);
            if (cTopic.includes(name.trim())) {
                break;
            }
        }
        //document  -> elem 
        // alltopics[idx].click();
        // return textContent;
        allQuestions[idx].click();
    }
}

async function copyPasteQuestion(code, tab) {
     await tab.waitForSelector('input[type="checkbox"]', { visible: true });
     await tab.click('input[type="checkbox"]');
     await tab.waitForSelector("textarea[id='input-1']",{visible: true});
     await tab.type("textarea[id='input-1']",code );


}

async function submitCode() {

}



