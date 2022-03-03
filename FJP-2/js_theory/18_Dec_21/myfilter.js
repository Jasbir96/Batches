Array.prototype.myFilter = function (test) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (test(this[i]) == true) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}
let arr = [2, 3, 5, 6, 7, 8];
function checkOdd(num) {
    return num % 2 == 1;
}
let filteredArray = arr.myFilter(checkOdd);
console.log(filteredArray);