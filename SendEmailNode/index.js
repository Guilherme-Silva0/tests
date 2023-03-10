const nodemailer = require("nodemailer");
require("dotenv").config();

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, //true para 465, false para as outras
  auth: {
    user: process.env.EMAIL_HOST,
    pass: process.env.PASS_EMAIL_HOST,
  },
});

transport
  .sendMail({
    from: "Guilherme Silva <" + process.env.EMAIL_HOST + ">",
    to: "luiz.silva136@aluno.ce.gov.br",
    subject: "Enviando email com nodemailer",
    html: "<h1>Olá, tudo bem?</h1> <p>Este email foi enviado usando o nodemailer</p>",
    text: "Olá, tudo bem? Este email foi enviado usando o nodemailer",
  })
  .then(() => console.log("email enviado"))
  .catch((err) => console.log("erro ao enviar email", err));
