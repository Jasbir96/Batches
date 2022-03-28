// entity -> user ,cat,book
// declare
let obj = {};
// key(strings,numbers): value -> Js vaild dataType
// array,objects,functions
let cap = {
    name: "Steve",
    "Last name": "Rogers",
    isAvenger: false,
    movies: ["Winter Soldier", "Civil war"],
    address: {
        city: "Manhatten",
        state: "New York",
    },
    age: 45,
    1:"hello"
}
// print
// console.log(cap);
// get
// .notation
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.address.city);
// console.log(cap.movies[1]);
// space seperated key -> normally key
// console.log(cap["age"]);
// console.log(cap["name"]);
// console.log(cap["Last name"]);
// console.log(cap["key"]);
// console.log(cap.key);
// cap.name 
let name = "age";
// console.log(cap[name]);
// console.log(cap.name);
// if a key is present -> update/Set
// set
// cap.friends = ["Peter", "Tony", "Bruce"];
// update
// cap.isAvenger = true;
console.log("````````````````````");
// console.log(cap);
// delete
delete cap["Last name"];
// traverse
// for (let key in cap) {
//     console.log(key ," : ", cap[key]);
// }
cap.movies.splice(1,1);
console.log(cap);