const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.on('read-file', data => {
  //emit read-file with the capitalized file. 
  socket.emit('capitalized', data.toUpperCase());
})
  .catch((err) => {
    socket.emit('file-error', err);
  });