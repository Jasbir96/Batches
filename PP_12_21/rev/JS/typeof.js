// variable type value stored hai
// let a = 10;
// console.log(typeof a);
// a = "strdmjvbhfds";
// console.log(typeof a);
// a = true;
// console.log(typeof a);
// a = null;
// console.log(typeof null);
// input -> manage 
// to convert input string to array 
// let str = "[1,2,3,4,5]";
// console.log(str, typeof str);
// let arr = JSON.parse(str);
// console.log(arr, Array.isArray(arr));

let str = `[15
1
5
10
15
22
33
33
33
33
33
40
42
55
66
77
33]`;
let strArr = str.split("\n");
console.log("strArr", strArr)
let size = Number(strArr[0])
let remainiAr = strArr.slice(1);
let reqArr = remainiAr.slice(0, size);
let elemToFind = strArr[strArr.length - 1];
console.log(reqArr);
console.log(elemToFind)

