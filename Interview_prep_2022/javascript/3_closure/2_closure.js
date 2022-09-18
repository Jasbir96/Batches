// function printCount() {
//     let count = 1;
//     if (arguments.length == 1) {
//         console.log(count);
//         return;
//     } else {
//         return function inner() {
//             count++;
//             if (arguments.length == 1) {
//                 console.log(count);
//                 return;
//             } else {
//                 return inner;
//             }
//         }
//     }
// }
// // and -> you can't declare any varibale in global area
// printCount(0);

// printCount()(0);

// printCount()()()(0);

// printCount()()()()(0);

// arguments array -> is a inbuilt array that store all the parameters passed to our function
// Q flatten an object / serialize an object
// Q deep copy of object
// functional programming

function outer() {
    return function inner() {
        return function superInner() {

        }
    }
}
// normal
let inner = outer();
let superInner = inner();
superInner();
// shorthand
outer()()();
