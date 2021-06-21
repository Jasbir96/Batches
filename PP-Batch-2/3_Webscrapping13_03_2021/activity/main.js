// npm init -y
// npm install request 
// npm install cheerio
let request = require("request");
let cheerio = require("cheerio");
let PDFDocument = require('pdfkit');
let fs = require("fs");
let path = require("path");
console.log("Before");
    request("https://github.com/topics", cb);
function cb(error, response, html) {
    if (error) {
        console.log(error)
    } else {
        extractHtml(html);
    }
}
function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let topicsArr = selectorTool(".col-12.col-sm-6.col-md-4.mb-4 a");
    for (let i = 0; i < topicsArr.length; i++) {
        let link = selectorTool(topicsArr[i]).attr("href");
        let fullLink = "https://github.com" + link;
        processrepoPage(fullLink);
    }
}

function processrepoPage(fullLink) {
    request(fullLink, cb);
    function cb(err, resp, html) {
        if (err) {
            console.log(err);
        } else {
            getRepoLinks(html);
        }
    }
}
function getRepoLinks(html) {
    let selTool = cheerio.load(html);
    let topicElem = selTool(".h1-mktg");
    let topicName = topicElem.text().trim();
    dirCreater(topicName);
    let arr = selTool("a.text-bold");
    for (let i = 0; i < 8; i++) {
        let link = selTool(arr[i]).attr("href");
        // console.log(link);
        let repoName = link.split("/").pop();
        // fileCreator(topicName, fileName);
        let fullLink = "https://github.com" + link + "/issues";
        getIssuelinks(fullLink, topicName, repoName);
    }
    console.log("`````````````````````````````")
}
function getIssuelinks(fullLink, topicName, fileName) {
    console.log(fullLink)
    request(fullLink, cb);
    function cb(err, response, html) {
        if (err) {
            console.log(err);
        } else {
            extractIssues(html, topicName, fileName);
        }
    }
}
function extractIssues(html, topicName, fileName) {
    let selTool = cheerio.load(html);
    let anchorsArr = selTool("a[data-hovercard-type='issue']");
    let arr = [];
    for (let i = 0; i < anchorsArr.length; i++) {
        let name = selTool(anchorsArr[i]).text();
        let link = selTool(anchorsArr[i]).attr("href");
        arr.push({
            Name: name,
            Link: "https://github.com" + link
        })
    }
    //  array -> pdf file
    let filePath = path.join(__dirname, topicName, fileName + ".pdf");
    let pdfDoc = new PDFDocument;
    pdfDoc.pipe(fs.createWriteStream(filePath));
    pdfDoc.text(JSON.stringify(arr));
    pdfDoc.end();
    // fs.writeFileSync(filePath, JSON.stringify(arr));
    // console.table(arr);
}
function dirCreater(topicName) {
    let folderPath = path.join(__dirname, topicName);
    if (fs.existsSync(folderPath) == false) {
        fs.mkdirSync(folderPath);
    }
}
function fileCreator(topicName, fileName) {
    let filePath = path.join(__dirname, topicName, fileName + ".json");
    if (fs.existsSync(filePath) == false) {
        fs.openSync(filePath, "w");
    }

}
console.log("after");