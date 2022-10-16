
function chargeCreditCard(amount, cb) {
    console.log("processing payment")
    setTimeout(function () {
        console.log("payment done");

cb();
cb();


    }, 1000);

}
module.exports = {
    chargeCreditCard
}
