const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (to, subject, message) => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, //true para 465, false para as outras
    auth: {
      user: process.env.EMAIL_HOST,
      pass: process.env.PASS_EMAIL_HOST,
    },
  });

  const isSent = await transport.sendMail({
    from: "Guilherme Silva <" + process.env.EMAIL_HOST + ">",
    to: to,
    subject: subject,
    html: message,
    text: message,
  });
  return isSent;
};

module.exports = sendEmail;
