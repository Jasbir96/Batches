var a = 10;
function c() {
    var a = 20;
    console.log("8", a);
    function b() {
            console.log("3", a);
        }
    b();
    console.log("10", a);
}
console.log("12", a);
c();
console.log("14", a);