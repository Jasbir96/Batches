let fs = require("fs");
// serial using sync function
// let content = fs.readFileSync("../f1.txt");
// console.log("" + content);
// content = fs.readFileSync("../f2.txt");
// console.log("" + content);
// content = fs.readFileSync("../f3.txt");
// console.log("" + content);
//  async parallel
fs.readFile("../f1.txt", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("" + data);
    }
});
fs.readFile("../f2.txt", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("" + data);
    }
});
fs.readFile("../f3.txt", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("" + data);
    }
});
// async serial
fs.readFile("../f1.txt", cb1);
function cb1(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("" + data);
        fs.readFile("../f2.txt", cb2);
    }
}
function cb2(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("" + data);
        fs.readFile("../f3.txt", cb3);
    }
}
function cb3(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("" + data);
    }
}