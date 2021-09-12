let fs = require("fs");
let frP = fs.promises.readFile("f1.txt");
console.log("Before");
let thenKP = frP.then(cb);
console.log("then ka promise", thenKP);
// cb behaves in a particular manner
function cb(data) {
    console.log("data" + data);
    return fs.promises.readFile("f2.txt");
}
thenKP.then(function (data) {
    console.log("thenKPKiValue",data)
})
console.log("After");
console.log("``````````````````````````````````````");
// thenKP -> cb return value
// value -> value
// nothing-> undefined
// pending promise-> thenkP will wait for that pedning promise
// error-> then will not run 