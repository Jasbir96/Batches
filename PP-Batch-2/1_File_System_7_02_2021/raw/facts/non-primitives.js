// functions arrays objects

// // function def 
function fn(param) {
    console.log("Hello from fn");
    console.log("parameter was ", param);
    let rVal = Math.random() > 0.5 ? false : "very good";
    // return rVal;
    // return undefined
}
// // function invocation
// let rVal=fn("Hello");
// console.log("returned value is ",rVal);
// fn(null);
// fn(["Hello", "Hi", "where"]);
// arrays
// array -> array is a collection of homogeneous data types
// array -> array is a collection of anything
let arr=[];
let arr;
arr = [
    1,
    1.1,
    "string",
    'a char string',
    true,
    null,
    function sayHi() {
        console.log("fn inside sayHi");
        return "returned from array";
    },
    [1, 2, 3, 4, 5, 6]
]
// // loop 
// for (let i = 0; i < arr.length; i++) {
//     console.log("idx :", i, " value :", arr[i]);
// }
// // get 
// console.log("value at index 3", arr[3]);
// console.log("value", arr[arr.length - 1][2]);
// console.log("fn is", arr[6]);
// console.log("fn is", arr[6]());

// push-> addLast ,pop-> removeLast
// unshift-> addFirst, shift-> removeFirst
// slice-> start -> end (exclusive)
// let slicedArr = arr.slice(2, 4);
// console.log("slicedArr",slicedArr);
// console.log("Full Arr",arr);
// console.log("````````````````````````````````");
// // splice->remove (index, delete count)
// let removedElemeArr=arr.splice(4,2);
// console.log("removedElems",removedElemeArr);
// console.log("final arr",arr);
// split
let str = "Hello Hi How are you";
let strArr = str.split(" ");
console.log(strArr);
let joinedStr = strArr.join("+");
console.log(joinedStr);
for (let key in arr) {
    console.log("key :", key, "||value :", arr[key]);

}