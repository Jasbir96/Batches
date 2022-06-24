// ***********************Q1**************** 

// const num = 5; 
// console.log(num + 5); //10 
// let a = 6; 
// a = a + num; 
// console.log(num - a);//-> -6


// Q2
// shadowing -> block -> varibale available 
// let a = 2;
// {
//     const a = 3;
//     {
//         let a = 4;
//         {
//             const a = 5;
//             console.log(a);
//         }
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);


// // shadowing
// var a = 2;
// {
//     var a = 3;
//     {
//         var a = 4;
//         {
//             var a = 5;
//             console.log(a);
//         }
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);


// legal 
// var a = 2;
// {
//     let a = 3;
//     {
//         let a = 4;
//         {
//             let a = 5;
//             console.log(a);
//         }
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);



// var has scope beyond the bracket and if beyond that bracket you have let ,
//  or const defined variable with same name -> illegal shadowing
// let  a = 2;
// {
//     var a = 3;
//     {
//         let a = 4;
//         {
//             let a = 5;
//             console.log(a);
//         }
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);