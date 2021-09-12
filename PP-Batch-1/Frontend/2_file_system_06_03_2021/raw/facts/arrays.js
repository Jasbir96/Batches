// Java ->array is a collection of homoegneous data types
// Java ->array is a collection of anything
// there no array-> array emulated
function sayHi() {
    console.log("I am outer sayHi");
}
let arr = [
    1,
    1.1,
    "string",
    null,
    true,
    {
        name: "jasbir",
        lastname: "singh"
    },
    [1, 2, 3, 4, 5, 6],
    function sayHi() {
        console.log("Hello from sayHi");
        return "Hello";
    }
];

// get 
// console.log(arr);
// console.log("val at idx 3 ", arr[3]);
// let obj=arr[5];
console.log("val at idx 5 ", arr[5].name);
// console.log("val at idx 7 ",arr[7]());
// sayHi();
// loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(i, " : ", arr[i]);
// }
// update -> arr[5]="value";

// for(let key in arr){
//     console.log("key :", key, "|value :", arr[key]);
// }
// arr[95]="some val";
// console.log("at index 45", arr[45]);

// arr["invalid"]="some val";
// arr["invalid2"]="some val";
// arr["invalid3"]="some val";
// arr["invalid4"]="some val";
// arr["invalid5"]="some val";
// arr["invalid6"]="some val";
// arr["invalid7"]="some val";
// // arr[15]="15the val";
// console.log(arr);
// console.log(arr.length);
// const a=10;
// console.log(arr);
console.log("````````````````````````````");
// addLast -> push,
// removeLast-> pop
// arr.pop();
// console.log(arr);
// add first -> unshift
// removeFirst-> shift
// gives copy of sliced arr;
// let sliced = arr.slice(2, 4);
// console.log("sliced", sliced)
// console.log("actual", arr);
// remove entries from array
// let removedEntries = arr.splice(2, 2);
// console.log(arr);
// console.log(removedEntries);
let string = "This a string to be searched";
let strArr = string.split(" ");
let joinedstr = strArr.join("+");
console.log(strArr);
console.log(joinedstr);