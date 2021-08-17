// object ,array
// let jsonContent = require("./file.json");
// let fs = require("fs");
// let buffer = fs.readFileSync("./file.json");
// let jsonData = JSON.parse(buffer);
// jsonData.push({
//     "name": "Chris",
//     "lastName": "rogers",
//     "age": 30,
//     "friends": [
//         "Steve",
//         "Bruce",
//         "Peter"
//     ],
//     "prop": null,
//     "prop-again": "",
//     "key": {
//         "new": "New Object"
//     }
// })
// let stringedJSON = JSON.stringify(jsonData);
// fs.writeFileSync("./file.json", stringedJSON);
// console.log("Json data", jsonData);



// falsy values 
// Boolean('')           // false
// Boolean(0)            // false     
// Boolean(-0)           // false
// Boolean(NaN)          // false
// Boolean(null)         // false
// Boolean(undefined)    // false
// Boolean(false)        // false
// // EVerything else is a truthy value
// // Any value that is not in the list is converted to true, including object, function, Array, Date, user-defined type, and so on. Symbols are truthy values. Empty object and arrays are truthy values as well:

// // When does any type converts into number (==)
// // comparison conversion
// //  number -> string -> number
// // number -> boolean -> number
// // primitive -> nonprimitive -> primitive 
// // string -> boolean-> boolean 


// flatten Object , stringify, deep copy shallow copy -> polyfill
// closures -> 
// 7.2.12Abstract Equality Comparison
// The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

// ReturnIfAbrupt(x).
// ReturnIfAbrupt(y).
// If Type(x) is the same as Type(y), then
// Return the result of performing Strict Equality Comparison x === y.
// If x is null and y is undefined, return true.
// If x is undefined and y is null, return true.
// If Type(x) is Number and Type(y) is String,
// return the result of the comparison x == ToNumber(y).
// If Type(x) is String and Type(y) is Number,
// return the result of the comparison ToNumber(x) == y.
// If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
// If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
// If Type(x) is either String, Number, or Symbol and Type(y) is Object, then
// return the result of the comparison x == ToPrimitive(y).
// If Type(x) is Object and Type(y) is either String, Number, or Symbol, then
// return the result of the comparison ToPrimitive(x) == y.
// Return false.
// 7.2.13Strict Equality Comparison
// The comparison x === y, where x and y are values, produces true or false. Such a comparison is performed as follows:

// If Type(x) is different from Type(y), return false.
// If Type(x) is Undefined, return true.
// If Type(x) is Null, return true.
// If Type(x) is Number, then
// If x is NaN, return false.
// If y is NaN, return false.
// If x is the same Number value as y, return true.
// If x is +0 and y is −0, return true.
// If x is −0 and y is +0, return true.
// Return false.
// If Type(x) is String, then
// If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true.
// Else, return false.
// If Type(x) is Boolean, then
// If x and y are both true or both false, return true.
// Else, return false.
// If x and y are the same Symbol value, return true.
// If x and y are the same Object value, return true.
// Return false.