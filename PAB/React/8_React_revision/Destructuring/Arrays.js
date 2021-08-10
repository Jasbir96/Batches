let introduction = ['Hello', 'I', 'am', 'Tushar'];
// let greeting = introduction[0];
// let pronoun = introduction[1];
//traditional
///////////////Destructuring
// hooks 
let [greeting, pronoun, variable, name] = introduction;
// console.log(greeting);
// console.log(pronoun);
// console.log(variable);
// console.log(name);
////////////////skipping values
let [greeting,pronoun,,name]=introduction;
// console.log(greeting);
// console.log(pronoun);
// console.log(name);
//////////////////////////////////giving default values

let [greeting='hi',name='Tushar']=['hello'];
// console.log(greeting);
// console.log(name);

/////////////Swapping
// let a =3;
// let b=6;
// [a,b]=[b,a]
// console.log(a);
// console.log(b);

//////query
let [greeting] = introduction;
console.log(greeting);