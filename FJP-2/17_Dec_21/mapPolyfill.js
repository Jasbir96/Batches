let arr = [5, 7, 19, 12, 13, 14];
function squarer(x) {
    return x * x;
}
function cuber(num){
    return num* num * num;
}
function evenTest(number) {
    return number % 2 == 0;
}
// map implement -> library implementation
// function as an argument,array
// return eke new function 
function myMap(arr, cb) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let ans = cb(arr[i]);
        newArray.push(ans);
    }
    return newArray;
}
let newArray=myMap(arr, squarer);
console.log(newArray);
let cubeArray=myMap(arr, cuber);
console.log(cubeArray);
let resultArray=myMap(arr, evenTest);
console.log(resultArray);