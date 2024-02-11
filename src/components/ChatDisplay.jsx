import React from 'react';

const ChatDisplay = () => {

  const onQuitChat = () => {
    console.log("quitchat")
  }

  return (
    <div style={{ 
      backgroundColor: 'orange',
      textAlign: "center",
      padding: "10%",
      margin: "10%",
      borderRadius: "20px", 
    }} >
        Chat Display
        <button 
          onClick={onQuitChat}
          style={{
            backgroundColor: 'green',
            color: 'white',
            borderRadius: '10px',
            padding: '10px',
            margin: '10px'
        }}>
          Quit Chat
        </button> 
    </div>  
  );
};

export default ChatDisplay;
