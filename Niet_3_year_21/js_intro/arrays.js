// declare an empty array
//              0           1       2           3           4
let names = ["Saksham", "Satyam", "Shashank", "Shubham", "Sonali"];
// console.log(names.length); //-> 5
// access
// console.log(names[3]);
// for (let i = 0; i < names.length; i++) {
//     console.log("Name is " + names[i]);
// }
// pop-> removelast
names.pop();
// push -> addlast
names.push("Anuj");
console.log(names);
// unshift -> addFirst
names.unshift("Peppy");
// shift -> removeFirst
console.log(names);