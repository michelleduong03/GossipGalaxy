const socketIo = require ("socket.io")

const configureSocket = (server) => {
    const io = socketIo(server);
  
    io.on('connection', (socket) => {
      console.log('A user connected');
  
      socket.on ('chat message', (message) => {
        console.log(`Message: ${message}`);

        io.emit('chat message', message); // lets all connected clients know the message
      });

      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  
    return io;
  };
  
  module.exports = configureSocket;