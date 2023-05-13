import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      {/* method 1: but we cannot pass parameters to parent coponents */}
      {/* <button onClick={props.greetHandler}>greet parent</button> */}

      {/* method 2: using arrow method we can pass any number of 
            parameters to the parent component */}
      <button onClick={() => props.greetHandler('child')}>greet parent</button>
    </div>
  );
}

export default ChildComponent;
