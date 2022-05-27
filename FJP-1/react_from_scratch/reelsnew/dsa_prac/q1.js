const arr = [1, 2, [3, 4], 5, [6, [7, [8, [9, 10]]]]];
function flattenArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        flattenElem(arr[i], newArr);
    }
    return newArr;
}
function flattenElem(elem, newArr) {
    if (Array.isArray(elem) == false) {
        newArr.push(elem);
        return;
    }
    
    for (let i = 0; i < elem.length; i++) {
        flattenElem(elem[i], newArr);
    }
}

let flatArr = flattenArray(arr);
console.log("flatArr: ", flatArr);
// console.log(Array.isArray([3,4]));