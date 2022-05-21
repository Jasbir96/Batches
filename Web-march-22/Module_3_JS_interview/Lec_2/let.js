//  reassign ✔
// let a = 10;
// a = 20;
// console.log(a);
// // identifier has already been declared 
// let a;❌

// scope-> block
// let a = 10;

// function fn() {
//     let a = 20;
//     console.log("5", a);
//     a++;
//     console.log("7", a);
//     if (true) {
//         let a = 30;
//         a++;
//         console.log("11", a);
//     }
//     a++;
//     console.log("14", a);
// }
// console.log("16", a);
// fn();
// console.log("18", a);
let fruit = "kiwi";
function fn() {
    let fruit = "oranges";
    console.log("29", fruit);
    {
        let fruit = "Apple"
        console.log("32", fruit);
        {
            // let fruit ="grapes";
            console.log("35", fruit);
        }
    }
    console.log("37", fruit);
}
console.log("38", fruit);
fn();
console.log("38", fruit);
/scope -> jha variable
// {} area inside two cruly braces is a bl;ock
// let is block scope->  if a block
// var is function scope->  fn does not have a var variable then it will look outside functionn