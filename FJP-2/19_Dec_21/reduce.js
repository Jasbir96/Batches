
let arr = [20, 2, 3, 4, 5];
function sum(storage, elem) {
    return storage + elem;
}
function product(storage, elem) {
    console.log("storage", storage, "elem", elem)
    return storage * elem;
}
// 1.case -> without initial value of storage-> storage =arr[0];
// examples
// let finalProduct = arr.reduce(product);
// console.log(finalProduct);
// let finalSum = arr.reduce(sum);
// console.log(finalSum);
// 2. cases -> provided initial value storage = that provided value;
let finalProduct = arr.reduce(product, 10);
console.log(finalProduct);