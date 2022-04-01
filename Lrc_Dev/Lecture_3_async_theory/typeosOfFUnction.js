// function statement 
// function fn() {
//     console.log("I am function");
// }
// fn();
// // pass by value
// fn(10);
// fn(10.1);
// fn("Hello");
// // array ,object-> reference ;
// let arr = [1, 2, 3, 4, 5]
// fn(arr);
// let obj = { name: "Jasbir" }
// fn();
// // js functions are treated as a variable
// // function as a parameter  
// // to another pass kar sakte ho 
// // function that accepts 
// // or return a function is known higher order -> 
// // fn is a higher order fn
// // // chfn -> function 
// // that is passed a parameter to another is known 
// // as callback function that will later called 
// // inside a higher order fn  
// function fn(param) {
//     console.log("I am function", param);
//     param();
// }
// function chFn() {
//     console.log("I am chota fn");
// }
// fn(chFn);

// let a = [1, 2, 3, 4, 5];
// let b = a;
// // function expression
// let exp = function () {
//     console.log("I am an exp");
// }
// exp();
// // 2 types 
// // IIFE-> immediately invoked function expression
(function (param) {
    console.log("I am an IFFE", param);
})(10);

// Arrow functions
// syntax small 
let singleLine = param => console.log("I am an exp", param);
singleLine(100);
let multipleLineSingleparam = param => {
    console.log("I am an exp", param);
    console.log("I am Multiple line");
}
multipleLineSingleparam(10);
let multipleLineMultipleparam = (param1, param2) => {
    console.log("I am an exp", param1,param2);
    console.log("I am Multiple line");
}
// function statement-> memory allocation in creation phase
// function expression-> function  definition me hi hum variable me address pass-> mem allocation -> variable 
// IIFE-> you don't need to call it seperately immediately invoke 
// Arrow fn-> behaviour is similar to expression(this ki functionalities) 




