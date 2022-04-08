// no main 
// top to bottom left to right
// print
console.log("Hello Pepcoders :) ");
// variable declare;
let a;
// deafult value -> undefined
// dynamically typed language(Js) ->  ye batenge ki a ek variable hai 
// // java -> statically typed lang -> ye batenge ki a ek varibale 
// hai aur kis type ka hai 
// // int a;
// // a me 10 hai
// // number 
a = 10;
a = 10.1;
// // boolean
a = true;
// // string 
a = "hello";
a = 'i am the same'
// // null
a = null;
// console.log(a);
// primitive types -> numbers ,boolean , strings,null,undefined
//  node fileName.js


// print 1 to 10 
// loops 
// ************for*****************
// for (let i = 1; i <= 10; i++) {
//     // print and enter
//     console.log("Number is " + i);
// }
// print in same line 
// process.stdout.write(""+i);

// ****************while loop -> print even*********** 
// let i = 1;
// while (i <= 10) {
//     if (i % 2 == 0) {
//         console.log("Even is " + i);
//     }
//     i++;
// }

let endNum = 20;
// check from 1 to that endNum(20) 
// num is multiple of 3 -> Print : Fizz
// num is multiple of 5 -> Print : Buzz
// num is multiple of both 3&5 ->: FizzBuzz
//  non of these -> number itself
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}




