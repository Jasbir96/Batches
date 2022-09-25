// // serialize the obj 
// let object = {
//     newObj: {
//         obj2: {
//             obj5: {
//                 one: 1,
//                 three: 3
//             },
//         },
//     },
//     obj3: {
//         obj4: { two: 2 },
//     },
//     a: 10
// };
// let final = { 'newObj.obj2.obj5.one': 1,'newObj.obj2.obj5.three': 3 ,'obj3.obj4.two': 2, 'a': 10 };
// function flatten(obj) {
//     let result = {};
//     for (let i in obj) {
//         if (typeof obj[i] == "object") {
//             let smallObject = flatten(obj[i]);
//             for (let j in smallObject) {
//                 result[i + "." + j] = smallObject[j]
//             }
//         } else {
//             // a: 10
//             result[i] = obj[i];
//         }
//     }
//     return result;
// }
// let ans = flatten(object);
// console.log("ans", ans);