//1.  function definition
// function fn() {
//     console.log("I am function definition");
// }
// fn();
// variable assignement
// let a = [10, 20, 30];
// let b = a;
// console.log(b);

// 2. function expression
let secondName = function originalName() {
    console.log("I am expression");
}
// secondName();
// originalName();

console.log("Before");






// //3.
//  IIFEE-> immediately Invoked function expression
(function drawBoard() {
    console.log("board is immediately drawn");
})();
console.log("After");
// // 4. Anonymous function 
(function () {
    console.log("board is immediately drawn");
})();
// console.log("After");

let secondName = function () {
    console.log("I am expression");
}
// secondName();
