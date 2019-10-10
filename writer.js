const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const writeFile = require('./write-file');


socket.on('capitalize-file', data =>{
  writeFile(data)
    .then(data => {
      socket.emit('write-file', data);
    })
    .catch((err) =>{
      socket.emit('file-error', err);
    });
});