import React, { useState } from 'react';

const Task = ({ input1, input2 }) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      {isChecked ? null : (
        <div className='task-div'>
          <h4 className='task-name'> {input1}  </h4>
          <div className='due-check'>
            <h4 className='due-date'>{input2}</h4>
            <input
              className='checkbox'
              type='checkbox'
              onChange={toggleCheckbox}
              checked={isChecked}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
