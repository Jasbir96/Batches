// main -> X
// js code -> enviornment 
// js -> browser , nodejs 
// node -> global 
// browser -> window object 
// global area -> it is not inside any function  -> global excution context 
// JS engine -> that executes JS code 

// /key word => object given by your env
// console.log(global);
// // this prints -> empty object 
// console.log(this); 

//Execution Context ->  code + Enviornment(global) + JS(this) ,
// Every code inside Js run in an EC 

// there 2 phases inside an EC
//  1. creation phase 

//a.  memory allocate  -> hoisting 
//variables -> undefined
//function -> memory allocate 
// b. this ,global
// c outer enviornment -> lexical scope

// 2. Code Execution        
// left to right and top to bottom execute hoga
//  default -> global Execution context
//  New EC -> is only created when a function is called 
// console.log("line number 26", a);
// console.log("line number 27", b)
// var a;
// var b;
// a = 10;
// b = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(b);
// fn();
// function fn() {
//     console.log("Thank You for calling Me");
// }
// fn();


// function call -> NEW EC
// function execution finish -> variables of that fn will be destroied
// console.log("line number 45", a);
// var a;
// a = 10;
// console.log(a);
// fn();
// function fn() {
//     console.log("line number 55", a);
//     var a = 10;
//     console.log("Thank You for calling Me val of a is", a);
// }
// fn();




//  outer enviornment -> outer variables, function 

// console.log("line number 45", a);
// var a;
// a = 10;
// console.log(a);
// fn();
// function fn() {
//     console.log("line number 70", a);
//     a++;
//     console.log("Thank You for calling Me val of a is", a);
// }
// fn();
// console.log("76", a);

var varName = 1;
// // outer env -> lexical scope
// // outer enviornment is defined by where is the function definition exist  
function a() {
    var varName=3
    function c() {

        console.log(varName);
    }
    c();

}
function b() {
    console.log(varName)
    // var varName = 2;
    console.log(varName);
    //    fn call
    a();
}
b();

// scope of var
// var a;
// var a;
// a=10;
console.log(a);
var a = 10;
function fn() {
    var a = 20;
    a++;
    console.log("line number 101", a);
    if (true) {
        var a = 30;
        a++;
        console.log("line number 105", a);
    }
    console.log("line number 107", a);
}
console.log("109", a)
fn();
console.log("111", a);