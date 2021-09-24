// import 
// require -> path of the the file from 
// where you want to import fxns or variables
let libExportObj = require("./lib");
console.log("I am client file ");
console.log(libExportObj.varName);
console.log(libExportObj.fxn());