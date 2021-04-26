let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
let path = require("path");
function extractRepoLinks(url) {
    request(url, cb);
}
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractdata(html);
    }
}

function dirCreater(src) {
    if (fs.existsSync(src) == false) {
        fs.mkdirSync(src);
    }
}

function createfile(filePath) {
    if (fs.existsSync(filePath) == false) {
        fs.openSync(filePath, "w");
    }
}
function extractdata(html) {
    let selTool = cheerio.load(html);
    let topicElementArr = selTool("h1");
    let topicName = selTool(topicElementArr[0]).text().trim().split("\n")[0];
    let pathofFolder = path.join(__dirname, topicName);
    dirCreater(pathofFolder);
    let reposLinkArr = selTool("h1.f3.color-text-secondary.text-normal.lh-condensed");
    for (let i = 0; i < 8; i++) {
        let aArr = selTool(reposLinkArr[i]).find("a");
        let repoLink = selTool(aArr[1]).attr("href");
        let fileName = repoLink.split("/").pop();
        let filePath = path.join(pathofFolder, fileName + ".json");
        createfile(filePath);
        let issuePageLink = "https://github.com" + repoLink + "/issues";
        getIssuesdata(issuePageLink);
    }
    console.log("`````````````````````````````````");
}
function getIssuesdata(url) {
    request(url, IssuePageCb);

}
function IssuePageCb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractIssues(html)
    }
}
function extractIssues(html) {
    let selTool = cheerio.load(html);
    let arr = [];
    let issuesAnchorArr = selTool(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open");
    for (let i = 0; i < issuesAnchorArr.length; i++) {
        let link = selTool(issuesAnchorArr[i]).attr("href");
        let issueName = selTool(issuesAnchorArr[i]).text();
        let issueobj = {
            Link: "https://github.com" + link,
            IssueName: issueName
        }
        arr.push(issueobj);
    }
    console.table(arr);
}
module.exports = {
    extractRepoLinks: extractRepoLinks
}