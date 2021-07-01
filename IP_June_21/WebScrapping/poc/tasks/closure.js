// closure is a feature of js where an inner function will always has access 
// to the variables of outer function even if outer function is removed from the execution stack
function printFirstName(firstName) {
    console.log(firstName);
    return function printFullName(lastName) {
        console.log(firstName, lastName);
    }
}
let rVal = printFirstName("Steve");

console.log(rVal);
for (let i = 1; i <= 10; i++) {
    console.log("Number is ", i);
}
rVal("Rogers");