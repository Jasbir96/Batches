//there is no size of array ;
// declare an array
let arr = [];

// 2dArray;
// let b = [[1, 2, 3], [3, 4, 5], [4, 5, 6]]

// print
// console.log(b);

// traverse -> 
let a = [10, 20, 30, 40, 50, 60];
// for (let i = 0; i < a.length; i++) {
//     console.log(i + " : " + a[i]);
// }

// methods -> 
// // lastelem ->add/Remove
console.log("before",a);
// a.pop(); //removeLast
// a.push(10); //addLast
console.log("`````````````````````````````````");

// // firstElem-> add/Remove
// a.shift() //removeFirst
// a.unshift(20) //addFirst
// console.log("after",a);

// copied a subarray -> sidx,eidx
// let slicedArray = a.slice(1, 4);
// // orginial array remains the same
// console.log("slicedArray",slicedArray)
// console.log("array",a);

// // indexOf ->idx/-1
// let idx = a.indexOf(4);
// // includes-> true/false
// let ans = a.includes(3);
// console.log("4 is " + ans + " at " + idx);

// sidx,deletecount
let splicedArray = a.splice(3, 2);
console.log("splicedArray: " , splicedArray);
// element will be removed from original array
console.log("originalArray: " , a);







