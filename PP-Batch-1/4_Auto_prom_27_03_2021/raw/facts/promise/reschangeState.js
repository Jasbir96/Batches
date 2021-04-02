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
let myNewObjct = new MyObject(
    function promiseCb(resolve, reject) {
        setTimeout(function () {
            resolve("hello");
            console.log(myNewObjct);
        }, 1000);
    });
    console.log(myNewObjct);

    