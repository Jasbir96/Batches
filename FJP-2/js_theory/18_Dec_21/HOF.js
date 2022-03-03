// for each -> it does a task for every elem of the array
const array1 = ['a', 'b', 'c'];
function printElem(element) {
    console.log(element)
}
array1.forEach(printElem);

// ************every******

// if every element satifies the condition given by the smaller function
let array2 = [1, 30, 39, 29, 10, 13,40];
function isBelowThreshold(currentValue) {
    return currentValue < 40;
}
console.log(array2.every(isBelowThreshold));

// //******************** * some**************************
// if only one of th elem satisifies the condition
const array = [1, 2, 3, 4, 5];
// checks whether an element is even
function even(element) {
    return element % 2 == 0;
}
console.log(array.some(even));

// //*********************/find Idx**************************
const array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
    return element > 13;
}
console.log(array1.findIndex(isLargeNumber));