const nodemailer = require("nodemailer");
const secrets = require("../../activity/secrets");
async function mailSender() {
    // input through which mechanism send your email
    //  -> port, facilitator (technical details) 
    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: secrets.APP_EMAIL,
            pass: secrets.APP_PASSWORD
        }
    });
    let token = "sdmfbdskbdb";
    let dataObj = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "dcompany631@gmail.com", // list of receivers
        subject: "Hello ✔ Testing for FJP", // Subject line
        html: `<b>HTML text testing email for fjp with token ${token}?</b>`,
    }
    // send mail with defined transporter object
    let info = await transporter.sendMail(dataObj);
}
mailSender()
    .then(function () {
        console.log("mail send successfully")
    })
    .catch(console.error);