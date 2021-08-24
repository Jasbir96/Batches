function promisifiedFn() {
    return new Promise(function (resolve, reject) {
        console.log("inside promise");
        // setTimeout(function () {
        //     // resolve(20);
        // }, 0);
        resolve(10);
        // console.log("Hello");
        // resol("Hello");
    })
}
// data -> immediatley return ;
let promiseObject = promisifiedFn();
console.log(promiseObject);
// state -> pending,  
// console.log("pObject ", promiseObject);
// setTimeout(function () {
//     console.log("pObject", promiseObject)
// }, 1);
console.log("before");
// promiseObject
//     .then(
//         function (data) {
//             console.log("data", data);
//             return "inside first then";
//         }).then(function (thenkadata) {
//             console.log("later", thenkadata)
//         })
async function fn() {
    // syntax sugar for then
    try {
        console.log("Inside fn");
        let data = await promiseObject;
        console.log("data", data);
        
    } catch (err) {
        console.log(err);
    }
}
fn();
console.log("after");