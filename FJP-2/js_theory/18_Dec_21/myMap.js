Array.prototype.myMap=function( cb) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        let ans = cb(this[i]);
        newArray.push(ans);
    }
    return newArray;
}
let arr = [5, 7, 19, 12, 13, 14];

function squarer(x) {
    return x * x;
}
function cuber(num) {
    return num * num * num;
}
function evenTest(number) {
    return number % 2 == 0;
}
// map implement -> library implementation
// function as an argument,array
// return eke new function 

let newArray = arr.myMap(squarer);
console.log(newArray);
let cubeArray = arr.myMap(cuber);
console.log(cubeArray);
let resultArray = arr.myMap(evenTest);
console.log(resultArray);