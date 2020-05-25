("use strict");
const nodemailer = require("nodemailer");

export default (req, res) => {
  if (req.method === "POST") {
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "werwejrhoertje@gmail.com", // generated ethereal user
          pass: "Hoer123321*", // generated ethereal password
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `${req.body.email}`, // sender address
        to: `${req.body.email}`, // list of receivers
        subject: `${req.body.email} ${req.body.name}`, // Subject line
        text: `TIME: ${req.body.time} DATE: ${req.body.date}`, // plain text body
        html: `TIME: ${req.body.time} DATE: ${req.body.date}`, // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ name: "John Doe" }));
  }
};
