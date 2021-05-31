const user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {
        degree: 'Masters',
        school: {
            name: 'SPS',
            location: 'Pitampura'
        }
    },
    friends: ["Falcon", "Bucky"]
};
//  1st Method
let Newdegree = user.education.degree;
let Newname = user.education.school.name;
// 2nd Method
let { education: { degree } } = user;
let { education: { school: { name, location } } } = user;
let { education: { school } } = user;
console.log("degree", degree);
console.log("degree", name);
console.log("location", location);
console.log("school", school);
let { friends } = user
console.log("Hello",friends);
