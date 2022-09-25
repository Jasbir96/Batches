// function are treated as variables in js -> function are first class citizens in js 
// Powers of functions in js

// you assign value or address of another var -> function expression
// you return function from a function  -> closure,HOF
// you pass as a parmeter -> HOF

// Higher order functions : these are the function that take a function as an argumnet or return function 
function squarer(x) {
    return x * x;
}
function adder(x) {
    return x + x;
}
// hof -> arr.map, arr.filter, arr.reduce
function arrTransformer(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let res = fn(arr[i]);
        newArr.push(res);
    }
    return newArr;
}
let arr = [1, 2, 3, 4, 5];
let sqArr = arrTransformer(arr, squarer);
console.log("sqArr", sqArr);
let sumArr = arrTransformer(arr, adder);
console.log("sum", sumArr);



// map ,filter ,reduce







