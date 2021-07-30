// represent
// key -> string , number
//  object -> key : value pair 
//  values -> valid type 
// object  create 
let obj = {};
let cap = {
    // properties
    name: "Steve",
    // space in key 
    "last Name": "Rogers",
    friends: ["Peter", "Bruce", "Tony"],
    age: 34,
    isAvenger: true,
    //  methods
    sayHi: function () {
        console.log("cap say's Hi");
    },
    10: "My value is 10",
    address: {
        state: "New York",
        city: "NY City"
    },
}
// print
// console.log(obj);
// console.log(cap);
// // access  -> . notation key -> value get 
// console.log("firstName", cap.name);
// console.log("friend", cap.friends[1]);
// console.log("city", cap.address.city);
// console.log("isAvenger", cap.isAvenger);
// //method call
// // cap.sayHi();
// // acces way -> [] operator
// // whenver 
// 1. you have to access key that has space in it
// 2. you have to access key is of type number
// console.log(" last Name ", cap["last Name"])
// console.log("10 value ", cap[10])
// use case 
//  square bracket -> variable 
//  variable value -> get -> matching
// let varName = 10;
console.log("value is ", cap[varName]);
// varName = "address";
// console.log("value is ", cap[varName]);
// loop over an object
for (let key in cap) {
    // key -> friends
    console.log(key, " : ", cap[key]);
}
// not found -> ??
// undefined
// // console.log(cap.abc);
// console.log(cap.age);
// // as a variable 
// let age = "address";
// console.log(cap[age]);

//  . , []
// console.log("value",obj.10)
// console.log("last Name",obj.name);
// set update delete 
// create
console.log(cap)
// set
cap.movies
    = ["first avenger", "civil war", "avengers"];
// update 
cap.age = 45;
// delete 
delete cap.friends
console.log("````````````````````")
console.log(cap)
