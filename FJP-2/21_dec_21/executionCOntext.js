// GEC
console.log("Before declaration 2", a)
var a;
console.log("After declaration 4", a);
a = 10;
console.log("After intialization 6", a);
function fn() {
    console.log("Before declaration 8", a)
    var a;
    console.log("After declaration 10", a);
    a = 20;
    console.log("After intialization 12", a);
}
fn();

// next question





























