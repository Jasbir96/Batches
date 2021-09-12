// functions are treated like variable
// let a=[1,2,3,4,5];
// let b=a;


// function expression
let fnAddressholder = function () {
    console.log("I am expression")
}


// hof
// Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them
// let arr = [1, 2, 3, 4, 5];
// function squarer(x) {
//     return x * x;
// }
// function map(arr, cb) {
//     let tarr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let ans = cb(arr[i]);
//         tarr.push(ans);
//     }
//     return tarr;
// }
// let newArr = map(arr, squarer);
// console.log(newArr);

// return from a function 
// function fn() {
//     console.log("hello");
//     return [10,20,30,40]
// }
//  let rVal=fn();
//  console.log(rVal);


// return a fn from a fn
// function outer() {
//     console.log("Inside outer");
//     console.log("returning inner");
//     return function inner() {
//         console.log("I am Inner");
//     }
// }

//  let rVal=outer();
// //  console.log(rVal);
// rVal();
let a=10;
function getFirstName(FirstName) {
    console.log("Hello", FirstName);
    function fn(){
        console.log("I am outer but you can call me");
    }
    return function getFullName(lastName) {
        console.log("Hello ", FirstName, " ", lastName," ",a);
        fn();
    }
}

let rVal = getFirstName("Steve");
console.log("`````````````````````````````");
rVal("Rogers");
rVal("Rogers");