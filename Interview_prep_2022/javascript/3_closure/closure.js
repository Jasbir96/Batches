function getFirstName() {
    let firstName = "Jasbir"
    console.log("Your first name is ", firstName);
  return    function getLastName() {
        let lastName = "Singh"
        console.log("Your lastName name", lastName);
        return function printFullName() {

            console.log("full Name ", firstName, " ", lastName);
        }
    }
    // 
}
let getLastName = getFirstName();
console.log("calling last name");
let getFullname = getLastName();
console.log("calling full Name");
getFullname();
// lexical scope : variables outside a function are available for it 
// closure : variables outside a function are available for it even if outer function is removed from the stack.
 //closure is a feature of js 

// functions -> are object ->
// variable -> parnet` 



