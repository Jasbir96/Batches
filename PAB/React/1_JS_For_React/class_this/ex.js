// name="Alien"
// let obj = {
//     name: "Steve",
//     // functions of an object are known as methods
//     sayHi: function () {
//         // console.log(obj.name, "say's Hi");
//         console.log(this.name, "say's Hi");
//         function inner() {
//             console.log(this.name, "say's Hi");
//         }
//         // obj.inner
//      inner();
//     //   inner call -> window
//       inner();
//     },
//     inner:function(){
//         console.log("fake")
//     }
// }
// this keyword-> on the basis of call
// call base pe hi define hota
// method call -> this would current object
//  obj.sayHi();
// let fn = obj.sayHi;
// console.log(window);
// window
// function call -> this window
// console.log(fn);
// fn();
// solving this
// name = "Alien";
// let obj = {
//     name: "Steve",
//     // functions of an object are known as methods
//     sayHi: function () {
//         // console.log(obj.name, "say's Hi");
//         console.log(this.name, "say's Hi");
// let that=this;
//         function inner() {
//             console.log(that.name, "say's Hi");
//         }
//         // obj.inner
//      inner();
//     //   inner call -> window
//     //   inner();
//     }
// }
// // this keyword-> on the basis of call
// // call base pe hi define hota
// // method call -> this would current object
// //  obj.sayHi();
let fn = obj.sayHi;
// // console.log(window);
// // window
// // function call -> this window
// // console.log(fn);
fn();

// arrow -> self this
let obj = {
    name: "Steve",
    // functions of an object are known as methods
    sayHi:
       function ()  {
            console.log(this.name, "say's Hi");
            // arrow does not have 
            // it's own this it take this from outer function
            const subOuter = () => {
                // console.log(obj.name, "say's Hi");
                console.log(this.name, "say's Hi");
            }
            subOuter();
        }

}
// this keyword-> on the basis of call
// call base pe hi define hota
// method call -> this would current object
// obj.sayHi();
// let fn = obj.sayHi;
// console.log(window);
// window
// function call -> this window
// console.log(fn);
// fn();

// 1. this is everytime decided on the basis of call
// 2. Normal function 
// method call ->  current object to whom you belong to
// function call -> window object
// strict mode function call ->undefined
// 3. Arrow function->
// 2nd rule is not applicable for arrow function
// / it don't have my own this -> i will take it from outside 
// 4. bind function -> if you want to always pass same object as this whenever a function is called
let obj = {
    name: "Steve",
    // functions of an object are known as methods
    sayHi:
        function () {
            console.log(this.name, "say's Hi");
            // arrow does not have 
            // it's own this it take this from outer function
            function subOuter() {
                // console.log(obj.name, "say's Hi");
                console.log(this.name, "say's Hi");
            }
            // /copy function -> this define-> bound fn 
            let boundFn = subOuter.bind(obj);
            return boundFn;
            // function call 
            // subOuter();
        }
}
let boundFn = obj.sayHi();
boundFn();
// let fn=obj.sayHi;
// fn();