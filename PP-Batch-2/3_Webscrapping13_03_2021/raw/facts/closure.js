// function outer() {
//     console.log("outer is running")
//     console.log("I am outer");
//     console.log("outer is returning something");
//     return function inner() {
//         console.log("I am inner")
//     }
// }
// let innerRef = outer();
// innerRef();
// function firstName(fname) {
//     console.log("Your first Name is", fname)
//     return function lastname(lName) {
//         console.log(fname + " " + lName);
//     }
// }
// let lastNameFnRef = firstName("Jasbir");
// console.log("`````````````````````````");
// lastNameFn("Singh");