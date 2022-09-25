// deep copy -> deepclone -> similar
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

// you need to make a deep copy for it
// * shallow copy 
// ** address copy
// let person2 = person;
// person2.firstName = "fake";
// console.log("person", person);
// ** spread -> it only copies data for single level rest references are copied
// let spreadPerson = { ...person };
// person.firstName = "fake";
// person.address.city = "fake";
// console.log("spreadPerson", spreadPerson);


// how to deep copy -> use stringify and parse -> parsing is one of the most costliest op; 
let string = JSON.stringify(person);
let parsedString = JSON.parse(string);
// console.log("parsedString", parsedString);
person.firstName = "fake";
person.address.city = "fake";
console.log("parsedString", parsedString);
// console.log(parsedString.movies[0]);


// deep clone implementation 
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
