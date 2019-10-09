const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
var fs = require('fs');

socket.on('write-file', () => {
  
});
