let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
let request = require("request");
let cheerio = require("cheerio");
let scoreCardObj=require("./scoreCard")
// myTeamName	name	venue	date	opponentTeamName	result	runs	balls	fours	sixes	sr
request(url, cb);
function cb(error, response, html) {

    if (error) {
        console.log(error); // Print the error if one occurred
    } else if (response.statusCode == 404) {
        console.log("Page Not Found")
    }
    else {
        // console.log(html); // Print the HTML for the request made 
        dataExtracter(html);
    }
}
function dataExtracter(html) {
    let searchTool = cheerio.load(html);
    let anchorrep = searchTool('a[data-hover="View All Results"]');
    let link = anchorrep.attr("href");
    // console.log("link",link);
    let fullAllmatchPageLink
        = `https://www.espncricinfo.com${link}`;
    console.log(fullAllmatchPageLink);
    //  go to all match Page
    request(fullAllmatchPageLink, allMatchPageCb);
}
function allMatchPageCb(error, response, html) {
    if (error) {
        console.log(error); // Print the error if one occurred
    } else if (response.statusCode == 404) {
        console.log("Page Not Found")
    }
    else {
        // console.log(html); // Print the HTML for the request made 
        getAllScoreCardLink(html);
    }
}
function getAllScoreCardLink(html) {
    console.log("```````````````````````");
    let searchTool = cheerio.load(html);
    let scorecardsArr = searchTool("a[data-hover='Scorecard']");
    for (let i = 0; i < scorecardsArr.length; i++) {
        let link = searchTool(scorecardsArr[i]).attr("href");
        let fullAllmatchPageLink= `https://www.espncricinfo.com${link}`;
        console.log(fullAllmatchPageLink);
        scoreCardObj.processSinglematch(fullAllmatchPageLink)

    }
    console.log("`````````````````");
}