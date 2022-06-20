
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
        slowMo: 100
    });
    //new  tab open  
    const tab = await browserRepresentativeObj.newPage();
    // // to go google's home page 
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("input[type='text']", credObj.email, { delay: 20 });
    await tab.type("input[type='password']", credObj.password, { delay: 20 });
    await tab.keyboard.press("Enter");

    // choose a topic  -> ?? Java
    // select questions -> ??  Java Stdin and Stdout I
    // write the code ->  -> code read type   
    // submit the code  -> button click

}
fn();
// keyboard ,mouse ,scroll





