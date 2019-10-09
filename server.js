const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.emit('hello');
  socket.on('read-file', data => {
    socket.broadcast.emit('read-file', data);
    console.log(data);
  });
  socket.on('capitalized', data => {
    console.log(data);
  });
  socket.on('file-error', err => {
    console.log(err);
  });
  socket.on('file-write', data => {
    console.log(data);
  });
});