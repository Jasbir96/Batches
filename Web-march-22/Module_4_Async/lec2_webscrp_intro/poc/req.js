
// 1. npm i request -> npm 
const request = require('request');
const fs = require("fs");
let url = 'http://www.google.com';
// request working-> 
// 1. request to the given url;
// 2.  response -> request function -> cb call -> data put 
request(url, cb);
// params
// error ->if there is any error while executing the request 
// response -> header + body 
// body -> html
console.log('Before')
function cb(error, response, body) {
    if (error) {
        console.log('error:', error.message); // Print the error message
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log('body:', body); // Print the HTML for the Google homepage.
        fs.writeFileSync("index.html", body);
    }
}
console.log('After');