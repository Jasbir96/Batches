// functions,arrays,objects
// function definition
// function sayHi(param) {
//     // console.log("Hello from fn ");
//     console.log("Param is ", param);
//     let rVal = Math.random() > 0.5 ? "good" : false;
//     // return rVal;
//     // return 10;
// }
// function invoke
sayHi(10);
sayHi("sadjfbjds");
let rVal = sayHi([1, 2, 2, 3, 4, 5]);
// console.log("function send " + rVal);

// arrays
// arrays-> array is a collection of homogeneous data types
// array -> array is a collection of any valid js type
// array declare
// let arr=[];
let arr = [
    1,
    1.1,
    "string",
    'single quotes',
    null,
    true,
    [1, 2, 3, 7, 4, 5,],
    function inside(param) {
        console.log("Hello from an array");
        console.log("I recieved ", param)
        return "some value";
    },
    {
        name: "Jasbir",
        lastName: "Singh"
    }
]
// console.log(arr);
console.log("val at index 5",arr[5]);
console.log("val at index 6",arr[6][3]);
console.log("last val",arr[arr.length-1]);
console.log("last val",arr[arr.length-1].name);
// function
console.log(arr[arr.length - 2]);
console.log("returned value", arr[arr.length - 2]("hola"));

// console.log(arr.length);
// console.log(arr[arr.length]);

// push-> add Last ,pop-> remove last
console.log(arr);
console.log("````````````````````````````````````````");
arr.push("last val");
// unshift-> add First,shift-> remove First
arr.shift();
console.log(arr);
// slice-> starting indx,end indx
// let slicedArr = arr.slice(2, 5);
// console.log("sliced Arr", slicedArr);
// console.log("array", arr);
// // splice -> starting index,delete count
// console.log("```````````````````````");
// let removedElemArr = arr.splice(2, 3);
// console.log("removed elemArr", removedElemArr)
// console.log("arr", arr);
// loop
for (let i = 0; i < arr.length; i++) {
    console.log("index ", i, "value ", arr[i]);
}
