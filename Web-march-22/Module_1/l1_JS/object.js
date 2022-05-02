// it is non-primitive datatye that is used to represent anything
// empty object creation
// let obj = {

// };

// collection of key :value pair,
// key : string or number & value : any valid js datatype  

let cap = {
    firstName: "Steve",
    "last Name": "Rogers",
    friends: ["Tony", "peter", "bruce"],
    address: {
        city: "manhattan",
        state: "NY"
    },
    age: 34,
    isAvenger: true
}
// print
// console.log(cap);
// get a key's value using dot notation
console.log(cap.firstName);
console.log(cap.age);
console.log(cap.address.city);
console.log(cap.friends[1]);

// get 
let varName = "firstName";
// console.log(cap[varName]);
// varName="last Name";
// console.log(cap[varName]);
console.log(cap["last Name"]);

// delete a key 
delete cap.friends;
// add
cap.movies =
    ["winter soldier", "Firt Avenger", "civil war"];
let key = "comp"
cap[key] = "DCU";

// update 
cap.isAvenger = false;
console.log(cap);
