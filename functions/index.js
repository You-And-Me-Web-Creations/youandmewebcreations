const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
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

    // mailTransport.sendMail(mailOptions);
    // res.status(200).send({ isEmailSend: true });

    return mailTransport.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.send(err.toString());
      }
      return res.send("Sent");
    });
  });
});
