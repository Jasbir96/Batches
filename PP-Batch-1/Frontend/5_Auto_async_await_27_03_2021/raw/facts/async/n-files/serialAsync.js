let fs = require("fs");
let arr = ["../f1.txt", "../f2.txt", "../f3.txt"];
console.log("before");
// syntax sugar 
async function fn() {
    let data;
    for (let i = 0; i < arr.length; i++) {
        console.log("i",i);
        data = await fs.promises.readFile(arr[i]);
        console.log("data"+data);
    }
}
fn();



