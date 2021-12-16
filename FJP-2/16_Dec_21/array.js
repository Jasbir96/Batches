// not defined size
let array = [10,20,30,50,60];
// print
console.log(array);
console.log("````````````````````````````````````````````")
// loop
// length 
console.log(array.length);
// // traverse 
// for (let i = 0; i < array.length; i++) {
//     // get value
//     console.log(array[i]);
// }
// // removeLast
array.pop();
// // removeFirst
array.shift();
// // addLast
array.push(10);
// // addFirst
array.unshift(20);
// console.log(array);
// part of that array -> 
// first parameter is starting idx
// second parameter is ending idx
// start,end-1
let copyofPartOfThatArray=array.slice(1,3);
console.log("slicedArray",copyofPartOfThatArray);
// console.log(array);
// first param is -> starting idx 
// second param -> delete count
let splicedArray = array.splice(2, 2);
console.log("splicedArray",splicedArray);
console.log("``````````````")
console.log(array);