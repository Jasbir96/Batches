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
    // check if the entry object is array or a normal obj
    let isArr = Array.isArray(object);
    // if array then send empty array other wise send empty obj -> to copy data from orginal obj/array
    let cloning = isArr ? [] : {};
    // [fn,lastName,address]
    // loop through all the entries of the orginal object 
    Object.keys(object).map((prop) => {
        // normal value type => data copy to empty obj
        if (typeof object[prop] != "object") {
            cloning[prop] = object[prop];
        }
        // if the key is an array 
        else if (Array.isArray(object[prop])) {
            // new obj -> array ko spread kar do 
            cloning[prop] = [...object[prop]];
                // now work on those entries of that array  -> by looping over them  
            for (let i = 0; i < cloning[prop].length; i++) {
                // reference type 
                if (cloning[prop][i] == "object") {
                    // clone wale me bhej 
                    cloning[prop][i] = superClone(object[prop][i]);
                }
            }
            // array -> objects -> super clone 
        } else if (typeof object[prop] === "object") {
            cloning[prop] = superClone(object[prop]);
        }
    });
    return cloning;
};
