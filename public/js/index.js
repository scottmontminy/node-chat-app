var socket = io();

socket.on('connect', function () {
  console.log('Connected to server')

  socket.emit('createMessage', {
    to: 'keith@example.com',
    text: 'All good homie'
  })
});

socket.on('disconnect', function () {
  console.log('Disconnected from server')
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});
