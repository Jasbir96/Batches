function fn() {
    console.log("inside fn");
    fn1();
    return "something from fn";
}
function fn1() {
    console.log("inside fn1");
    fn2();
    return "hello from fn1";
}
function fn2() {
    console.log(" inside fn2");
    return "hello from fn2";
}


console.log("before");
console.log("Line number 32 cap sends ", fn());
console.log("After");
function fn() {
    console.log("inside fn");

    return "something from fn";
}
function fn1() {
    console.log("inside fn1");

    return "hello from fn1";
}
function fn2() {
    console.log(" inside fn2");
    return "hello from fn2";
}
console.log("before");
console.log("Line number 32 cap sends ", fn(), fn1(), fn2());
console.log("After");