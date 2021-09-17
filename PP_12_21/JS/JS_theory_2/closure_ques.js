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

function outer() {
    let arrFn = [];
    // local -> 3
    // let i = 0
    // 
    // block 0,block 1 ,block 2
    for (let i=0; i < 3; i++) {
        // block scope
        arrFn.push(function fn() {
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer();

arrFn[0]();
arrFn[1]();
arrFn[2]();

function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(count);
        console.log(message);
    }
    return [increment, log];
}
const arr = createIncrement();
let increment = arr[0];
let log = arr[1];
increment();
increment();
increment();
log();
// for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000);
// }