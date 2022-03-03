// fn definition
function fn(param) {
    console.log("I am function definition", param);
    // execute chota fn 
    param();
}
fn(chotaFn);
// // boolean-> value`
// fn(true);
// // address
// //string -> reference type 
// fn("Hello");
// // object
// let obj = { name: "Jasbir" };
// fn(obj);
// // array
// let arr = [10, 20, 30];
// fn(arr);
// functions are also variables -> functions are first citizens in js
function chotaFn() {
    console.log("Hello i am a chota fn");
}
// function can also be passed as an argument in a function 
// HOF 





