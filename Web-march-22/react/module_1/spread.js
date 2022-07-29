let arr = [1, 2, 3, 4];
// address copy 
let arr2 = arr;
// arr.push(10);
// console.log("arr2", arr2);

// you want to copy the values
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
}
// spreading an array -> values of arr are copied to spreadArray 
let spreadArry = [...arr];
arr.push(10);
console.log("newArr", newArr);
console.log("arr", arr);