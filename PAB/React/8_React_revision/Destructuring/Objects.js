/////////////basic way

let person = {
    name: 'Steve',
    country: 'Los Angeles',
    job: 'Avenger'
}

// let name = person.name;
// let country = person['country'];
// let job = person.job;
// //////////////////////////Destructuring

let { name, country, job } = person;
// console.log(name);
// console.log(country);
// console.log(job);

///////////////////////Undefined case

// let {name,country,job,car} =person;
// console.log(car);
/////////////////////////Default value
// reducer
let { name, country, job, car = 'chevy' } 
= person;
// console.log(car);
////////////////////////////////Alias
// rename 
let { name, country: b, job: c } = person;
console.log(name);
console.log(b);
console.log(c);