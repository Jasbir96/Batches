// this -> is a predefined keyword in js 
// that referes to the (entity)
//  that is calling a method
 Array.prototype.sayHello = function (elem) {
    console.log("Hello " + elem);
}
Array.prototype.sum = function () {
    // console.log(this);
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum = sum + this[i];
    }
    console.log(sum);
}
Array.prototype.product = function () {
    let pro = 1;
    for (let i = 0; i < this.length; i++) {
        pro = pro * this[i];
    }
    console.log(pro)
}

let arr1 = [1, 2];
let arr2 = [3, 4];
// arr1.sayHello("arr1");
// arr2.sayHello("arr2");

arr1.sum();
arr2.sum();
arr2.product()