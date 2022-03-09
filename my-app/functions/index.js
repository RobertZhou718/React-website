const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const express = require("express");
const app = express();

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "pingduzhou88@gmail.com",
    pass: "zpd07185",
  },
});

app.get("/sendmail", (req, res) => {
  const dest = "15703476199ma@gmail.com";
  const Username = decodeURI(req.query.Username);
  const email = decodeURI(req.query.email);
  const subject = decodeURI(req.query.subject);
  const message = decodeURI(req.query.message);
  const mailOptions = {
    from: Username, // Something like: Jane Doe <janedoe@gmail.com>
    to: dest,
    subject: subject, // email subject
    html: `<p style="font-size: 16px;"> ${email} <br /> ${message} </p>
              <br />
          `, // email content in HTML
  };

  // returning result
  try {
    transporter.sendMail(mailOptions);
    res.send("success");
  } catch (error) {
    res.send("error", error);
  }
});

exports.app = functions.https.onRequest(app);
