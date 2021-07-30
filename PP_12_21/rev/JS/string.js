let a = 10
let singleQuotesString = 'I am a single quotes string ' + a;
let doubleQuotesString = "I am a double quotes string " + a;
// advantage -> multiple line string create 
let templateString = `I am a  template string ${a}`;
// let length = templateString.length;
// let substr = templateString.substring(2, 4);
// console.log(length);
// console.log(substr);
// let newChar = templateString.charAt(12).toUpperCase();
// console.log(newChar);
// substring -> starting idx , end-1
// substr = templateString.slice(2, 4);
// console.log(substr);
// console.log(singleQuotesString);
// console.log(doubleQuotesString);
console.log(templateString);
// delimiter -> diffrentiater 
let arrString = templateString.split(" ");
console.log(arrString);
// delimiter -> join 
let outputStr = arrString.join("$");
console.log(outputStr);
// ["I'm", "a", "little", "tea", "pot"]
// arr[2] = "L" + "ittle"