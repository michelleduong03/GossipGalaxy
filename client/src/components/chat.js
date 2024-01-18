// Example component in React
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const socket = io();

  useEffect(() => {
    // Listen for incoming chat messages
    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up on component unmount
    return () => {
      socket.disconnect();
    };
  }, []); // Run once on component mount

  const sendMessage = () => {
    // Emit a chat message to the server
    socket.emit('chat message', messageInput);
    setMessageInput('');
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
