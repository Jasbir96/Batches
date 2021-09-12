let fs = require("fs").promises;
let arr = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt"];
// parallely read 
console.log("before");
for (let i = 0; i < arr.length; i++) {
  let frp=  fs.readFile(arr[i]);
  frp.then(cb)
}
console.log("after");
function cb( data) {
        console.log("data->" + data);
}