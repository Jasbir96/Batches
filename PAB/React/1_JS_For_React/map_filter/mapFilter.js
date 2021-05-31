let arr = [1, 2, 3, 4, 5, 6, 7];
//pure higher order function
const squarer = num => num * num;
function quber(num) {
    return num * num * num;
}
const filterOdd = (num) => {
    return num % 2 == 1;
}
// mao -> calls it's cb fn on every 
// elem of the array and make a new array that has 
// valued that returend by the cb function
let allElemsArr = arr.map(squarer);
console.log("squared Arr", allElemsArr);
allElemsArr = arr.map(quber);
console.log("cubed Arr", allElemsArr);
console.log("`````````````````````````");
// filter -> loops on the whole array  an call it's test cb on every
// element and filter out the elem on the basis of true or false
allElemsArr = arr.filter(filterOdd);
console.log("odd Arr", allElemsArr);
console.log("`````````````````````````");

console.log(arr);