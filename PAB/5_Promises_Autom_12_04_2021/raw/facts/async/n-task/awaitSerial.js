let fs = require("fs");
let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt"];
// await is an alternative to then 
// await only works inside an async function
//  only async function will wait for await
//  inside async function the exceuttion will be
//  paused until the promise we are waiting for is resolved 
// syntax write easier method

console.log("before");

(async function fn() {
    for (let i = 0; i < files.length; i++) {
        let content = await fs.promises.readFile(files[i]);
        console.log("content" + content);
    }
})();

console.log("after");


