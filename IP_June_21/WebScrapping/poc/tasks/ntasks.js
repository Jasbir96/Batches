const fs = require("fs");
let arr = ["../f1.txt", "../f2.txt", "../f3.txt"];
// serially sync 
// for (let i = 0; i < arr.length; i++) {
//     content = fs.readFileSync(arr[i]);
//     console.log("" + content);
// }
// async parallel
// for (let i = 0; i < arr.length; i++) {
//     fs.readFile(arr[i], function cb(err, data) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("" + data);
//         }
//     });
// }
// async serial n no of files wrong code (deadlock )
// for (let i = 0; i < arr.length;) {
//     console.log(i);
//     fs.readFile(arr[i], function cb(err, data) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("" + data);
//             i++;
//         }
//     });
// }
// async parallel code for n number of task
function nFileReader(n) {
    if (n == arr.length) {
        return;
    }
    fs.readFile(arr[n], function cb(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("" + data);
            if(data.byteLength>10){
                // t3
            }else{
                // t4
            }
            nFileReader(n + 1);
        }
    });

}
nFileReader(0);

