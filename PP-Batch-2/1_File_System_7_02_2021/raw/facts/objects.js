// objects-> key : value pairs
// object literal
// classical oops
// car-> blueprint(class)-> instance(object)
// JS
// car-> prototype(object)-> intance(object) 
// object literal define
//  10 avengers
// object 
//
let captain = {
    name: "Steve",
    "last Name": "Rogers",
    address: {
        state: "New York",
        city: "Manhatten"
    },
    age: 35,
    isAvenger: true,
    movies: ["civil war", "first avenger", "avenger"],
    sayHi: function () {
        console.log("Line number 21 Cap say's Hi");
        return "blessings from cap";
    }
};
function upadateValues(key, value) {
    captain[key] = value;
}
upadateValues("age", 45);
upadateValues("isAvenger", false);
console.log(captain["last Name"]);
// GET

// function fn(){
//     console.log("Line number 26 Hello");
//     return "something from fn";
// }
// console.log("name is ",captain.name);
// console.log("city is ",captain.address.city);
// console.log("movie is ",captain.movies[1]);
// console.log("Line number 32 cap sends ",captain.sayHi());
// console.log(captain);
// SET/UPDATE
// captain.friends = ["tony", "bruce", "peter"];
// captain.isAvenger = false;
// DELETE
// delete captain.movies;
// console.log("``````````````````````````");
// literally match 
let abc = "lastName";
// console.log(captain.abc);
// console.log("bracket notation ",captain[abc])
// for in loop 
for (let key in captain) {
    console.log("key :", key, "||value :", captain[key]);
    // console.log("key :", key, "||value :", captain.key);
}
// objects -> arrays for ease of usage

