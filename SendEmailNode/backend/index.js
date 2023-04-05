const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const sendEmail = require("./sendEmail.js");
app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { to, subject, message } = req.body;
  if (!to || !subject || !message) {
    return res.json({ error: true, message: "algum campo vazio" });
  }
  const isSent = await sendEmail(to, subject, message);
  if (isSent) {
    return res.json({ error: false, message: "email enviado" });
  } else {
    return res.json({ error: true, message: "erro ao enviar email" });
  }
});

app.listen(PORT, () => console.log("server is running in port", PORT));
