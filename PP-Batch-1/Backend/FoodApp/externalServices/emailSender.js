
const nodemailer = require("nodemailer");
const config = require("../secrets");
// async..await is not allowed in global scope, must use a wrapper
module.exports = async function main(token, userEmail) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //   let testAccount = await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: "pepcodingdev@gmail.com",
            // different from your login password 
            pass: config.APP_PASSWORD
        }
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <contact@gmail.com>', // sender address
        to: userEmail, // list of receivers
        subject: "Hello ✔", // Subject line        
        text: "Hello world?", // plain text body
        html:
            `<b>Hello world?</b> 
            <p>your reset token is
        <br>${token}</br>
        </p>`, // html body
    });
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

