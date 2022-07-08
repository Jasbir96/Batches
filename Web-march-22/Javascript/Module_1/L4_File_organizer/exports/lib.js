function LibFn() {
    console.log("I am Lib fn");
}
function Inner() {
    console.log("I am Inner");
}
let a = 10;
// in javascript we can only send functions ,varaible to another 
// file  we can't send the whole
// nodejs

module.exports = {
    fn: LibFn,
    varName: a
}