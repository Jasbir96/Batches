function f3() {
    console.log(" I am F3");
    // while (true) { };
    return "returned from f3"
}
function f2() {
    console.log(" I am F2");
    f3();
    return "returned from f2";
}
function f1() {
    console.log("f1 was called");
    f2()
    return "returned from f1";
}
console.log("Before");
console.log("Returned val is ", f1(),f2(),f3());
console.log("After");