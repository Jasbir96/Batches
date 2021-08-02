const axios = require("axios");
// let responsePromise = axios.get("https://www.espncricinfo.com/series/ipl-2020-21-1210595");
// console.log("line number 4", responsePromise);
responsePromise.then(function (resp) {
    // console.log(resp.data);
    console.log("Data arrived");
})
responsePromise.catch(function (err) {
    console.log(err);
})
// consume the promise
console.log("Before");
async function fn() {
    try {
        let responsePromise = axios.get("https://www.espncricinfo.com/series/ipl-2020-21-1210595");
        console.log("line number 16",responsePromise);
        let resp = await responsePromise;
        console.log("resp", );
    } catch (err) {
        console.log(err);
    }
}
fn();

console.log("After");
