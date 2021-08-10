const user ={
    id:339,
    name:'Tushar',
    age:22,
    education:{
        degree:'Masters',
        school:{
            name:'SPS',
            location:'Pitampura'
        }
    }
};
// let {age} = user;
// console.log(age);

//degree
//  let {education} = user;
//  console.log(degree);

//school name
let {education:{school:{name:identity}}}=user;
console.log(identity);

