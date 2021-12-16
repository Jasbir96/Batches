// function definition
function sayHi(name) {
    console.log("My Name is ", name);
    // one thing 
    // return { firstName: "Jasbir" };
}
// function invocation -> function only runs when it is called 
// let rVal = sayHi("Jasbir Singh");
// console.log("Rval is ",rVal);
// array 
let array = [10, 20, 30, 40]
// object
let obj = { firstName: "Jasbir" };
// function is also a variable 
function chotaFunction() {
    console.log("I am chota function");
}
// string
sayHi("Hello");
// number
sayHi(10);
// reference type
sayHi(array);
sayHi(obj);
// function
sayHi(chotaFunction);



