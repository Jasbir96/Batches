// how js code is executed
// whevever a code is executed you will get a global object
//  and a this
// console.log("global", global);
// console.log("this", this);

// console.log("hello");
// the code isn't inside any function -> is in global area 
// for that global execution context created-> default execution
// console.log("a", a);
// var a;
// a = 10;
// console.log("a", a);

// fn();
// function fn() {
//     console.log("I am a functionn");
// }

// Q who is real
// fn();
// function fn() {

//     console.log("I am real");
// }

// function fn() {
//     console.log("No i am real");
// }

// function fn() {
//     console.log("No i am real also");
// }
// fn();


// console.log("37", a);
// var a = 10;
// function fn() {
//     console.log("41",a);
//     var a = 20;
//     console.log("43", a);
// }
// console.log("45", a);
// fn();
// console.log("47", a);