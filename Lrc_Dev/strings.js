let val = 10;


let singleQuotes = ' Hello I am singleQuote '+val;
let doubleQuotes = "Hello I am doubleQuotes "+val;
let templateStrings = `Hello I am doubleQuotes ${val}`;
console.log(singleQuotes);
console.log(doubleQuotes);
console.log(templateStrings)

// split 
let arrayOfString=singleQuotes.split("e");
console.log(arrayOfString);
let finalString=arrayOfString.join("$");
console.log(finalString);
