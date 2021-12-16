let array = [1, 3, 5, 6, 7, 8];
function oddTest(number) {
    return number % 2 == 1;
}
function evenTest(number) {
    return number % 2 == 0;
}
// pass -> new Array allow
// jo fail -> new array me not allowed
let oddArray=array.filter(oddTest);
let evenArray=array.filter(evenTest);
console.log(oddArray);
console.log(evenArray);
console.log("array",array);