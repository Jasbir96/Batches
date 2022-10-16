// promises are objects given by promise based function
const fs = require("fs");
// then function that gave us a promise also have some internal pointer to that object
//  so that i can change it's state and value prop
const p1 = fs.promises.readFile("./f1.txt");
// console.log(typeof p1,p1);
console.log("Before");
// consumption of a promise
console.log(p1)
// ***promises -> can be resolved or rejected only once in a life time************** 
// then -> are method of a promise object-> 
// that takes a fn as an arguments
// call -> when that promise object state property is resolved 
// pass -> value property of the promise object  at that time 
// fns are excuted asynchronously 
// enviornament -> microTask queue
// p1.then(function (data) {
//     console.log("then")
//     console.log("data" + data);
// });
// p1.catch(function (err) {
//     console.log("err", err);
// });
// console.log("After");




