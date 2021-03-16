// npm -> play store
let request = require("request");
let cheerio = require("cheerio");
let repoPageObj = require("./extractRepoList");
// console.log("before");
// async function
request("https://github.com/topics", cb);
// response is superset -> body
function cb(error, response, html) {
  if (error) {
    console.log(error);
  } else {
    //  console.log(html);
    extractTopics(html);
  }
}
function extractTopics(html) {
  let selTool = cheerio.load(html);
  let topicBox = selTool
  (".container-lg.p-responsive.mt-6 ul li a");
  for (let i = 0; i < topicBox.length; i++) {
    // let topicName = selTool(topicBox[i]).text();
    let link = selTool(topicBox[i]).attr("href");
    // console.log(topicName+" "+link);
    // topicName = topicName.trim().split("\n")[0];
    let completeUrl = "https://github.com" + link;
    repoPageObj.extractRepoLinks(completeUrl);

  }
}

//
// console.log("After");