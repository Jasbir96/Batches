function getFirstName(firstName) {
 let a=10;
    console.log("firstName", firstName);
    return function getLastName(lastName) {
        console.log("lastName", lastName);
        return function printFullName() {
            console.log("My Name is ", firstName, lastName);
            console.log("a",a);
        }
    }
}
let getLastName = getFirstName("Jasbir");
console.log("get firstName stack hat gya hai")
let printFullName = getLastName("Singh");
console.log("getLastName stack hat gya hai")
printFullName();

// What is a closure ?? -> closure is a feature of javascript 
// which enables the access of variable that are declared 
// outside the current function even if 
// the outer function is removed from the stack

// Closure is attached with inner function