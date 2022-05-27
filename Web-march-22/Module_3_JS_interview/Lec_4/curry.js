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

// count should be inside fn
function fn() {

}

fn()()()()(0)  //=> return 4
fn()()()(0)  //=> return 3
fn()()()()()(0)  //=> return 5

