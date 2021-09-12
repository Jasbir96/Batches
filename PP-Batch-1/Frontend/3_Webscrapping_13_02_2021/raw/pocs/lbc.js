//https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary"
let request = require("request");
let cheerio = require("cheerio");
console.log("Before");
request(url, cb);
function cb(error, response, html) {
    if (error) {
        console.log(error)
    } else {
        // console.log(html);
        extractHtml(html);
    }
}
function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let allCommentaries = 
    selectorTool(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");
    console.log(allCommentaries.length);
    // rule -> index , cheerioselector
  let lastbComment=  selectorTool(allCommentaries[2]).text();
  console.log(lastbComment);

    // selectorTool
}
console.log("after");