// npm -> play store
let request = require("request");
let cheerio = require("cheerio");

let singlemathFileObj = require("./singleMatch");
// console.log("before");
// async function
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard
// /series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results", cb);
// response is superset -> body
function cb(error, response, html) {
    // console.log(response);
    // console.log("error",error);
    let cheerioSelector = cheerio.load(html);
    // element select 
    let matchcard = cheerioSelector(".col-md-8.col-16");
    console.log(matchcard.length);
    for (let i = 0; i < matchcard.length; i++) {
        // sublock anchors
        let allanchorsofAMatch = cheerioSelector(matchcard[i])
        .find(".match-cta-container .btn.btn-sm.btn-outline-dark.match-cta");
        let link = cheerioSelector(allanchorsofAMatch[2]).attr("href");
        let fullLink = "https://www.espncricinfo.com" + link;
        // console.log(fullLink);
        singlemathFileObj.spFn(fullLink);
        
    }
    //   let AllAnchors = cheerioSelector('.match-cta-container .btn.btn-sm.btn-outline-dark.match-cta ');
    // console.log(element.length);
    // console.log(element.html());
    // html 
    // console.log(element.html());
    // text
    // console.log(element.text());
}



//
// console.log("After");