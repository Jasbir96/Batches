// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let key in contacts) {
        let contact = contacts[key];
        if (contact.firstName == name) {
            if (contact[prop]==undefined) {
                return "No such property";
            } else {
                return contact[prop];
            }
        }
    }
    return "No such contact";
    // Only change code above this line
}
// let output = lookUpProfile("Akira", "likes");
output = lookUpProfile("Kristian", "lastName")
console.log(output)
output = lookUpProfile("Sherlock", "likes")
console.log(output)
output = lookUpProfile("Harry", "likes")
console.log(output)
output = lookUpProfile("Bob", "number")
console.log(output)
output = lookUpProfile("Bob", "potato")
console.log(output)
output = lookUpProfile("Akira", "address")
console.log(output)