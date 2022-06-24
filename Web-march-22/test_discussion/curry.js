// function fn() {
//     return function inner(n) {
//         console.log("hello", n);
//     }
// }
// let innerref = fn();
// innerref(0);
// fn()(0)




// function fn() {
//     let count = 0;
//     count++;
//     return function inner(param) {
//         if (param == 0) {
//             console.log(count);
//         } else {
//             count++;
//             return inner;
//         }
//     }
// }


// fn()(0);
// fn()()(0)
// fn()()()(0) 
// fn()()()()()(0) 



function fn(x, y) {
    if (y == undefined) {
        return function prod(y) {
            return x * y;
        }
    } else {
        return x * y;
    }
}
let ans = fn(4, 5);
console.log(ans);
ans = fn(4)(5);
console.log(ans);