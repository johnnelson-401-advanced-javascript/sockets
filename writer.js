const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const writeFile = require('./write-file');


socket.on('file-read', data =>{
  writeFile(data)
    .then(data => {
      socket.emit('file-write', data);
    })
    .catch((err) =>{
      socket.emit('file-error', err);
    });
});