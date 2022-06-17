// browser control
// controls a headless browser -> browser that is by default not visible 

// npm i puppeteer
const puppeteer = require("puppeteer");
// nearly every function of puppeteer returns a promise
async function fn() {
    const browserRepresentativeObj = await puppeteer.launch({
        headless: false
    });
    //   new  tab opnne  
    const tab = await browserRepresentativeObj.newPage();
    // to go google's home page 
    await tab.goto("https://www.google.com");
    // type 
    await tab.type("input[type='text']", "pepcoding", { delay: 200 });
    // /to press a specific key
    await tab.keyboard.press("Enter");
}
fn();


// keyboard ,mouse ,scroll


