// fn statement
fn1();
function fn1() {
    console.log(" I am statement");
}
// fn expression
var fn2 = function () {
    console.log(" I am expression");
}

// arrow fn  
var fn3 = () => {
    console.log(" I am arrow")
}

// IIFEE
(function IIFEE() {

    console.log(" I am IIFEE");
})()