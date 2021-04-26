// Java variables,function
let print=console.log;
// functions are treated as first class citizens
// JS ,Haskell,-> functions are also treated as a variable
// assignment
// you can store value/address of a variable in another variable
// you can also store address of a function inside a variable

// let a = [10, 20, 30, 40];
// let b = a;

// console.log("value inside b is", a);
// let fnAddrCont = function fn(param) {
//     console.log("param is ", param);
// }
// fnAddrCont(10);

// int a = 10;
// int b = a;
// System.out.println(b);


// variable can be passed as a parameter
// function can be passed as a parameter
function fn(param) {
    // param();
    print("param is ", param());
}
// fn("a");
// fn(10);
let arr=[10, 20, 30, 40]
fn(arr);
function cb() {
    print("I would be called inside fn");
    return 10;
}
fn(cb);