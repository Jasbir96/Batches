// hof on arrays 
// it takes a function and return a new filtered array-> 
// test function -> returns true /false -> 

// filter function calls the given function on every element of that array 
// that function returns ->
// true then you will add that element to the new array 
// false then you will not add that element to the new array 
let arr = [2, 3, 5, 6, 7, 8];
function checkOdd(num) {
    return num % 2 == 1;
}
let newArray = arr.filter(checkOdd);
// console.log(newArray);
function myFilter(arr, test) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (test(arr[i]) == true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
let newArr = myFilter(arr, checkOdd);
console.log(newArr);