import React, {useState} from 'react';

const NameInput = () => {

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the value, e.g., submit it to a server
    console.log(value);
  };

  const onQuitChat = () => {
    console.log("quitchat")
  }

  return (
    <div style={{ 
      backgroundColor: 'orange',
      textAlign: "center",
      width: "500px",
      padding: "10%",
      margin: "10%",
      borderRadius: "20px", 
    }} >
      Name Input
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
        
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
