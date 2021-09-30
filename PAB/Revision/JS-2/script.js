
function outer() {
    let a = 10;
    console.log("Inside outer");
    return function inner(b) {

        console.log("product is ", a * b);
    }
}
// // outer fn is exceuted and removed from js stack 
// let InnerFnRef = outer();
// console.log("Between");
// // /inner function has access to all the variables 
// // on the outer function
// InnerFnRef(20);
// 3,3,3
// function fn() {
//     let nArr = [];
//     for (var i = 0; i < 3; i++) {
//         nArr.push(function () {
//             console.log(i);
//         })
//     }
//     return nArr;
// }
// // bind solution 
function fn() {
    let nArr = [];
    for (var i = 0; i < 3; i++) {
        var newFn = (function (varName) {
            // wrap -> primitive -> object form 
            // console.log("varName", varName)
            console.log(varName)
        }).bind(null, i);
        nArr.push(newFn);
    }
    return nArr;
}
// // IFEE solution
// function fn() {
//     let nArr = [];
//     for (var i = 0; i < 3; i++) {
//       let rInnerFn =
//        (function () {
//             // wrap -> primitive -> object form 
//             var j = i;
//             return function () {
//                 console.log(j);
//             }
//         })()
//         nArr.push(rInnerFn);
//     }
//     return nArr;
// }
// // let solution -> in the
// //  case of let we get value because of block scope
function fn() {
    let nArr = [];
    let i = 0;
    for (; i < 3; i++) {
        nArr.push(function () {
            // wrap -> primitive -> object form 
            console.log(i);
        });
    }
    return nArr;
}
let nArr = fn();
nArr[0]();
nArr[1]();
nArr[2]();
// Browser ->
//  global -> global object
//  of enviornment (Browser -> window, node-> global)
// script -> these are the  variables that are not inside any function
// closure -> outer function that is removed from the stack but 
// the varibales are in the closure of inner fn
// local -> varibales or fn inside a function 
// block -> let wale variables 


// function fn() {
//     console.log(this);
// }
// fn();
// let boundFn = fn.bind(2);
// boundFn();
// closure 
// bind,IIFEE, let 
for (var i = 0; i < 3; i++) {
    let Bfn = (function log(i) {
        console.log(i); // What is logged?
    }).bind(null, i)
    setTimeout(Bfn, 1000);
}
// setTimeout,
// setInterval,clearInterval ,console.log()-> enviornment
// console.log(global);