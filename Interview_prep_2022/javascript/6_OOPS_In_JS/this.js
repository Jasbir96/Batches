// this is always determined for every execution context->
//  global object +code +outer scope +this calculate 
// 1. GEC => global execution context -> this -> {}
console.log(this);

function fn(){
console.log(this);
}
//  2. function call  -> global object
fn();

let obj={
    name:"Steve",
    sayHi:function(){
        console.log(this.name);
    }
}
// 3. method call -> this equals to current obj
console.log("`````````````````````````````````````");
obj.sayHi();