import React, { useState } from 'react';

function Count1() {
  const [count, setCount] = useState(0);
  const [btnColor, setBtnColor] = useState('red');

  function changeColor() {
    setBtnColor(btnColor === 'red' ? 'green' : 'red');
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
      <br />
      <button onClick={changeColor} style={{ backgroundColor: btnColor, color: 'white' }}>
        {btnColor === 'red' ? 'Red' : 'Green'}
      </button>
    </div>
  );
}

export default Count1;
