// key: value pair

// to declare an object
// let obj={}
// hashmap, dict,unordered map
// JSON -> Javscript object notation
// function fn() {
//     // console.log("outer");
// }
// 
// object -> variables -> property
// object ->functions -> method
let cap = {
    name: "Steve",
    lastName: "Rogers",
    friends: ["tony", "peter", "bruce"],
    isAvenger: true,
    age: 35,
    address: {
        state: "New York",
        city: "Manhatten"
    },
    saysHi: function fn() {
        console.log("Cap say's Hi");
        return "cap send blessings";
    }
}
// print
// console.log(cap);
// get 
console.log(cap.lastName);
let lastName="friends";
console.log( cap[lastName]);

// console.log("my friend is", cap.friends[1]);
// console.log("city name is", cap.address.city);
// console.log("addres is",cap.address);
// cap.sayHi();
// console.log("Before");
// console.log("returned val is", cap.saysHi());
// console.log("After");
// for in 
// console.log(cap.abc);
// let name = "lastName";
// cap[name]-> cap.lastName;
// cap.name-> cap.name
// console.log("address is", cap[name]);
// console.log("address is", cap.name);
// loops
// for (let key in cap) {
// variable    // 
// let key ;
// property
// Object.key

//     console.log("key :", key, "value :", cap[key]);
// }
// create update 
// console.log(cap);
cap.isAvenger = false;
console.log("````````````````````");
cap.movies = ["First Avenger", "Civil War", "Age of Ultrons"];

// delete 
delete cap.age;
// console.log(cap);

// for (let key in cap) {
// console.log("key",key,"value ", cap[key]);
// }