// let obj = {
//     name: "Steve",
//     sayHi: function () {
//         // what should be the output
//         // global Obj
//         console.log(this);
//     }
// }
let sayHiAdd=obj.sayHi;
sayHiAdd();

let obj = {
    name: "Steve",
    sayHi: function () {
        // what should be the output
        // global Obj
        console.log("16",this==global);
        function inner(){
            console.log("18",this)
        }
        inner();
    }
}
obj.sayHi();
