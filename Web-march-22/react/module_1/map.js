// // map is a higher order function on an array 
// function smallFn(arrElem) {
//     return arrElem + 3;
// }
// function squareFn(arrElem) {
//     return arrElem * arrElem;
// }
// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.map(smallFn);
// console.log("newArr", newArr);
// console.log("arr", arr);
// console.log("```````````````````````````");
// newArr = arr.map(squareFn);
// console.log("newArr", newArr);

let arr = ["Hello", "Hi", "By"];
function htmlConverter(arrElem) {
    return `<h1>${arrElem}</h1>`;
}
let newArr = arr.map(htmlConverter);
console.log(newArr)
