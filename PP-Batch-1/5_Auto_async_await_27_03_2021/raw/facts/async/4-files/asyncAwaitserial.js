let fs = require("fs");
console.log("before");

async function fn() {
    try {
        let data =
            await fs.promises.readFile("../f1.txt");
        console.log("data" + data);
        data =
            await fs.promises.readFile("../f2.txt");
        console.log("data" + data);
        data =
            await fs.promises.readFile("../f3.txt");
        console.log("data" + data);
    } catch (err) {
        console.log(err);
    }

}
console.log("after");
fn();


