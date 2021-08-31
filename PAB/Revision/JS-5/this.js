// this is an entity that is defined inside a function-> that is defined when a function is called and it depends upon how it is called
// call -> it is used to assigna this for a function while invoking it 
// Function.prototype.call
// let abc = {
//     name: "jasbir",
// }
// let obj = {
//     name: "Steve",
//     sayHi: function () {
//         console.log("outside", this)
//         // 1.  provide a this to function 
//         function special(a, b) {
//             console.log(a, b)
//             console.log("special", this);
//         }
//         // // i am calling special such that it's this is outer obj
//         special.call(this);
//         // special();
//         // special.call(this, "hello", "hi");
//         special.call(abc, ["hello", "hi"]);
//         // console.log(this.name, "say's Hi");
//     }
// }
// // method call -> this send
obj.sayHi();
// // 2 you can provide method of any other object to a object 
// obj.sayHi.call(abc);
// function sayHi() {
//     console.log("this", this);
//     function sayHiInternal() {
//         console.log("internal", this);
//     }
//     sayHiInternal();
// }

// arrow function takes this from lexical scope 
// let cap = {
//     name: "Steve",
//     sayHi:  ()=> {
//         const special = () => {
//             console.log(this)
//         }
//         special();
//     }
// }

// cap.sayHi();



// apply function
// let arr=[1,2,3,4,5,6,7,8]
// let abc = {
//     name: "jasbir",
// }
// let obj = {
//     name: "Steve",
//     sayHi: function () {
//         console.log("outside", this)
//         // 1.  provide a this to function 
//         function special(...args) {
//             console.log(a, b)
//             console.log("special", this);
//         }
//         // // i am calling special such that it's this is outer obj
//         // special.call(this);
//         // special();
//         special.call(this, "hello", "hi");
//         special.apply(abc, arr);
//         //         // special.call(this, "hello", "hi");
//         // console.log(this.name, "say's Hi");
//     }
// }
// obj.sayHi();

let abc = {
    name: "jasbir",
}

// bind -> function -> copy predefined this
let obj = {
    name: "Steve",
    sayHi: function () {
        console.log("outside", this)
        // 1.  provide a this to function 
        function special() {
            // console.log(a, b)
            console.log("special", this);
        }
        // // i am calling special such that it's this is outer obj
        // special.call(this);
        // special();
        let boundFn1 = special.bind(abc);
        let boundFn2 = special.bind(obj);
        return { boundFn2, boundFn1 };
        //         // special.call(this, "hello", "hi");
        // console.log(this.name, "say's Hi");
    }
}
let { boundFn1, boundFn2 } = obj.sayHi();
boundFn1();
boundFn2();