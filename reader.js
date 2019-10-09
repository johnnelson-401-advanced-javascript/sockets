const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const readFile = require('./read-file');

readFile(process.argv[2])
  .then(data => {
    socket.emit('read-file', data);
  })
  .catch((err) => {
    socket.emit('file-error', err);
  });
