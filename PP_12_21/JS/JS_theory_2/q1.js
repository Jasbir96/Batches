// function outer() {
//     let arrFn = [];
//     for (var i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();

// arrFn[0]();
// arrFn[1]();
// arrFn[2]();
// output -> 3,3,3
// 
// solution 1
// function outer() {
//     let arrFn = [];
//     for (var i = 0; i < 3; i++) {
//         arrFn.push((function fn() {
//             console.log(i);
//         })());
//     }
//     return arrFn;
// }
// outer();
// function outer() {
//     let arrFn = [];
//     for (var i = 0; i < 3; i++) {
//         function outerfn() {
//             var j = i;
//             return function fn() {
//                 console.log(j,i);
//             }
//         }
//         arrFn.push(outerfn())
//     }
//     return arrFn;
// }
// let arrFno = outer();
// arrFno[0]();
// arrFno[1]();
// arrFno[2]();
// function outer() {
//     let arrFn = [];
//     for (let i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();

// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

