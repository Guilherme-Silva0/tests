const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: { origin: "http://localhost:5173" },
});

const PORT = process.env.PORT || 3001;

io.on("connect", (socket) => {
  console.log("Usuario conectado", socket.id);

  socket.on("disconnect", (reason) => {
    console.log("Usuario desconectado", socket.id);
  });

  socket.on("set_username", (userName) => {
    socket.data.userName = userName;
  });

  socket.on("message", (text) => {
    io.emit("receive_message", {
      text,
      authorId: socket.id,
      author: socket.data.userName,
    });
  });
});

server.listen(PORT, () => console.log("server running in port " + PORT));
