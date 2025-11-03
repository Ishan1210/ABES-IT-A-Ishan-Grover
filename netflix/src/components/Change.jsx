import React from 'react';

function Change() {
  const change = () => {
    console.log("Hello");
  };
   return (
    <div>
      <button onClick={change}>Click</button>
    </div>
  );
}

export default Change;


