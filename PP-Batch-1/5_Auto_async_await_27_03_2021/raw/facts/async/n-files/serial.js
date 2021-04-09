let fs = require("fs");
let arr = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt"];
console.log("before");
// for (let i = 0; i < arr.length;) {
//     console.log(i);
//     fs.readFile(arr[i], function (err, data) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("data->" + data);
//             i++;
//         }
//     })
//     // break;
// }
function reader(arr, n) {
    if (arr.length == n) {
        return;
    }
    fs.readFile(arr[n], function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("data->"+ data);
            reader(arr, n + 1);
        }
    })
    
}
reader(arr, 0);
console.log("after");