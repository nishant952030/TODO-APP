import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const PopUp = ({ onClose, onSubmit }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const inputRef = React.createRef();

  const handleInput = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    onClose();
    onSubmit(input1, input2);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className="popup-div">
        <input
          ref={inputRef}
          value={input1}
          onChange={(event) => handleInput(event, setInput1)}
          type="text"
          placeholder="What do you wanna do?"
          className="input1"
          required
        /><br />
        <input
          value={input2}
          onChange={(event) => handleInput(event, setInput2)}
          type="text"
          placeholder="Ex-13 Jun"
          className="input2"
        required/>
      </div>
      <button onClick={handleSubmit} className="add-task-btn">ADD TASK</button>
    </>,
    document.getElementById('root2')
  );
};

export default PopUp;
