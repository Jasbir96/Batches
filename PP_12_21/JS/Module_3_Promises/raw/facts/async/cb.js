// let arr = [1, 2, 3, 4, 5];
// // definition
// function smaller(x) {
//     return x * x;
// }
// function cuber(a) {
//     return a * a * a;
// }
// // fuction can passed as as an argumnet 
// // implementation map js -> pre-existing -> arr map  
// // it will apply the cb fn to all the elements of an array and return the new Arr
function bigger(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let sqVal = cb(arr[i])
        newArr.push(sqVal);
    }
    return newArr;
}
// // sqArr will contain the variable returned from bigger function 
// let sqArr = bigger(arr, smaller);
// console.log("arr", sqArr);
// let qbArr = bigger(arr, cuber);
// console.log("arr", qbArr);