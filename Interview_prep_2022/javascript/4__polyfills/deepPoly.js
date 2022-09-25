let fs = require("fs");
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    movies: [[{ key: "Die hard" }], "First Avenger"]
};
// []
let superClone = (object) => {
    let isArr = Array.isArray(object);
    let cloning = isArr ? [] : {};
    // [fn,lastName,address]
    Object.keys(object).map((prop) => {
        if (Array.isArray(object[prop])) {
            cloning[prop] = [...object[prop]];
            for (let i = 0; i < cloning[prop].length; i++) {
                if (cloning[prop][i] == "object") {
                    cloning[prop][i] = superClone(object[prop][i]);
                }
            }
            // array -> objects -> super clone 
        } else if (typeof object[prop] === "object") {
            cloning[prop] = superClone(object[prop]);
        } else {
            cloning[prop] = object[prop];
        }
    });
    return cloning;
};
let topLevelObject = superClone(person);
topLevelObject.address.street = "12";;
topLevelObject.movies[0].key = "die hard again";
// console.log("toplevelObject", topLevelObject);
fs.writeFileSync("data.json", JSON.stringify(person));
// person.address.street = "12";
// person.lastName = "Rogers";
// topLevelObject.firstName = "Steve";
// console.log("person", person);
// console.log("top level ", topLevelObject);
// reference copy 
// let newperson = person;
// newperson.lastName = "Singh";
// console.log("person", person);
// spread
// let newperson = { ...person };
// newperson.lastName = "Singh";
// newperson.movies.push("good day die hard");
// console.log("newperson", newperson);
console.log("person", person);
// code 
// let string = JSON.stringify(person);
// let newWhole = JSON.parse(string);