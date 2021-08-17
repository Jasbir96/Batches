// function fakeFN() {
//     // arguments 
//     console.log(arguments);

//     console.log("I was executed ", "a", a, "b", b);
// }
// // Js -> function overloading is not possible 
// // fakeFN(10, 20, 30);
// // fakeFN("Hello");
// // arr.push(...items) – adds items to the end,
// // arr.pop() – extracts an item from the end,
// // arr.shift() – extracts an item from the beginning,
// // arr.unshift(...items) – adds items to the beginning,

// // **********************we don't have arrays in js*******************************

// // const a = 10;
// // int[] arr = [1,2,3,4,5];
// // arr[95] = "10";
// how can you shift a constant address in case of const??
const arr = [1, 2, 3, 4, 5];
// // arr.unshift(8);
// arr.shift();
// console.log(arr);
// why is this invalid in the case of constant 
// arr = [3, 4, 5];
// splice -> remove n number of elements starting from an index
// return an array of removed elements 
// arr.splice(idx, deleteCount);
// // slice -> returns a copy of an array
// eidx is exclusive 
// arr.slice(sidx, eidx);
// arr.indexOf, includes

// HOF-> function that accepts a function as an arguments
// or returns a function.
// forEach , map, filter, reduce , 
// sort -> every HOF returns a new array 
// doesn't mutate the old array 
// let arr = [1, 2, 3, 4, 5];
// // return undefined -> alternative to for loop
// arr.forEach(cb);
// function cb(elem) {
//     console.log("Number is", elem);
// }
// // space extra
// // let sqArr = arr.map(applyMeToEveryElemOfTheAttachedArr);
// // function applyMeToEveryElemOfTheAttachedArr(elem) {
// //     return elem * elem;
// // }
// // PolyFill any of these HOF
// let obj = {
//     "name": "jasbir",
//     lastName: "Singh",
//     age: 24
// }
// normal object  -> gives keys of object
// for (let key in obj) {
//     console.log(key, ":", obj[key]);
// }
// itreable -> string array ,return -> values
// for (let value of  arr) {
//     console.log(value);
// }