function fn() {
    console.log("External");
    return function internalFn() {
        console.log("I am internal");
    };
}
// // 1
// let internalFn = fn();
// internalFn();

// 2
fn()();

// Write a function fn such that if it is called like this then
fn()()()()(0)  //=> return 4
fn()()()(0)  //=> return 3
fn()()()()()(0)  //=> return 5
// and if you using any variable for count then it should be inside fn



