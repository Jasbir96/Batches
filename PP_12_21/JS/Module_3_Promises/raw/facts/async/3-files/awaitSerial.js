let fs = require("fs");
// syntax sugar 
console.log("before");
// async is keyword 
(async function fn() {
    // first file read 
    try {
        let ffReadPromise = fs.promises.readFile("f1.txt");
        let content = await ffReadPromise;
        console.log("content" + content);
        let SfReadPromise = fs.promises.readFile("f2.txt");
        content = await SfReadPromise;
        console.log("content" + content);
        let thfReadPromise = fs.promises.readFile("f3.txt");
        content = await thfReadPromise;
        console.log("content" + content);
    } catch (err) {
        console.log("err", err);
    }

})();
console.log("after");