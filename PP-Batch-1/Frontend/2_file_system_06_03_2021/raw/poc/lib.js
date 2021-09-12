let a = 10;
function fn() {
    console.log("Hello");
}
function fn1() {
    console.log("I am fn1");
}
// nodejs
module.exports = {
    val: a,
    func: fn
}