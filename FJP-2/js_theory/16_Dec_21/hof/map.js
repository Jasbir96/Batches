// functions are available on arrays 
// it doesn't change the original array
let array = [1, 2, 3, 4, 5];
function squarer(x) {
    return x * x;
}
function cuber(num) {
    return num * num * num;
}
let squaredArray = array.map(squarer);
let cubedArray = array.map(cuber);
console.log("squaredArray", squaredArray);
console.log("cubedArray", cubedArray);
console.log(array);