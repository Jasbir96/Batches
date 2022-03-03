function sayHi(name) {
    console.log("My Name is ",
     name);
    name();
    // one thing 
    // return { firstName: "Jasbir" };
}
function chotaFunction() {
    console.log("I am chota function");
}
// i am passing a functio definition
sayHi(chotaFunction);
// name function
// console.log(sayHi);
// console.log(chotaFunction);
// sayHi("Jasbir");