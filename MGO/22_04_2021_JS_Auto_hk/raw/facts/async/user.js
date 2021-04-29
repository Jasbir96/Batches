// user company-> charge credit card -> commission
console.log("Before");
// trust issue
let amount = 100;
let priceofOne = 20;
chargeCreditCard(amount, cb);
function cb() {
    amount = amount - priceofOne;
    console.log("Amount: ", amount);
}
console.log("After");
// 2015 -> Promises
function chargeCreditCard(amount, cb) {
    console.log("processing payment")
    setTimeout(function scb() {
        cb();
        cb();
        console.log("payment done");
    }, 1000);

}