// on single level values are copied
// ... => Spread operator
// value extract
// let arr =[1,2,3,4,5,6];
// console.log(...arr);

let arr = [{ name: "Jasbir" }, { name: "Steve" }];
let arr1 = [...arr];
arr[1].name = "Rogers";
console.log(arr1);
console.log(arr);
// arr1.pop();
// console.log("arr", arr);
// console.log("arr1 ", arr1);
// let arr1 = [1, 2, 3, 4];
// let arr2 = [6, 7, 8]
// concatenate these 2 arrays
// [1,2,3,4,5,6,7,8]
// new array 

// let narr = [...arr1, 5, ...arr2];


