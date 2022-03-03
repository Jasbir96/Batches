// var is a function scope
var a;
a = 10;
function fn() {
    console.log("10");
    console.log("Before declaration 8", a);
    var a;
    console.log("After declaration 10", a);
    // a = 20;
    console.log("After intialization 12", a);
}
fn();