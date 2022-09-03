const express = require("express");
const app = express();
const secrets = require("./secrets");
const shortId = require("shortId");
const Razorpay = require("razorpay");
const instance = new Razorpay({
    key_id: secrets.KEY_ID,
    key_secret: secrets.KEY_PASSWORD,
});
// step 1 for initation
app.use(express.static("public"));
app.get("/checkout", function (req, res) {
    const currency = "INR";
    const amount = 5000;
    const planName = "Myfirst Plan";
    //    everytime you have to create a payment page
    // amount,planName -> DB
    // booking create -> create  
//    this sends info to razorpay dashboard 
    instance.orders.create({
        amount: amount,
        currency: currency,
        receipt: shortId.generate(),
        notes: {
            key1: planName
        }
    })
    res.status(200).json({
        currency: currency,
        amount: amount,
        product: planName
    });
})
app.listen(3000, function () {
    console.log("server started at port 3000")
})