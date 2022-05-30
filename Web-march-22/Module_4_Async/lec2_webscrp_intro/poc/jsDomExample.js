// npm i jsdom 
const fs = require("fs");
let htmlContent = fs.readFileSync("sample.html", "utf-8");

const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM; // no meaning 
//1.  string form me -> html content provide
// pass to newJSDOM 
let dom = new JSDOM(htmlContent);
// 2. // no meaning 
let document = dom.window.document;

// 3. logic  -> help to get your html
// elements if you pass a selector
// css selector -> first occurence of that html element
// document.querySelector("p");
// css selector -> all the  occurences of that html element
// in the form of array of  elements
// element wala case
const allPs = document.querySelectorAll("p");
// console.log(allPs.length);
// // content ->
let firstPKacontent = allPs[0].textContent;
console.log("first PKacontent: ", firstPKacontent);
let secondPKacontent = allPs[1].textContent
console.log("second PKacontent: ", secondPKacontent);
// const allidsWalaElem = document.querySelectorAll("#unique");
// let content = allidsWalaElem[0].textContent
// console.log(content);


