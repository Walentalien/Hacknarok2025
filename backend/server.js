const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const mongoose = require('mongoose');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);



app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Serwer czatu działa!');

});



io.on('connection', (socket) => {
  console.log('Nowy użytkownik połączony:', socket.id);

  socket.on('message', (data) => {
    console.log('Otrzymano wiadomość:', data);
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('Użytkownik rozłączony:', socket.id);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});