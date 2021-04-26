// npm -> play store
let request = require("request");
let cheerio = require("cheerio");
// console.log("before");
// async function
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results
request("https://www.google.com/", cb);
// response is superset -> body
function cb(error, response, html) {
  // console.log(response);
  // console.log("error",error);
  let cheerioSelector = cheerio.load(html);
  // element select 
  let element = cheerioSelector("#SIvCob");
  // console.log(element.html());
  // html 
  // console.log(element.html());
  // text
  // console.log(element.text());
}



//
// console.log("After");