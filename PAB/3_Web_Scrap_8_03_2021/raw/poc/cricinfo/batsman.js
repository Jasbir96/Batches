let request = require("request");
let cheerio = require("cheerio");
// input -> commentary page url 
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
request(url, cb)
// intial content -> scrap 
// last ball commentry
// first ball commentary 
// automation -> browser
function cb(err, response, html) {
    let chSelector = cheerio.load(html);
    let tables = chSelector(".table.batsman");
    // console.log(tables.length); 
    let hrsname = "";
    let hruns = 0;
    for (let i = 0; i < tables.length; i++) {
        // bowlersHtmlString += chSelector(tables[i]).text();
        // find function find an element inside an element
        let teamBowlers = chSelector(tables[i]).find("tr");
        console.log(teamBowlers.length);
        for (let j = 0; j < teamBowlers.length; j++) {
            // let bolHtml = chSelector(teamBowlers[j]).text();
            let eachbowlcol = chSelector(teamBowlers[j])
                .find("td");

            if (eachbowlcol.length == 8) {
                let playerName = chSelector(eachbowlcol[0])
                    .text();
                let runs = chSelector(eachbowlcol[2]).text();
                console.log(playerName, "    ", runs);
                // compare
                if (hruns<=Number(runs)) {
                        hruns=runs;
                        hrsname=playerName;
                }
            }
            // console.log(bolHtml);
            // tr -> name ,wickets column
        }
        console.log("```````````````````````````````````");
        console.log("Player ",hrsname,"with runs : ",hruns)
    }

    // console.log(bowlersHtmlString);
    // innings bowler table-> 2
    //  get bowler name wickets
    // compare the wicket get the highest wicket taker
    //  let lbc= element.text();
    //    console.log(lbc);
}
