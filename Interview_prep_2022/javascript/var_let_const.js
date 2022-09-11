// the line before a variable  that is declared with help of let or const  is the area known as temporal dead zone.
// Temporal dead zone : It is the area where you can't acces your variable

// scope : Is the area where you access a particular variable or a function
// scope chain : if a variable is not found in current scope then you will find it in outer scope and
// collection of all the outer scope with the current scope is known as scope chain

// let ,const

// var -> function scope -> memory allocation for a variable declared using var is upto a function
// function fn() {
//     var a = 10;
//     console.log("13", a);
//     a++;
//     if (true) {
//         console.log("16", a);
//         var a = 30;
//         console.log("18", a);
//     }
//     console.log("20", a);
// }
// fn();

// let is block scope ->  
// block -> space between two curly braces 

// example 1 
// let fruit = "🍎"
// {
//     {
//         let fruit = "🍊"
//         {
//             {
//                 console.log(34, fruit)
//             }
//             console.log(36, fruit)
//         }
//         console.log(38, fruit)
//     }
//     console.log(40, fruit)
// }
// console.log(42, fruit)

// example 2
function fn() {
    let a = 10;
    console.log("13", a);
    a++;
    if (true) {
        let a = 30;
        // console.log("16", a);
        console.log("18", a);
    }
    console.log("20", a);
}
fn();