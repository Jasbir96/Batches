function printArrFN() {
    let arr = [];
    for (var i = 0; i < 3; i++) {
        // 2
        // let smallArr = [1, 2, 3, 4];
        // 3
        function printI() {
            console.log(i)
        }
        // adding reference to the array
        arr.push(printI);
    }
    return arr;
}
let arrFn = printArrFN();
// 4
// console.log("arrFn0", arrFn[0]);
// console.log("arrFn1", arrFn[1]);
// console.log("arrFn2", arrFn[2]);
// arr0 pe jo fn ka address use call kar do
// 5
arrFn[0]();
arrFn[1]();
arrFn[2]();




// 1
// function print() {
//     console.log("Hello");
// }
// console.log("print",print);
// // without this call functionn will not be exceuted
// let anotherName = print
// let emptyArr = [];
// emptyArr[0] = print;
// print();
// anotherName();
// emptyArr[0]();