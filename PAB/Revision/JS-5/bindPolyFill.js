// bind -> function -> copy predefined this
// polyfill 
Function.prototype.myBind = function (jiskeSaathBindKarnaHai) {
    let origialFn = this;
    // return a function 
    return function () {
        origialFn.call(jiskeSaathBindKarnaHai)
    }
}
let abc = {
    name: "Jasbir"
}
// let def = {
//     name: "Aman"
// }
let obj = {
    name: "Steve",
    sayHi: function () {
        console.log(this.name, "say's Hi");
        // let boundFn = sayHi.bind(abc);
        function inner() {
            console.log("inside inner", this.name)
        }
        let boundThisFN = inner.myBind(abc);
        // let boundThisFN = inner.myBind(def);
        boundThisFN();
    }
}
obj.sayHi();

// Ie-> functions 