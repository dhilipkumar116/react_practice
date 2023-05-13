import React, { useState } from 'react';

function CounterTwo() {
  const [count, setCount] = useState(0);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
    
        // setCount(() => count + 1); it will inc by 1 instead of 5
        setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}>
        count - {count}
      </button>
      <button onClick={incrementFive}>
        increment 5 - {count}
      </button>
    </div>
  );
}

export default CounterTwo;
