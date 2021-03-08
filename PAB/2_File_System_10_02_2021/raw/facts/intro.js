// No main
// left to right top to bottom 
console.log("Hello PAB:)");
// variable declare
// a is variable that can only contain an integer
// statically typed lang
// int a;
// dynamically typed 
// let -> a is variable that initially contains undefined
// Primitve types: number ,string ,boolean, undefined,null
let a;
// Number
a = 10;
a = 10.1;
// string
a = "string";
a = 'also string';
a = null;
// console.log("a is", a);
// Javascript -> Brenden Eich (10 days)-> Netscape browser(25 year)-> 
// Js syntax-> Java
// loops,conditionals,classes,functions ,arrays,
// input;-> array 
let input = process.argv.slice(2);
console.log(input);
let num = input[0];
let flag = true;
for (let div = 2; div * div <= num; div++) {
    if (num % div == 0) {
        flag = false;
        break;
    }
}
if (flag == true) {
    console.log(num, "is prime");
} else {
    console.log(num, "is not prime");
}
