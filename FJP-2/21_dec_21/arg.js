// function fn(param1, param2) {
//     console.log("Inside fn", param1, param2);
// }

// fn("Hello", "Hi");
// // // if there is something -> default -> undefined
// fn("Hello");
// // //
// // fn();
// fn("Hello", "Hi", "By");
// arguments
// emulate
function fn(param1,param2) {
    console.log(arguments);
    console.log(param1, param2);
}
fn("Hello", "Hi");
// // // if there is something -> default -> undefined
fn("Hello");
// // //
// fn();
fn("Hello", "Hi", "By");