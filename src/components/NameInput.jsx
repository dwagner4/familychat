import React from 'react';

const NameInput = () => {

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
        Name Input
        <button 
          onClick={onQuitChat}
          style={{
            backgroundColor: 'lightgreen',
            color: 'black',
            borderRadius: '10px',
            padding: '10px',
            margin: '10px'
        }}>
          Quit Chat
        </button> 
    </div>  
  );
};

export default NameInput;
