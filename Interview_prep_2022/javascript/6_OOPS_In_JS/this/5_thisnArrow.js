// // syntax -> this
// let a=10;
// const fn=param=>param*param;
// console.log(fn(a));


// const fn=()=>{
//     // arrow fn -> own -> this ❌
//     // outer env -> this
// console.log(this);
// }
// fn();
let obj = {
    name: "Steve",
    sayHi: ()=> {
        // what should be the output
        // global Obj
        console.log("16", this );
        const inner = () => {
            console.log("18", this)
        }
        inner();
    }
}
obj.sayHi();