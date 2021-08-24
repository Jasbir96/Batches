// cred 
// second party 
// propitery code
function runMlalgo(amount, cb) {
    console.log("running ml algo");
    console.log("processing payment");
    setTimeout(function () {
        console.log("payment done");
        // cb();
    }, 1000);
}
function runPMAlgo(amount) {
    return new Promise(function (resolve, reject) {
        console.log("running ml algo");
        console.log("processing payment");
        setTimeout(function () {
            console.log("payment done");
            // resolve();
        }, 1000);
    })
}
module.exports = {
    runMlalgo,
    runPMAlgo
}
// console.log("before");
// function cb() {
//     console.log("Hello");
// }
// console.log("After");
// setTimeout(cb, 2000);