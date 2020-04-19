const functions = require("firebase-functions");
// const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
// admin.initializeApp();

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.submit = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return;
    }

    const mailOptions = {
      from: req.body.email,
      replyTo: req.body.email,
      to: gmailEmail,
      subject: `${req.body.name} just messaged me from my website`,
      text: req.body.message,
      html: `<p>${req.body.message}</p>`,
    };

    return mailTransport.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.send(err.toString());
      }
      return res.send("Sended");
    });
    // console.log("New email sent to:", "youandmewebcreations@gmail.com");
    // res.status(200).send({ isEmailSend: true });
    // return;
  });
});
