// npm i request 
let request = require("request");
// npm i cheerio 
let cheerio = require("cheerio");
let fs = require("fs");
// data extract-> cheerio  
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
console.log("Before");
request(url, cb);
function cb(error, response, html) {
    // console.error('error:', error); // Print the error if one occurred
    // console.log('body:', html); // Print the HTML for the Google homepage.
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
// insights -> You don't get all the  data initially  
function dataExtracter(html) {
    // search tool
    let searchTool = cheerio.load(html);
    // global tool
    // page -> tables -> row get 
    let bowlers = searchTool(".table.bowler tbody tr");
    // let htmlData = "";
    // for (let i = 0; i < bowlerTables.length; i++) {
    //     // html function 
    //     htmlData += searchTool(bowlerTables[i]).html();
    // }  
    // fs.writeFileSync("table.html", htmlData);
    // loop 
    // name 
    // compare -> hwt find
    let bowler = "";
    let hwt = 0;
    for (let i = 0; i < bowlers.length; i++) {
        // row -> col
        let cols = searchTool(bowlers[i]).find("td");
        let name = searchTool(cols[0]).text();
        let wickets = searchTool(cols[4]).text();
        console.log(name+" "+wickets);
        if (wickets >= hwt) {
            bowler = name;
            hwt = wickets;
        }

    }
    console.log("`````````````````````");
    console.log(bowler + " " + hwt);
    // wicket 
}
console.log("After");