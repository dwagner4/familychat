import React from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = React.useState(0);

  const onChatId = (e) => {
    console.log("has chat id")
  };
  const onNoId = (e) => {
    console.log("no chat id")
  };

  return (
    <div style={{ 
      backgroundColor: 'pink', 
      textAlign: "center",
      padding: "10%",
      margin: "10%",
      borderRadius: "20px",
      color: 'black' }} 
    >
        <span>Progress Bar  </span>
        <button 
          onClick={onChatId} 
          style={{
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '10px',
            padding: '10px',
            margin: '10px'
        }}>
          HASCHATID
        </button> 
        <button 
          onClick={onNoId}
          style={{
            backgroundColor: 'green',
            color: 'white',
            borderRadius: '10px',
            padding: '10px',
            margin: '10px'
        }}>
          NOCHATID
        </button> 
    </div>
  );
};

export default ProgressBar;