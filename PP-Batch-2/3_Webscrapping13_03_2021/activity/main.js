let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
let path = require("path");
let url = "https://github.com/topics";
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        // console.log(html);
        extractData(html);
    }
}
function extractData(html) {
    let selTool = cheerio.load(html);
    let anchors = selTool
        (".no-underline.d-flex.flex-column.flex-justify-center");
    for (let i = 0; i < anchors.length; i++) {
        let link = selTool(anchors[i]).attr("href");
        // console.log(link);
        let fullLink = "https://github.com" + link;
        extractRepodata(fullLink)
    }
}
function extractRepodata(fullLink) {
    request(fullLink, cb);
    function cb(err, response, html) {
        if (err) {
            console.log(err);
        } else {
            getRepoLinks(html);
        }
    }
}
function getRepoLinks(html) {
    let selTool = cheerio.load(html);
    let topicNameElem = selTool(".h1-mktg");
    let repolinks = selTool("a.text-bold");
    console.log(topicNameElem.text());
    let topicName = topicNameElem.text().trim();
    dirCreater(topicName);
    for (let i = 0; i < 8; i++) {
        let repoPageLink = selTool(repolinks[i]).attr("href");
        let repoName = repoPageLink.split("/").pop();
        repoName = repoName.trim();
        console.log(repoName);
        createFile(repoName, topicName);
        console.log(repoPageLink)
    }
    console.log("`````````````````````````");
}
function dirCreater(topicName) {
    let pathOfFolder = path.join(__dirname, topicName);
    if (fs.existsSync(pathOfFolder) == false) {
        fs.mkdirSync(pathOfFolder);
    }
}

function createFile(repoName, topicName) {
    let pathofFile = path.join(__dirname, topicName, repoName + ".json");
    if (fs.existsSync(pathofFile) == false) {
        let createStream = fs.createWriteStream(pathofFile);
        createStream.end();
    }
}