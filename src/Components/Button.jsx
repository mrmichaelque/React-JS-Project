import React, { useState } from 'react';

function Button() {
  const [buttonText, setButtonText] = useState('Click me'); 
  // Initial button text

  const handleClick = () => {
    // Update button text when clicked
    setButtonText('Clicked!');
    // You can perform other actions here as well
  };

  return (
    <div className="App">
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default Button