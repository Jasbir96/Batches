
// 1. npm i request -> npm 
const request = require('request');
let url = 'http://www.google.com';

// request working-> 
// 1. request to the given url;
// 2.  response -> request function -> cb call -> data put 

request(url, cb);

// error ->if there is any error while executing the request 
// response -> header + body 
// body -> html

function cb(error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
}