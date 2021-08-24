function promisifiedFn() {
    return new Promise(function (resolve, reject) {
        console.log("inside promise");
        // setTimeout(function () {
        //     // resolve(20);
        // }, 0);
        // resolve(10);
        // console.log("Hello");
        reject("Hello");
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
console.log("after");