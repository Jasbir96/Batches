// 8
// 9
// console.log(this);
// js 
"use strict";
// you can't just create global variable ->
//  you need explicitely define it
// in case of function this will become undefined
// message = 10;
// message = "fake Hello";
// window.message = "fake Hello";
// console.log(message);
const object = {
    message: 'Hello, World!',
    logMessage: function () {
        console.log(this);
        // What is logged?
    }
};
let fn = object.logMessage;
fn();
// // this -> define
// // window
// let fn=object.logMessage;
// setTimeout(fn, 1000);
// setTimeout(function outer() {
//     // console.log("hello");
//     object.logMessage();
// }, 1000);
// message[2]=10;
// let boundFn = object.logMessage.bind(object)
// setTimeout(boundFn, 1000);
//10 
// const object = {
//     who: 'World',
//     greet() {
//         return `Hello, ${this.who}!`;
//     },
//     farewell: () => {
//         return `Goodbye, ${this.who}!`;
//     }
// };
// console.log(object.greet()); // What is logged?
// console.log(object.farewell()); // What is logged?