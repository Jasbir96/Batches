// npm install puppeteer
let puppeteer = require("puppeteer");
// browser launch
let browserWillBeLaunchedPromise = puppeteer.launch({
    headless: false
})
// callback hell -> Nesting
// browserWillBeLaunchedPromise
//     .then(function (browserInstance) {
//         // new tab
//         let newPagePromise = browserInstance.newPage();
//         newPagePromise
//             .then(function (newPage) {
//                 console.log("new tab opened");
//                 // go to pepcoding
//                 let pageWillBeopenedPromise = newPage.goto("https://www.pepcoding.com");
//                 pageWillBeopenedPromise
//                     .then(function () {
//                         console.log("page is opened");
//                     })
//             })
//     })
browserWillBeLaunchedPromise
    .then(function (browserInstance) {
        // new tab
        let newPagePromise = browserInstance.newPage();
        return newPagePromise;
    }).then(function (newPage) {
        console.log("new tab opened");
        // go to pepcoding
        let pageWillBeopenedPromise = newPage.goto("https://www.pepcoding.com");
        return pageWillBeopenedPromise;
    }).then(function () {
        console.log("page is opened");
    }).catch(function (err) {
        console.log(err);
    })