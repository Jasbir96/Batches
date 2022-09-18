// function getFirstName() {
//     let firstName = "Jasbir"
//     console.log("Your first name is ", firstName);
//   return    function getLastName() {
//         let lastName = "Singh";
//         console.log("Your lastName name", lastName);
//         return function printFullName() {

//             console.log("full Name ", firstName, " ", lastName);
//         }
//     }
//     //
// }
// let getLastName = getFirstName();
// console.log("calling last name");
// let getFullname = getLastName();
// console.log("calling full Name");
// getFullname();
// lexical scope : variables that are outside a function are available for it
// closure : variables outside a function are available for it even if outer function is removed from the stack.
//closure is a feature of js
// output -> 3,3,3 with var
// Q1
// function arrDataPasser() {
//     //  closure
//     // var is function  -> i
//     var arr = [];
//     for (var i = 0; i < 3; i++) {

//         arr.push(function () {
//             console.log(i);
//         });
//     }
//     return arr;
// }
// let arr = arrDataPasser();
// // access
// arr[0]();
// arr[1]();
// arr[2]();

// Q2 output -> 3,3,3 -> let
// function arrDataPasser() {
//     //  closure
//     // var is function  -> i
//     let arr = [];
//     let i = 0;
//     for (; i < 3; i++) {

//         arr.push(function () {
//             console.log(i);
//         });
//     }
//     return arr;
// }
// let arr = arrDataPasser();
// // access
// arr[0]();
// arr[1]();
// arr[2]();


// Q3  output -> 0,1,2 with var
// function arrDataPasser() {
//     //  closure
//     // var is function  -> i
//     var arr = [];
//     for (var i = 0; i < 3; i++) {
//         let outer = function () {
//             var j = i;
//             return function () {
//                 console.log("j", j, "i", i);
//             }
//         }
//         var inner = outer();
//         arr.push(inner);
//     }
//     return arr;
// }
// let arr = arrDataPasser();
// // access
// arr[0]();
// arr[1]();
// arr[2]();
// Q4 output -> 0,1,2 with let 
// function arrDataPasser() {
//     //  closure
//     // var is function  -> i
//     let arr = [];
//     for (let i = 0;  i < 3; i++) {
//         arr.push(function () {
//             console.log(i);
//         });
//     }
//     return arr;
// }
// let arr = arrDataPasser();
// // access
// arr[0]();
// arr[1]();
// arr[2]();

// variation
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}





