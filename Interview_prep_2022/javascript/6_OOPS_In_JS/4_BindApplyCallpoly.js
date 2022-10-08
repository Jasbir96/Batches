
let ironMan = {
    name: "Tony",
  
}
let obj = {
    name: "Steve",
    sayHi: function (param1, param2) {
        // what should be the output
        // global Obj
        console.log(this.name, param1, param2);
    }

}
// Object.prototype.length=function () {
// let allTheKeysInThatObj=Object.keys(this);
// return allTheKeysInThatObj.length;
// }
// rest operator -> n number inputs ke liye tyaari kar rahe ho 
Object.prototype.MyBind = function (jisThisBind, ...args) {
    // args -> n no of args
    // jisMebind-> obj h jiske saath aapko fn call krna h 
    // this -> function jisko aapko call
    jisThisBind.mymethod = this;
    // return 
    return function () {
        jisThisBind.mymethod(...args);
    }
}
Object.prototype.MyCall = function (jisThisBind, ...args) {
    jisThisBind.mymethod = this;
    // return 
        jisThisBind.mymethod(...args);
}
Object.prototype.MyApply = function (jisThisBind, args) {
    jisThisBind.mymethod = this;
    // return 
    jisThisBind.mymethod(...args);
}
// *****************usage***********************************
let boundFn = obj.sayHi.MyBind(ironMan, 2, 3);
boundFn();
 boundFn = obj.sayHi.MyBind(obj, 2, 3);
boundFn();

// call -> it directly call but not returns a new fn;
obj.sayHi.MyCall(ironMan,"Hi","Bye");
// apply : it is same as call but in it params are passed in an array
obj.sayHi.MyApply(ironMan,["Hi","Bye"]);

