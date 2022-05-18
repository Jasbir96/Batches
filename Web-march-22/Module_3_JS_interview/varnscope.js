// scope of var variable 
var a = 10;
function fn() {
    var a = 20;
    console.log("4", a);
    a++;
    if (true) {
        var a = 30;
        a++;
        console.log("9", a);
    }
    a++;
    console.log("13", a);
}
console.log("15", a);
fn();
console.log("17", a);