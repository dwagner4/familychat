import React, { useState } from 'react';
import './ChatDisplay.css';

const ChatDisplay = () => {
  const [chatItems, setChatItems] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleQuitChat = () => {
    // Perform any necessary cleanup or actions when quitting the chat
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      setChatItems([...chatItems, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-display">
      <div className="chat-items">
        {chatItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <form className="chat-input" onSubmit={handleSendMessage}>
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <button className="quit-button" onClick={handleQuitChat}>Quit Chat</button>
    </div>
  );
};

export default ChatDisplay;

