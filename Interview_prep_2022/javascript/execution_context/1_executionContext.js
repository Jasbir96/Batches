// console.log("Before");

// function fn() {

//     console.log("fn is called",this);
// console.log("```````````````````````````````")
// }
// fn();
// console.log("After");

// // console.log("global", global);
// console.log("this in global EC", this);

// access to code outside your fn 
// var a = 10;
// console.log("Before");
// function fn() {
//     console.log("inside fn", a);
// }
// fn();
// console.log("After");












// scope -> 
// what is outside -> 
// lexical scope 
var a = 20;
function fn2() {
    console.log("30 a ", a);
}
function fn1() {
    var a = 10;
    console.log("Inside c");
    console.log("35 a", a);

    fn2();
}
console.log("40 a ", a);
fn1();
console.log("42 a ", a);

// Hositing 
// Example -1 
console.log(" 40 a", a);
var a = 10;
console.log(" 42 a", a);
function fn1() {

console.log("Inside fn1", a);
    a = 20
}
console.log(" 47 a", a);
fn1();
console.log(" 49 a", a);

// Examples -2 
console.log(" 40 a", a);
var a = 10;
console.log(" 42 a", a);
fn1();
function fn1() {

    console.log("Inside fn1", a);
    var a = 30;
    a = 20;
}
console.log(" 47 a", a);

console.log(" 49 a", a);

// 40 uf
// 42  10
// 47 10
// inside fn1 uf
// 49 10



