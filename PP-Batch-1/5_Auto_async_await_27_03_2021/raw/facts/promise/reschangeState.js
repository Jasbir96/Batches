// OOPS-> react 
// test 5 oops 
function MyObject(fn) {
    this.state = "pending";
    this.value = undefined;
    let resolve = function (data) {
        this.state = "resolved";
        this.value = data;
    }.bind(this);
    let reject = function (err) {
        this.state = "rejected"
        this.value = "I am error";
    }.bind(this);

    fn(resolve, reject)
}

let myNewObjct = new MyObject(function cb(resolve, reject) {
    console.log("Hello inside ");
    setTimeout(function () {
        resolve("hello");
    }, 1000);
    console.log("Hello after");
});
console.log("Before");
console.log(myNewObjct);

setTimeout(function () {
    console.log("after 1.5 sec ", myNewObjct);
}, 1500);

console.log("After");
