import React from 'react';

const ThreadNav = () => {

  const onChatSelected = () => {
    console.log('chat selected');
  }

  return (
    <div style={{ 
      backgroundColor: 'blue', 
      textAlign: "center",
      padding: "10%",
      margin: "10%",
      borderRadius: "20px",
      color: 'white' 
    }} >
        ThreadNav
        <button 
          onClick={onChatSelected}
          style={{
            backgroundColor: 'green',
            color: 'white',
            borderRadius: '10px',
            padding: '10px',
            margin: '10px'
          }}>
          Chat Selected
        </button> 
    </div>
  );
};

export default ThreadNav;