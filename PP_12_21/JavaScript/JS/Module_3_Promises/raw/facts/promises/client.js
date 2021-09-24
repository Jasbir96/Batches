// lib -> analyze data
let libObj = require("./lib");
let amount = 100;
let priceOfProd = 20;
// code execution 
libObj.analyzedata("TV", cb);
function cb() {
    // credit card payment 
    amount = amount - priceOfProd;
    console.log(amount);
}
let promiseP = libObj.promisifiedAnalyzedata("TV");
promiseP.then(cb);