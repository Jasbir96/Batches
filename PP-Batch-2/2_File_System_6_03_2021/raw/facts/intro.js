// no main
// top-> bottom , left-> right
// convention -> java -> camel casing 
console.log("Hello PP:)");
// variable  declare 
let varName;
// /statically defined -> variable types=> statically typed
// JS -> dynamically typed languages
// int varName
// intialize  
// types-> primitives-> number ,string,boolean ,null ,undefined
varName = 10;
varName = 1.2;
console.log("I am ", varName);
varName = "string";
varName = 'another string';
varName = true;
varName = null;
// Javscript (10 days)-> (brenden eich)-> netscape browser->(java syntax,easy to code)
// javscript -> java -> loops, conditional , break return functions arrays classes
let number = 23
let flag = true;
for (let div = 2; div * div <= number; div++) {
    if (number % div == 0) {
        flag = false;
        break;
    }
}
if (flag == true) {
    console.log(number, "is prime");
} else {
    console.log(number, "is not  prime");

}