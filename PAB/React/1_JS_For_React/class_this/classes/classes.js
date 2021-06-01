// /class always work in strict mode
// age=10;
// name="fake";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        console.log(this);
        console.log(`His Name is ${this.name} and age is 
        ${this.age}`);
    }
    setDetails(newName, newAge) {
        this.name = newName;
        this.age = newAge
    }
}
let binod = new Person("Binod", 23);
binod.getDetails();
// binod.setDetails("Ravi",24);
// binod.getDetails();
// window
// button added
let btn1 = document.querySelector(".btn-1")
let btn2 = document.querySelector(".btn-2")
// event listener -> pass
btn1.addEventListener("click", function(){
        binod.getDetails()

});
btn2.addEventListener("click", binod.getDetails);
// window
setTimeout(binod.getDetails, 1000);
// undefined
let fn = binod.getDetails;
fn();
