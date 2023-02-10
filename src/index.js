import express from "express";
import * as dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

const sendMail = async () => {
  const mailID = process.env.MAIL_ID;
  const password = process.env.MAIL_PASS;
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,
    auth: {
      user: mailID,
      pass: password,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Some new name" <fake.email@gmail.com>',
    to: "xyz@gmail.com,abc@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b><p>This is my first proper email, written and sent by me using node-js.</p>",
  });
  console.log("Message sent: %s", info.messageId);
};

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else {
    console.log(`Successfully connected to PORT ${PORT}`);
    sendMail();
  }
});
