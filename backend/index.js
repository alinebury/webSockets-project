const express = require('express');
const path = require('path');
const { Server } = require("socket.io");
const http = require('http');

const app = express();
const PORT = 3001;

const frontend = path.join(__dirname, "../", "frontend");

app.use(express.static(frontend));

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

const io = new Server(httpServer)

io.on('connection', (socket) => {
  console.log('User connected', socket.id);

  // socket.on('disconnect', () => {
  //   console.log('User disconnected');
  // });

  socket.on('text_editor', (msg) => {
    socket.broadcast.emit('text_editor', msg);
  });
})
