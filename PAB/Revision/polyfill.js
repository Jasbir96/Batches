//  implementation of a feature if it doesn't exist in client machine / software
// library 
Object.prototype.forEach = function (cb) {
    // console.log(this);
    // loop 
    // console.log(this);
    for (let key in this) {
        // prototype add -> print 
        if (this.hasOwnProperty(key)) {
            cb(this[key]);
        }
    }
}

// code 
let obj = {
    "name": "jasbir",
    lastName: "Singh",
    age: 24
}
let obj1 = {
    "name": "steve",
    lastName: "rogers",
    age: 30
}
// obj.forEach(cb);
obj1.forEach(cb);
// obj -> function -> method
function cb(elem) {
    console.log("value of object", elem);
}