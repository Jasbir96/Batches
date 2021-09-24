// empty array
// let arr = [];
// console.log(arr);
// console.log(arr);
// loops
// array does not have fixed size;
let arr = [1, 3, 4, 5, 6];
// console.log("length", arr.length);
// for (let i = 0; i < arr.length; i++) {
//     console.log(i, " : ", arr[i]);
// }
// push pop  -> add/remove Last
// console.log("before pop", arr);
// arr.pop();
// console.log("after pop", arr);
// arr.push(18)
// console.log("after push ", arr);
// unshift shift -> add/remove First
// console.log("before shift ", arr);
// arr.shift();
// console.log("after shift ", arr);
// arr.unshift(18);
// console.log("after unshift ", arr);
// slice  -> gives a copy of a subarray
// starting Idx, endingIdx-1
// let slicedArr = arr.slice(1, 4);
// let slicedArr = arr.slice(1);
// console.log("slicedArr", slicedArr);
// console.log("arr",arr);
// splice  -> deletes any number 
// of elements from an index
// // console.log("arr",arr);
// delete count
let removedElems = arr.splice(2, 2);
console.log("removedElems",removedElems);
console.log("arr",arr);
// indexOf -> idx for an element in an array
//  else -1 
// let idx = arr.indexOf(5);
// console.log("idx",idx);
// includes-> it check if 
let isPresent = arr.includes(5);
// an element is inside an array