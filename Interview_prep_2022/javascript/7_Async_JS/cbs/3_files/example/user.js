// user company-> charge credit card -> commission
let { chargeCreditCard } = require("./vendor");

let amount = 100;
let priceofOne = 20;
// kuch work 
chargeCreditCard(amount, cb);
function cb() {
    amount = amount - priceofOne;
    console.log("Amount: ", amount);
}
console.log("After");
