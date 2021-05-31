// destructuring in objects
// let arr = ["Jasbir", "Singh", "24", "Indian"];
// let name = arr[0];
// let lastName = arr[1];
// let [name, lastName, , Nationality] = arr;
// default value
// let [name = "Steve",
//  lastName = "rogers",age, , mentor = "Web"] = [];
// console.log(name);
// console.log(lastName);
// console.log(mentor);
// console.log(age);
// objects
// destructuring in objects
let person = { name: "Steve", country: "Los Angeles",
 job: "Avenger" };
// console.log("name", person.name);
// console.log("country", person.country);
// console.log("job", person.job);
// console.log("abc", person.abc);
// get a key's value into a variable 
// let { name, country, abc } = person;
// default value can also be given
let { name, country:Nationality, abc = "hello",job } = person;
console.log("Nationality",Nationality)
// console.log(name + " ", country + " " + abc);