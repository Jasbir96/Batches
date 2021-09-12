// function ,arrays,objects
// function defination
function hello(param) {
    console.log(typeof param);
    console.log("Greetings everyone with", param);
    // let rVal = Math.random() < 0.5 ? "good" : false;
    // return rVal;
    // return undefined;
}
// function invokation
// hello("Hi");
// hello(10);

// let rVal = hello("Hola");
// console.log("rVal is ", rVal);
/********************************** */
// (classical oops)
// car -> blueprint-> new car develop
// object-> class-> object
// protoypal oops
// car -> prototype-> new car develop
// car-> object -> object 
// object -> key:value 
// empty object declare
// cap america 
// json-> javascript object notation 
// value -> properties
// function-> methods
let obj = {
    name: "Steve",
    lastName: "Rogers",
    address: {
        city: "Manhatten",
        state: "NewYork",   
    },
    isAvenger: false,
    age: 35,
    movies: ["civil war", "first avenger", "age of ultrons"],
    sayhi: function (param) {
        console.log("cap say's hi", param);
        return "return blessings";
    },
    
}
// loop
for (let itr in obj) {
    console.log("key :", itr, "|value :", obj[itr]);
    console.log("key :", itr, "|value :", obj.itr);
}
console.log(obj.abc);
// get
let key ="address";
console.log("address object", obj[key]);
console.log("address object", obj.address);
console.log("address object", obj.address.state);
console.log("Movie", obj.movies[1]);
console.log("function is inside an object", obj.sayhi("i am a param"));
// // set -> update
console.log(obj);
// console.log("``````````````````````````````````````````````````````````");
obj.friends = ["peter", "thor", "tony"];
obj.age = 36;
obj[key]["state"]="delhi";
// // delete 
delete obj.movies;
// console.log("``````````````````````````````````````````````````````````");
console.log(obj);
// 1980-> new language c
// function sayHi() {

//     return 30;
// }
// let a = 10 + sayHi();
// console.log(a);
// console.log("hello", sayHi());
// process.stdout.write();
