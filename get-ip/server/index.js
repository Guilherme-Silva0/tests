const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  console.log("Endereço IP do usuário:", ip);
  res.json({ ip: ip });
});

app.listen(3000, () => {
  console.log("Servidor ouvindo na porta 3000");
});
