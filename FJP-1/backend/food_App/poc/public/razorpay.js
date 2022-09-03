
// new razorpay
const rzpButton = document.querySelector("#rzp-button1");
rzpButton.addEventListener("click", async function (e) {
    //   1. backend request 
    const response = await fetch("http://localhost:3000/checkout");
    const data = await response.json();
    console.log("data", data);
    // 2. options fill data
    var options = {
        "key": "rzp_test_KJ2MtP246z2cn4", // Enter the Key ID generated from the Dashboard
        "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": data.currency,
        "name": "Acme Corp",
        "description": data.product,
        
    };
    // payemnt page create 
    const paymentPage = new Razorpay(options);
    //    payment page open
    paymentPage.open();
    // // page reload prevent 
    e.preventDefault();
})

