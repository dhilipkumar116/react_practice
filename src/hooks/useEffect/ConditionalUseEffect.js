import React, { useEffect, useState } from 'react';

function ConditionalUseEffect() {
  const [count, setCount] = useState(0);
  const [myName, setMyName] = useState('');

  // onChange func cause sideEffects as a result every time useEffect trigered
  // to restrict unwanted trigers 
  // we need to mention state , then useEffect will get trigered only if the specified state changes
  // in this example we are looking for count(state)
  useEffect(() => {
    console.log('use effect updating doc title');
    document.title = `clicked ${count} times`;
  },[count]);

  return (
    <div>
      <input
        type='text'
        value={myName}
        placeholder='name'
        onChange={(e) => setMyName(e.target.value)}></input>
      <button onClick={() => setCount(count + 1)}>
        clicked {count} times
      </button>
    </div>
  );
}
export default ConditionalUseEffect;
