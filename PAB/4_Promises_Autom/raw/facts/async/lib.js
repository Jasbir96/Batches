// cred 
// second party 
// propitery code
function chargeCreditCard(amount, cb) {
    console.log("processing payment")
    setTimeout(function () {
        console.log("payment done");
    }, 1000);

}
module.exports={
    chargeCreditCard
}
// console.log("before");
// function cb() {
//     console.log("Hello");
// }
// console.log("After");
// setTimeout(cb, 2000);