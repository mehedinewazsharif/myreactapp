import React, { useState } from 'react';

function Content() {
  const [displayText, setDisplayText] = useState('');
  const [inputText, setInputText] = useState('');

  const handleButtonClick = () => {
    setDisplayText(inputText);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className='content'>
      <div className='mb'>
        <textarea value={inputText} onChange={handleInputChange} placeholder='write something...' rows={8} cols={50} />
      </div>  
      <div className='mb'>
        <button onClick={handleButtonClick}>Click Me</button>
      </div>  
        <p>{displayText}</p>
    </div>
  );
}

export default Content;
