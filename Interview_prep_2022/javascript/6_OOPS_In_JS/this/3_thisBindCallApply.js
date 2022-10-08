
let ironMan={
    name:"Tony"
}
let obj = {
    name: "Steve",
    sayHi: function (param1,param2) {
        // what should be the output
        // global Obj
        console.log(this,param1,param2);
    }
}
// bind
// let boundFn=obj.sayHi.bind(obj);
// boundFn();
// boundFn();

// let borrowThis=obj.sayHi.bind(ironMan,"Hi","Bye");
// borrowThis();

// call -> it directly call but not returns a new fn;
// obj.sayHi.call(ironMan,"Hi","Bye");

// apply : it is same as call but in it params are passed in an array 
// obj.sayHi.apply(ironMan,["Hi","Bye"]);

