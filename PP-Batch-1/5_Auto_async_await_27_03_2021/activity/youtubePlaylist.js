let puppeteer = require("puppeteer");
let fs = require("fs");
// no of videos 
// views 
// watch time -> get 
// list of videos -> [name, duration]
// initial page data get 
// handle -> loader

console.log("Before");
// let arr=document.querySelectorAll("#stats  .style-scope.ytd-playlist-sidebar-primary-info-renderer")
// let newarr=[]
// newarr.push(arr[0].innerText,arr[1].innerText)
(async function () {
    try {
        let browserInstance = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });
        let newPage = await browserInstance.newPage();
        await newPage.goto("https://www.youtube.com/playlist?list=PLRBp0Fe2GpgnIh0AiYKh7o7HnYAej-5ph");
        // evaluate
       

    } catch (err) {
        console.log(err);
    }

})();
