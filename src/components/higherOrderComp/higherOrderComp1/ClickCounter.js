import React from 'react';
import WithCounter from './WithCounter'

const ClickCounter = (props) => {
  const {count, incrementCounter,name} = props
  return (
    <div>
      <button onClick={incrementCounter}>

        {name} click counter - {count}
      </button>
    </div>
  );
};

export default WithCounter(ClickCounter,5);
